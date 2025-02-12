const { When, Then } = require("@cucumber/cucumber");
const { createWebsocket } = require("../../utils/ws-utils");
const {
  startRouteEvent,
  piazzaDelPopoloLocation,
  cesenaCampusLocation,
  sample,
} = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");
const { expect } = require("chai");

const receivedUpdates = [];

When("I activate the routing mode indicating a destination and the ETA", async () => {
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.id,
    global.astro.id,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 15), // ETA: in 15 minutes
  );
  await this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, piazzaDelPopoloLocation)));
});

Then("my state is updated to `Routing`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.luke.userData.id}`,
      global.luke.token,
      {
        data: {
          status: { code: "OK", message: "" },
          state: "ROUTING",
        },
      },
    );
  }, 10_000);
});

Then("my group's members receive a notification indicating I've started a routing", () => {
  // TODO: notification service
});

Then(
  "my group's members can see the route I've been taken since activating routing mode",
  { timeout: 10_000 },
  async () => {
    await eventually(async () => {
      expect(
        receivedUpdates.some(
          update => update.UserUpdate.user === global.luke.userData.id && update.UserUpdate.status === "Routing",
        ),
      ).to.be.true;
    }, 5_000);
    // TODO: get session
  },
);
