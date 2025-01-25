const { waitFor } = require("poll-until-promise");

/**
 * Check a condition repeatedly for a specified duration, ensuring the conditionally is continually met.
 * @param checkCondition the condition to meet
 * @param duration the duration of the check
 * @param interval the interval between each check
 * @returns {Promise<void>} a promise that resolves successfully if the condition is continually met
 *                         within the duration or rejects if the condition eventually fails.
 */
async function continually(checkCondition, duration = 60_000, interval = 1_000) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    checkCondition();
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
}

/**
 * Check a condition repeatedly until it is met or the timeout is reached.
 * @param checkCondition the condition to meet
 * @param duration the maximum duration to wait for the condition to be met
 * @param interval the interval between each check
 * @returns {Promise<void>} a promise that resolves successfully if the condition
 *                          is met within the timeout or rejects if the timeout is reached.
 */
async function eventually(checkCondition, duration = 60_000, interval = 1_000) {
  await waitFor(async () => checkCondition(), { timeout: duration, interval: interval });
}

module.exports = { continually, eventually };
