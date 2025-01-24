const { BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { execSync } = require("child_process");

BeforeAll(async () => {
  console.log("Bring up the local testing environment");
  try {
    execSync(`/bin/bash ./local-deployment/local-deploy.sh up && sleep 5`, { stdio: "inherit" });
  } catch (error) {
    console.error("Error while setting up the test environment:", error);
    process.exit(1);
  }
});

AfterAll(async () => {
  console.log("Tearing down the local testing environment");
  try {
    execSync("/bin/bash ./local-deployment/local-deploy.sh down", { stdio: "inherit" });
  } catch (error) {
    console.error("Error while tearing down the test environment:", error);
    process.exit(1);
  }
});
