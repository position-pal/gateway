const { When, Then, Given } = require("@cucumber/cucumber");
const { createWebsocket } = require("../../utils/ws-utils");
const {
  startRouteEvent,
  stopRouteEvent,
  piazzaDelPopoloLocation,
  cesenaCampusLocation,
  sample,
} = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");
const { expect } = require("chai");

let receivedUpdates = [];

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
          (update) => update.UserUpdate.user === global.luke.userData.id && update.UserUpdate.status === "Routing",
        ),
      ).to.be.true;
    }, 5_000);
    // TODO: get session
  },
);

// ---

Given("I'm in routing mode", async () => {
  receivedUpdates = [];
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

// ---

Given("a user in my group is in routing mode", async () => {
  receivedUpdates = [];
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.id,
    global.astro.id,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60), // ETA: in 1 minute
  );
  this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, piazzaDelPopoloLocation)));
});

When("the user has gone offline", () => {});

When("the user has not arrived by the estimated time", { timeout: 70_000 }, async () => {});

When("the user has been stuck in the same position for a while", () => {});

Then("I receive an alert notification indicating the user has not arrived by the estimated time", () => {
  // TODO: notification service
});

Then("I receive an alert notification indicating the user has been stuck in the same position for a while", () => {
  // TODO: notification service
});

Then("I receive an alert notification indicating the user has gone offline", () => {
  // TODO: notification service
});
