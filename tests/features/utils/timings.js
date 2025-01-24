const { waitFor } = require("poll-until-promise");

async function continually(checkCondition, duration = 60_000, interval = 1_000) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    checkCondition();
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
}

async function eventually(checkCondition, duration = 60_000, interval = 1_000) {
  await waitFor(async () => checkCondition(), { timeout: duration, interval: interval });
}

module.exports = { continually, eventually };
