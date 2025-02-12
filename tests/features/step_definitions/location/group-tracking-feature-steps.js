const { expect } = require("chai");
const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { testableLocationUpdates } = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");

const receivedUpdates = [];

When("I access my group tracking information", async () => {
  this.lukeWs = await createWebsocket(`ws/location/${global.astro.id}/${global.luke.userData.id}`, global.luke.token);
  this.leiaWs = await createWebsocket(`ws/location/${global.astro.id}/${global.leia.userData.id}`, global.leia.token);
  this.leiaWs.on("message", data => receivedUpdates.push(JSON.parse(data)));
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
  await eventually(() => expect(receivedUpdates).to.deep.equal(expectedUpdates), 15_000);
});

Then("the last known location of offline group members", () => {
  // TOOD session
});

After(async () => {
  await closeWebsocket(this.leiaWs);
  await closeWebsocket(this.lukeWs);
});
