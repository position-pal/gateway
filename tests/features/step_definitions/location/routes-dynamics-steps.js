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
const { expectNotification } = require("../../utils/notification.utils");

let receivedUpdates = [];

Given("I'm in routing mode", { timeout: 20_000 }, async () => {
  console.log("I'm in routing mode");
  receivedUpdates = [];
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.id,
    global.astro.id,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 2), // ETA: in 2 minutes
  );
  await this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, piazzaDelPopoloLocation)));
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.luke.userData.id}`,
      global.luke.token,
      {
        status: { code: "OK", message: "" },
        state: "ROUTING",
      },
    );
  }, 15_000);
});

When("I have arrived at the destination", async () => {
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, cesenaCampusLocation)));
});

When("I have stopped the routing", async () => {
  await this.lukeWs.send(JSON.stringify(stopRouteEvent(global.luke.userData.id, global.astro.id)));
});

Then("the routing is stopped", { timeout: 20_000 }, async () => {
  await eventually(async () => {
    expect(
      receivedUpdates.some(
        (update) => update.UserUpdate.user === global.luke.userData.id && update.UserUpdate.status === "Active",
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
        status: { code: "OK", message: "" },
        state: "ACTIVE",
      },
    );
  }, 10_000);
});

Then(
  "my group's members receive a notification indicating I have arrived at the destination",
  { timeout: 70_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      body: `${global.luke.userData.id} has reached their destination on time.`,
      title: `${global.luke.userData.id} arrived!`,
    });
    global.leiaDevice.receivedNotifications = [];
  },
);

Then(
  "my group's members receive a notification indicating I have stopped the routing",
  { timeout: 70_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      body: `${global.luke.userData.id} journey completed successfully.`,
      title: `${global.luke.userData.id} journey ended`,
    });
    global.leiaDevice.receivedNotifications = [];
  },
);
