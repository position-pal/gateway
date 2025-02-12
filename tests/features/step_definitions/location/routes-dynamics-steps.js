const { Given, When, Then } = require("@cucumber/cucumber");
const { createWebsocket } = require("../../utils/ws-utils");
const {
  startRouteEvent,
  piazzaDelPopoloLocation,
  cesenaCampusLocation,
  sample,
  stopRouteEvent,
} = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expect } = require("chai");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");

const receivedUpdates = [];

Given("I'm in routing mode", async () => {
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  this.leiaWs.on("message", data => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.id,
    global.astro.id,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 2), // ETA: in 2 minutes
  );
  await this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, piazzaDelPopoloLocation)));
});

When("I arrive at the destination", async () => {
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, cesenaCampusLocation)));
});

When("I stop the routing", async () => {
  await this.lukeWs.send(JSON.stringify(stopRouteEvent(global.luke.userData.id, global.astro.id)));
});

Then("the routing is stopped", { timeout: 20_000 }, async () => {
  await eventually(async () => {
    expect(
      receivedUpdates.some(
        update => update.UserUpdate.user === global.luke.userData.id && update.UserUpdate.status === "Active",
      ),
    ).to.be.true;
  }, 15_000);
});

Then("the route discarded", () => {
  // TODO: check the tracking session is none
});

Then("my state is updated to `Active`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.luke.userData.id}`,
      global.luke.token,
      {
        data: {
          status: { code: "OK", message: "" },
          state: "ACTIVE",
        },
      },
    );
  }, 10_000);
});

Then("my group's members receive a notification indicating the route has been successfully stopped", () => {
  // TODO: notification service
});
