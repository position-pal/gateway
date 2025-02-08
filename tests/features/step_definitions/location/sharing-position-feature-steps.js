const { Then, When, After } = require("@cucumber/cucumber");
const { createWebsocket, closeWebsocket } = require("../../utils/ws-utils");
const { sample, piazzaDelPopoloLocation } = require("../../utils/tracking-utils");
const { eventually } = require("../../utils/timings");
const { expectSuccessfulGetRequest } = require("../../utils/api-request-utils");

When("I start sharing my location", async () => {
  this.leiaWs = await createWebsocket(
    `ws/location/${global.leia.group}/${global.leia.userData.email}`,
    global.leia.token,
  );
  await this.leiaWs.send(
    JSON.stringify(sample(new Date(), global.leia.userData.email, global.leia.group, piazzaDelPopoloLocation)),
  );
});

Then("my last known location should be updated", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/location/${global.leia.group}/${global.leia.userData.email}`,
      global.leia.token,
      {
        status: { code: "OK", message: "" },
        location: piazzaDelPopoloLocation,
      },
    );
  }, 10_000);
});

Then("my state should be `Active`", { timeout: 15_000 }, async () => {
  await eventually(async () => {
    await expectSuccessfulGetRequest(
      `/api/session/state/${global.leia.group}/${global.leia.userData.email}`,
      global.leia.token,
      {
        status: { code: "OK", message: "" },
        state: "ACTIVE",
      },
    );
  }, 10_000);
});

After(async () => {
  await closeWebsocket(this.leiaWs);
});
