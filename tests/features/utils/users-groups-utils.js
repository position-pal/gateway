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
 *       },
 *       password: "I'm sexy and I know it",
 *       group: "astro",
 *     });
 */
async function setupUser(userDetails) {
  const registrationData = pick(userDetails, ["userData", "password"]);
  const createdUser = await fetchSuccessfulPostRequest("api/users", "", registrationData);
  const loginData = { email: userDetails.userData.email, password: userDetails.password };
  const authResponse = await fetchSuccessfulPostRequest("api/auth/login", "", loginData);
  return {
    userData: createdUser.data,
    token: authResponse.data.token,
  };
}

async function setupGroup(groupDetails) {
  const createGroupData = {
    "name": groupDetails.name,
    "members": groupDetails.members,
    "createdBy": groupDetails.createdBy
  }
  const response = await fetchSuccessfulPostRequest("api/groups", groupDetails.token, createGroupData);
  return response.data;
}

module.exports = { setupUser, setupGroup };
