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
  this.lukeWs = await createWebsocket(`ws/location/${global.luke.group}/${global.luke.userData.email}`);
  this.leiaWs = await createWebsocket(`ws/location/${global.leia.group}/${global.leia.userData.email}`);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.email,
    global.luke.group,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 15),
  );
  await this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
  await this.lukeWs.send(
    JSON.stringify(sample(global.luke.userData.email, global.luke.group, piazzaDelPopoloLocation)),
  );
});

Then("my state is updated to `Routing`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.luke.group}/${global.luke.userData.email}`,
      global.luke.token,
      {
        status: { code: "OK", message: "" },
        state: "ROUTING",
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
          (update) => update.UserUpdate.user === global.luke.userData.email && update.UserUpdate.status === "Routing",
        ),
      ).to.be.true;
    }, 5_000);
    // TODO: get session
  },
);

// ---

Given("I'm in routing mode", async () => {
  console.log("I'm in routing mode");
  receivedUpdates = [];
  this.lukeWs = await createWebsocket(`ws/location/${global.luke.group}/${global.luke.userData.email}`);
  this.leiaWs = await createWebsocket(`ws/location/${global.leia.group}/${global.leia.userData.email}`);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.luke.userData.email,
    global.luke.group,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 15),
  );
  await this.lukeWs.send(JSON.stringify(routingModeActivationEvent));
});

When("I arrive at the destination", async () => {
  console.log("I arrive at the destination");
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.email, global.luke.group, cesenaCampusLocation)));
});

When("I stop the routing", async () => {
  console.log("I stop the routing");
  await this.lukeWs.send(JSON.stringify(stopRouteEvent(global.luke.userData.email, global.luke.group)));
});

Then("the routing is stopped", { timeout: 20_000 }, async () => {
  console.log("the routing is stopped");
  // TODO: receive stopped event
  await eventually(async () => {
    expect(
      receivedUpdates.some(
        (update) => update.UserUpdate.user === global.luke.userData.email && update.UserUpdate.status === "Active",
      ),
    ).to.be.true;
  }, 15_000);
  console.log("OK! Test passed");
});

Then("the route discarded", () => {
  // TODO: check the tracking session is none
});

Then("my state is updated to `Active`", () => {});

Then("my group's members receive a notification indicating the route has been successfully stopped", () => {
  // TODO: notification service
});

// ---

Given("a user in my group is in routing mode", () => {});

When("the user has not arrived by the estimated time", () => {});

Then("I receive an alert notification indicating the user has not arrived by the estimated time", () => {});

When("the user has been stuck in the same position for a while", () => {});

Then("I receive an alert notification indicating the user has been stuck in the same position for a while", () => {});

When("the user has gone offline", () => {});

Then("I receive an alert notification indicating the user has gone offline", () => {});
