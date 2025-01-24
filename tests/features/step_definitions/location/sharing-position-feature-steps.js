const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { astroGroupId, leia } = require("../../utils/users-groups-utils");
const { sample, piazzaDelPopoloLocation } = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulResponse } = require("../../utils/api-request-utils");

When("I start sharing my location", async () => {
  this.leiaWs = await createWebsocket(`ws/location/${astroGroupId}/${leia}`);
  await this.leiaWs.send(
    JSON.stringify(sample(new Date(), leia, astroGroupId, piazzaDelPopoloLocation)),
  );
});

Then("my last known location should be updated", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulResponse(`/api/session/location/${astroGroupId}/${leia}`, {
      status: { code: "OK", message: "" },
      location: piazzaDelPopoloLocation,
    });
  }, 10_000);
});

Then("my state should be `Active`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulResponse(`/api/session/state/${astroGroupId}/${leia}`, {
      status: { code: "OK", message: "" },
      state: "ACTIVE",
    });
  }, 10_000);
});

After(async () => {
  await closeWebsocket(this.leiaWs);
});
