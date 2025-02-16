const { expect } = require("chai");
const { eventually } = require("./timings");

async function expectNotification(device, expectedNotification) {
  await eventually(async () => {
    expect(
      device.receivedNotifications.some(
        (n) =>
          n.data &&
          n.data.title === expectedNotification.title &&
          (n.data.body === expectedNotification.body || expectedNotification.body == null),
      ),
    ).to.be.true;
  });
}

module.exports = { expectNotification };
