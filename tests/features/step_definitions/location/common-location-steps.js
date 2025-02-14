const { Given, AfterAll } = require("@cucumber/cucumber");
const { setupUser, setupGroup } = require("../../utils/users-groups-utils");
const puppeteer = require("puppeteer");

Given("I am a logged user", async () => {
  if (!global.luke) {
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

Given("I am in a group with other users", async () => {
  if (!global.astro) {
    global.astro = await setupGroup({
      name: "Astro",
      members: [global.luke.userData, global.leia.userData],
      createdBy: global.luke.userData,
      token: global.luke.token,
    });
  }
});

Given("with a registered device", { timeout: 70_000 }, async () => {
  if (!global.leiaDevice) {
    const mockedClientAppUrl = "http://localhost:8080";
    global.leiaDevice = {
      browser: await puppeteer.launch({
        headless: true,
        devtools: true,
        args: ["--disable-web-security", "--disable-features=IsolateOrigins", "--disable-site-isolation-trials"],
      }),
      receivedNotifications: [],
    };
    await global.leiaDevice.browser.defaultBrowserContext().overridePermissions(mockedClientAppUrl, ["notifications"]);
    global.leiaDevice.page = await global.leiaDevice.browser.newPage();
    global.leiaDevice.page.on("console", async (msg) => {
      const args = await Promise.all(msg.args().map((arg) => arg.jsonValue()));
      if (args.includes("Message received")) {
        global.leiaDevice.receivedNotifications.push(...args.slice(1));
      }
      console.log("LOG: ", ...args);
    });
    global.leiaDevice.page.setDefaultTimeout(60_000);
    global.leiaDevice.page.evaluateOnNewDocument(
      (userId, authToken) => {
        localStorage.setItem("userId", userId);
        localStorage.setItem("bearerToken", authToken);
      },
      global.leia.userData.id,
      global.leia.token,
    );
    await global.leiaDevice.page.goto(mockedClientAppUrl);
    await global.leiaDevice.page.waitForResponse(
      (response) => response.url().includes("/api/notifications/register") && response.status() === 200,
    );
  }
});

AfterAll(async () => {
  if (global.leiaDevice) {
    await global.leiaDevice.browser.close();
  }
});
