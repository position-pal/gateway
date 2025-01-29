const { Given } = require("@cucumber/cucumber");
const { setupUser, setupGroup } = require("../../utils/users-groups-utils");

Given("I'm a logged user", async () => {
  if (!global.luke) {
    console.log("Setting up users...");
    global.luke = await setupUser({
      userData: {
        name: "Luke",
        surname: "Skywalker",
        email: "luke.skywalker@gmail.com",
      },
      password: "luk3Skyw4lk3r!",
    });
    global.leia = await setupUser({
      userData: {
        name: "Leia",
        surname: "Skywalker",
        email: "leila.Skywalker@gmail.com",
      },
      password: "wowLeia123@",
    });
  }
});

Given("I'm in a group with other users", async () => {
  if (!global.astro) {
    global.astro = await setupGroup({
      name: "Astro",
      members: [global.luke.userData, global.leia.userData],
      createdBy: global.luke.userData,
      token: global.luke.token,
    });
  }
});
