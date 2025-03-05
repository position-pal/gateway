const { When, Then } = require("@cucumber/cucumber");
const { createWebsocket } = require("../../utils/ws-utils");
const {
  startRouteEvent,
  piazzaDelPopoloLocation,
  intermediateLocation,
  cesenaCampusLocation,
  sample,
} = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");
const { expect } = require("chai");
const { expectNotification } = require("../../utils/notification-utils");

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
  await new Promise((resolve) => setTimeout(resolve, 250)); // otherwise updates are overwritten
  await this.lukeWs.send(JSON.stringify(sample(global.luke.userData.id, global.astro.id, intermediateLocation)));
});

Then("my state is updated to `Routing`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.astro.id}/${global.luke.userData.id}`,
      global.luke.token,
      {
        status: { code: "OK", message: "" },
        state: "ROUTING",
      },
    );
  }, 10_000);
});

Then("my group's members receive a notification indicating I've started a routing", { timeout: 65_000 }, async () => {
  await expectNotification(global.leiaDevice, {
    title: `${global.luke.userData.id} started a journey`,
  });
  global.leiaDevice.receivedNotifications = [];
});

Then(
  "my group's members can see the route I've been taken since activating routing mode",
  { timeout: 20_000 },
  async () => {
    await eventually(async () => {
      expect(
        receivedUpdates.some(
          (update) => update.UserUpdate.user === global.luke.userData.id && update.UserUpdate.status === "Routing",
        ),
      ).to.be.true;
    }, 5_000);
    await eventually(async () => {
      await expectSuccessfulGetRequest(`/api/session/session/${global.astro.id}`, global.luke.token, {
        sessions: [
          {
            scope: {
              user: { value: global.luke.userData.id },
              group: { value: global.astro.id },
            },
            state: "ROUTING",
            activeTracking: {
              route: {
                locations: [
                  {
                    location: piazzaDelPopoloLocation,
                    user: { value: global.luke.userData.id },
                  },
                  {
                    location: intermediateLocation,
                    user: { value: global.luke.userData.id },
                  },
                ],
              },
            },
            lastSampledLocation: {
              location: intermediateLocation,
              user: { value: global.luke.userData.id },
            },
          },
        ],
      });
    }, 10_000);
  },
);
