const { When, Then } = require("@cucumber/cucumber");

When("I have gone offline", () => {});

When("I have not arrived by the estimated time", { timeout: 70_000 }, async () => {});

When("I have been stuck in the same position for a while", () => {});

Then("my group's members receive a notification indicating I have not arrived by the estimated time", () => {
  // TODO: notification service
});

Then("my group's members receive a notification indicating I have been stuck in the same position for a while", () => {
  // TODO: notification service
});

Then("my group's members receive a notification indicating I have gone offline", () => {
  // TODO: notification service
});
