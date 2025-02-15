const { Given, When, Then } = require("@cucumber/cucumber");
const {
  registerUser,
  loginUser,
  authorizeUser,
  updateUserById,
  deleteUserById,
} = require("../../utils/users-groups-utils");
const { assert } = require("chai");

Given("that the user is not yet registered", async function () {
  global.userData = {
    userData: {
      name: "Ian",
      surname: "Solo",
      email: "ian.solo@gmail.com",
    },
    password: "iansolo123@",
  };
});

When("registering with valid details", async function () {
  global.ian = await registerUser(global.userData);
});

Then("the system successfully registers the user", async function () {
  assert.isNotNull(global.ian.id);
  assert.equal(global.ian.name, global.userData.userData.name);
  assert.equal(global.ian.surname, global.userData.userData.surname);
  assert.equal(global.ian.email, global.userData.userData.email);
});

Given("logged user with the correct email and password", async function () {
  global.loggedIan = await loginUser({ userData: global.ian, password: global.userData.password });
});

When("system returns a valid authentication token", async function () {
  assert.isNotNull(global.loggedIan.data.token);
});

Then("authentication token can be use to authorize requests", async function () {
  const response = await authorizeUser(global.loggedIan.data.token);
  assert.isTrue(response.data.authorized);
});

Given("new user logged in", async function () {
  const userData = {
    userData: {
      name: "R2",
      surname: "D2",
      email: "r2.d2@gmail.com",
    },
    password: "r2d2@",
  };
  global.registeredR2D2 = await registerUser(userData);
  global.loggedR2D2 = await loginUser({ userData: userData.userData, password: userData.password });
});

When("updating the profile information", async function () {
  global.c3po = {
    userData: {
      name: "C",
      surname: "3PO",
      email: "c.3po@gmail.com",
    },
    password: "c3po@",
  };
  global.updatedr2d2 = await updateUserById(global.registeredR2D2.id, global.loggedR2D2.data.token, global.c3po);
});

Then("the system successfully updates the user data", function () {
  assert.equal(global.updatedr2d2.data.name, global.c3po.userData.name);
  assert.equal(global.updatedr2d2.data.surname, global.c3po.userData.surname);
  assert.equal(global.updatedr2d2.data.email, global.c3po.userData.email);
});

When("requesting the deletion of the user profile", async function () {
  global.deletedUser = await deleteUserById(global.updatedr2d2.data.id, global.loggedR2D2.data.token);
});

Then("the system deletes the user data and confirms the deletion", function () {
  assert.equal(global.deletedUser.data.message, "User deleted successfully");
  assert.equal(global.deletedUser.data.userId, global.updatedr2d2.data.id);
});
