const {
  fetchSuccessfulPostRequest,
  fetchSuccessfulGetRequest,
  fetchSuccessfulPutRequest,
} = require("./api-request-utils");

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
  const authResponse = await loginUser({ userData: userDetails.userData, password: userDetails.password });
  return {
    userData: createdUser.data,
    token: authResponse.data.token,
  };
}

/**
 * Register User
 *
 * @param userDetails
 * @returns {Promise<*>}
 */
async function registerUser(userDetails) {
  const registeredUser = await fetchSuccessfulPostRequest("api/users", "", userDetails);
  return registeredUser.data;
}

/**
 * Login User
 * @param userDetails
 * @returns {Promise<*>}
 */
async function loginUser(userDetails) {
  const loginData = { email: userDetails.userData.email, password: userDetails.password };
  return await fetchSuccessfulPostRequest("api/auth/login", "", loginData);
}

/**
 * Authorize User
 * @param token
 * @returns {Promise<*>}
 */
async function authorizeUser(token) {
  return await fetchSuccessfulPostRequest("api/auth/authorize", "", { token: token });
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
 * @param token
 * @returns {Promise<*>}
 */
async function getUserById(userId, token) {
  return await fetchSuccessfulGetRequest(`api/users/${userId}`, token);
}

/**
 * Update User by ID
 * @param userId
 * @param token
 * @param updateData
 * @returns {Promise<*>}
 */
async function updateUserById(userId, token, updateData) {
  return await fetchSuccessfulPutRequest(`api/users/${userId}`, token, { user: updateData });
}

module.exports = { setupUser, setupGroup, getUserById, loginUser, registerUser, authorizeUser, updateUserById };
