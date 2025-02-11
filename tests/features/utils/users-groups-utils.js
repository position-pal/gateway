const { fetchSuccessfulPostRequest, fetchSuccessfulGetRequest } = require("./api-request-utils");

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
 *       password: "luk3Skyw4lk3r!",
 *     });
 */
async function setupUser(userDetails) {
  const createdUser = await fetchSuccessfulPostRequest("api/users", "", userDetails);
  const loginData = { email: userDetails.userData.email, password: userDetails.password };
  const authResponse = await fetchSuccessfulPostRequest("api/auth/login", "", loginData);
  return {
    userData: createdUser.data,
    token: authResponse.data.token,
  };
}

/**
 * Set up a group by creating it, saving its details.
 * @param groupDetails
 * @returns {Promise<*>}
 */
async function setupGroup(groupDetails) {
  const createGroupData = pick(groupDetails, ["name", "members", "createdBy"]);
  const response = await fetchSuccessfulPostRequest("api/groups", groupDetails.token, createGroupData);
  return response.data;
}

/**
 * Get User by ID
 * @param userId
 * @returns {Promise<*>}
 */
async function getUserById(userId) {
  return await fetchSuccessfulGetRequest(`api/users/${userId}`, "");
}

module.exports = { setupUser, setupGroup };
