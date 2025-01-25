const { When, Then, Given } = require("@cucumber/cucumber");

When("I activate the routing mode indicating a destination and the ETA", () => {
  // 1. open ws connection for leia
  // 2. send message to activate routing mode
});

Then("my state is updated to `Routing`", () => {
  // i receive a user update with state `Routing`
  // make a request to get the state
});

Then("my group's members receive a notification indicating I've started a routing", () => {});

Then("my group's members can see the route I've been taken since activating routing mode", () => {
  // make a request to the session
});

// ---

Given("I'm in routing mode", () => {});

When("I arrive at the destination", () => {});

When("I stop the routing", () => {});

Then("the routing is stopped", () => {});

Then("the route discarded", () => {});

Then("my state is updated to `Active`", () => {});

Then("my group's members receive a notification indicating the route has been successfully stopped", () => {});

// ---

Given("a user in my group is in routing mode", () => {});

When("the user has not arrived by the estimated time", () => {});

Then("I receive an alert notification indicating the user has not arrived by the estimated time", () => {});

When("the user has been stuck in the same position for a while", () => {});

Then("I receive an alert notification indicating the user has been stuck in the same position for a while", () => {});

When("the user has gone offline", () => {});

Then("I receive an alert notification indicating the user has gone offline", () => {});
