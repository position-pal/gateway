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
const { expectNotification } = require("../../utils/notification-utils");

let receivedUpdates = [];

Given("I'm in routing mode", { timeout: 20_000 }, async () => {
  receivedUpdates = [];
  global.leiaDevice.receivedNotifications = [];
  this.hanWs = await createWebsocket(`ws/location/${global.astro.id}/${global.han.userData.id}`, global.han.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  // make sure the routing mode is stopped - if not in routing mode, this will have no effect
  await this.hanWs.send(JSON.stringify(stopRouteEvent(global.han.userData.id, global.astro.id)));
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  const routingModeActivationEvent = startRouteEvent(
    global.han.userData.id,
    global.astro.id,
    piazzaDelPopoloLocation,
    cesenaCampusLocation,
    new Date(Date.now() + 1_000 * 60 * 2), // ETA: in 2 minutes
  );
  await this.hanWs.send(JSON.stringify(routingModeActivationEvent));
  await this.hanWs.send(JSON.stringify(sample(global.han.userData.id, global.astro.id, piazzaDelPopoloLocation)));
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.han.userData.id}`,
      global.han.token,
      {
        status: { code: "OK", message: "" },
        state: "ROUTING",
      },
    );
  }, 15_000);
});

When("I have arrived at the destination", async () => {
  await this.hanWs.send(JSON.stringify(sample(global.han.userData.id, global.astro.id, cesenaCampusLocation)));
});

When("I have stopped the routing", async () => {
  await this.hanWs.send(JSON.stringify(stopRouteEvent(global.han.userData.id, global.astro.id)));
});

Then("the routing is stopped", { timeout: 20_000 }, async () => {
  await eventually(async () => {
    expect(
      receivedUpdates.some(
        (update) => update.UserUpdate.user === global.han.userData.id && update.UserUpdate.status === "Active",
      ),
    ).to.be.true;
  }, 15_000);
  await this.hanWs.send(JSON.stringify(sample(global.han.userData.id, global.astro.id, cesenaCampusLocation)));
});

Then("the route discarded", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(`/api/session/session/${global.astro.id}`, global.luke.token, {
      sessions: [
        {
          scope: {
            user: { value: global.han.userData.id },
            group: { value: global.astro.id },
          },
          state: "ACTIVE",
          activeTracking: null,
          lastSampledLocation: {
            location: cesenaCampusLocation,
            user: { value: global.han.userData.id },
          },
        },
      ],
    });
  }, 10_000);
});

Then("my state is updated to `Active`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.han.userData.id}`,
      global.han.token,
      {
        status: { code: "OK", message: "" },
        state: "ACTIVE",
      },
    );
  }, 10_000);
});

Then(
  "my group's members receive a notification indicating I have arrived at the destination",
  { timeout: 65_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      body: `${global.han.userData.id} has reached their destination on time.`,
      title: `${global.han.userData.id} arrived!`,
    });
    global.leiaDevice.receivedNotifications = [];
  },
);

Then(
  "my group's members receive a notification indicating I have stopped the routing",
  { timeout: 65_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      body: `${global.han.userData.id} journey completed successfully.`,
      title: `${global.han.userData.id} journey ended`,
    });
    global.leiaDevice.receivedNotifications = [];
  },
);

When("I have gone offline", { timeout: 65_000 }, async () => {
  await new Promise((resolve) => setTimeout(resolve, 60_000));
});

Then("my group's members receive a notification indicating I have gone offline", { timeout: 65_000 }, async () => {
  await expectNotification(global.leiaDevice, {
    title: `${global.han.userData.id} connection lost!`,
    body: `User ${global.han.userData.id} went offline while in Routing mode!`,
  });
});

When("I have not arrived by the estimated time", { timeout: 125_000 }, async () => {
  await new Promise((resolve) => setTimeout(resolve, 120_000));
  await this.hanWs.send(JSON.stringify(sample(global.han.userData.id, global.astro.id, piazzaDelPopoloLocation)));
});

Then(
  "my group's members receive a notification indicating I have not arrived by the estimated time",
  { timeout: 65_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      title: `${global.han.userData.id} delay alert!`,
      body: `${global.han.userData.id} has not reached their destination as expected, yet.`,
    });
  },
);

When("I have been stuck in the same position for a while", { timeout: 35_000 }, async () => {
  for (let i = 0; i < 30; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1_000));
    await this.hanWs.send(JSON.stringify(sample(global.han.userData.id, global.astro.id, piazzaDelPopoloLocation)));
  }
});

Then(
  "my group's members receive a notification indicating I have been stuck in the same position for a while",
  { timeout: 65_000 },
  async () => {
    await expectNotification(global.leiaDevice, {
      body: `${global.han.userData.id} has been stuck in the same position for a while.`,
      title: `${global.han.userData.id} stationary alert!`,
    });
  },
);
