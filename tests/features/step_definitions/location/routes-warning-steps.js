const { Given, When, Then } = require("@cucumber/cucumber");
const { createWebsocket } = require("../../utils/ws-utils");
const {
  startRouteEvent,
  piazzaDelPopoloLocation,
  cesenaCampusLocation,
  sample,
} = require("../../utils/tracking-utils");

const receivedUpdates = [];

Given("a user in my group is in routing mode", async () => {
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
