const { fetchSuccessfulPostRequest } = require("./api-request-utils");

const pick = (obj, keys) => Object.fromEntries(keys.map((key) => [key, obj[key]]));

/**
 * Set up a user by registering and logging in, saving its auth token.
 * This is useful to avoid registering and logging in the same user multiple times in the tests suite,
 * reusing the same user and its token.
 * @param userDetails - The user details to register and login.
 * @returns {Promise<*&{token}>} - The user details with the added `token` property.
 * @example
 *     global.luke = await setupUser({
 *       userData: {
 *         name: "Luke",
 *         surname: "Skywalker",
 *         email: "skywalker@gmail.com",
 *         role: "user",
 *       },
 *       password: "I'm sexy and I know it",
 *       group: "astro",
 *     });
 */
async function setupUser(userDetails) {
  const registrationData = pick(userDetails, ["userData", "password"]);
  await fetchSuccessfulPostRequest("api/users", "", registrationData);
  const loginData = { username: userDetails.userData.email, password: userDetails.password };
  const authResponse = await fetchSuccessfulPostRequest("api/auth/login", "", loginData);
  return {
    ...userDetails,
    token: authResponse.token,
  };
}

module.exports = { setupUser };
