const { expect } = require("chai");
const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { cesenaCampusLocation, sample } = require("../../utils/tracking-utils");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");
const { continually, eventually } = require("../../utils/timings");

const receivedUpdates = [];

When("I stop sharing my location with that group", async () => {
  this.leiaWs = await createWebsocket(
    `ws/location/${global.leia.group}/${global.leia.userData.email}`,
    global.leia.token,
  );
  this.leiaWs.on("message", (data) => receivedUpdates.push(JSON.parse(data)));
  this.lukeWs = await createWebsocket(
    `ws/location/${global.luke.group}/${global.luke.userData.email}`,
    global.luke.token,
  );
  await this.lukeWs.send(
    JSON.stringify(sample(new Date(), global.luke.userData.email, global.luke.group, cesenaCampusLocation)),
  );
});

Then("the group's members should not see my location anymore", { timeout: 40_000 }, async () => {
  /* First, wait for the first update to be received, then check that no more updates are received for a
   * reasonable amount of time. Note that, after a while a new "Inactive" update will be received (see next step). */
  await eventually(() => expect(receivedUpdates.length).to.be.equal(1), 5_000);
  await continually(() => expect(receivedUpdates.length).to.be.equal(1), 30_000);
});

Then("my state should be updated to `Inactive`", { timeout: 100_000 }, async () => {
  await eventually(
    async () => {
      expect(
        receivedUpdates.some(
          (update) => update.UserUpdate.user === global.luke.userData.email && update.UserUpdate.status === "Inactive",
        ),
      ).to.be.true;
      await expectSuccessfulGetRequest(
        `/api/session/state/${global.luke.group}/${global.luke.userData.email}`,
        global.luke.token,
        {
          status: { code: "OK", message: "" },
          state: "INACTIVE",
        },
      );
    },
    90_000,
    2_000,
  );
});

Then("my last known location should still be available", async () => {
  await expectSuccessfulGetRequest(
    `/api/session/location/${global.luke.group}/${global.luke.userData.email}`,
    global.luke.token,
    {
      status: { code: "OK", message: "" },
      location: cesenaCampusLocation,
    },
  );
});

After(async () => {
  await closeWebsocket(this.leiaWs);
  await closeWebsocket(this.lukeWs);
});
