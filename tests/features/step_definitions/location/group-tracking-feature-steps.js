const { expect } = require("chai");
const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { testableLocationUpdates } = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { astroGroupId, leia, luke } = require("../../utils/users-groups-utils");

const testablePath = testableLocationUpdates(luke, astroGroupId);
const receivedUpdates = [];

When("I access my group tracking information", async () => {
  this.leiaWs = await createWebsocket(`ws/location/${astroGroupId}/${leia}`);
  this.lukeWs = await createWebsocket(`ws/location/${astroGroupId}/${luke}`);
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  for (const update of testablePath) {
    await this.lukeWs.send(JSON.stringify(update));
  }
});

Then(
  "I should see the real-time location of online group members",
  { timeout: 10_000 },
  async () => {
    const expectedUpdates = testablePath.map((update) => ({
      UserUpdate: {
        ...update.SampledLocation,
        position: [update.SampledLocation.position], // position may not be present in the received updates
        status: "Active",
      },
    }));
    await eventually(() => expect(receivedUpdates).to.deep.equal(expectedUpdates), 5_000);
  },
);

Then("the last known location of offline group members", () => {
  // TOOD: session
});

After(async () => {
  await closeWebsocket(this.leiaWs);
  await closeWebsocket(this.lukeWs);
});
