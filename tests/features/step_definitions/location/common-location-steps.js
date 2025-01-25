const { Given } = require("@cucumber/cucumber");
const { setupUser } = require("../../utils/users-groups-utils");

Given("I'm a logged user", async () => {
  if (!global.luke) {
    global.luke = await setupUser({
      userData: {
        name: "Luke",
        surname: "Skywalker",
        email: "luke.skywalker@gmail.com",
        role: "user",
      },
      password: "luk3Skyw4lk3r!",
      group: "astro",
    });
    global.leia = await setupUser({
      userData: {
        name: "Leia",
        surname: "Organa",
        email: "leila.organa@gmail.com",
        role: "user",
      },
      password: "wowLeia123@",
      group: "astro",
    });
  }
});

Given("I'm in a group with other users", () => {});
