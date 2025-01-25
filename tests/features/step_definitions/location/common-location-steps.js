const { Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const axios = require("axios");

const gatewayEndpoint = "http://127.0.0.1:3000";

Given("I'm a logged user", async () => {
  if (!global.luke) {
    console.log("Logging in as Luke");
    global.luke = await setupUser({
      userData: {
        name: "Luke",
        surname: "Skywalker",
        email: "skywalker@gmail.com",
        role: "user",
      },
      password: "I'm sexy and I know it",
      group: "astro",
    });
    console.log("Logging in as Leia");
    global.leia = await setupUser({
      userData: {
        name: "Leia",
        surname: "Organa",
        email: "leila.organa@gmail.com",
        role: "user",
      },
      password: "Please_Help_Me_Obi-Wan",
      group: "astro",
    });
  }
  console.log("Already logged in as Luke");
});

Given("I'm in a group with other users", () => {});

const pick = (obj, keys) => Object.fromEntries(keys.map(key => [key, obj[key]]));

async function setupUser(userDetails) {
  const registrationData = pick(userDetails, ["userData", "password"]);
  const registrationResponse = await axios.post(`${gatewayEndpoint}/api/users`, registrationData);
  expect(registrationResponse.status).to.eq(201);
  const loginData = { username: userDetails.userData.email, password: userDetails.password };
  const authResponse = await axios.post(`${gatewayEndpoint}/api/auth/login`, loginData);
  expect(authResponse.status).to.eq(200);
  return {
    ...userDetails,
    token: authResponse.data.token
  };
}