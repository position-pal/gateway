const { Given, When, Then } = require('@cucumber/cucumber');
const { setupUser } = require("../../utils/users-groups-utils");

Given('that the user is not yet registered', async function () {
    global.userData = {
        userData: {
          name: "Ian",
          surname: "Solo",
          email: "ian.solo@gmail.com",
        },
        password: "iansolo123@",
      }
});

When('registering with valid details', async function () {
    if (!global.ian) {
        global.ian = await setupUser(global.userData);
    }
});

Then('the system successfully registers the user', function () {
    global.ian.userData = global.userData.userData;
});

Given('that the user is already registered', function () {
    // Code to ensure the user is already registered
});

When('logging in with the correct email and password', function () {
    // Code to log in the user with correct email and password
});

Then('the system returns a valid authentication token', function () {
    // Code to verify the system returns a valid authentication token
});

Given('that the user is authenticated', function () {
    // Code to ensure the user is authenticated
});

When('updating the profile information', function () {
    // Code to update the user profile information
});

Then('the system successfully updates the user data', function () {
    // Code to verify the user data is successfully updated
});

When('requesting the deletion of the user profile', function () {
    // Code to request the deletion of the user profile
});

Then('the system deletes the user data and confirms the deletion', function () {
    // Code to verify the user data is deleted and the deletion is confirmed
});