const { fetchSuccessfulPostRequest } = require("./api-request-utils");

const pick = (obj, keys) => Object.fromEntries(keys.map((key) => [key, obj[key]]));

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
