const { expect } = require("chai");
const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { testableLocationUpdates, sample, cesenaCampusLocation } = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");

const receivedUpdates = [];

When("I access my group tracking information", async () => {
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  await this.leiaWs.send(
    JSON.stringify(
      // simulate a sample in the past
      sample(global.leia.userData.id, global.astro.id, cesenaCampusLocation, new Date(Date.now() - 1_000 * 60 * 5)),
    ),
  );
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  this.testablePath = testableLocationUpdates(global.luke.userData.id, global.astro.id);
  for (const update of this.testablePath) {
    await this.lukeWs.send(JSON.stringify(update));
  }
});

Then("I should see the real-time location of online group members", { timeout: 20_000 }, async () => {
  const expectedUpdates = this.testablePath.map((update) => ({
    UserUpdate: {
      ...update.SampledLocation,
      position: [update.SampledLocation.position], // position may not be present in the received updates
      status: "Active",
    },
  }));
  await eventually(() => expect(receivedUpdates).to.deep.include.members(expectedUpdates), 15_000);
});

Then("the last known location of offline group members", { timeout: 35_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(`/api/session/session/${global.astro.id}`, global.luke.token, {
      sessions: [
        {
          scope: {
            user: { value: global.leia.userData.id },
            group: { value: global.astro.id },
          },
          state: "INACTIVE",
          activeTracking: null,
          lastSampledLocation: {
            location: cesenaCampusLocation,
            user: { value: global.leia.userData.id },
          },
        },
        {
          scope: {
            user: { value: global.luke.userData.id },
            group: { value: global.astro.id },
          },
          state: "ACTIVE",
          activeTracking: null,
          lastSampledLocation: {
            location: cesenaCampusLocation,
            user: { value: global.luke.userData.id },
          },
        },
      ],
    });
  }, 30_000);
});

After(async () => {
  await closeWebsocket(this.leiaWs);
  await closeWebsocket(this.lukeWs);
});
