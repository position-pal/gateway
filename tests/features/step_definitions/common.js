const { BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { execSync } = require("child_process");

const deploymentScript = "./local-deployment/local-deploy.sh";

const runDeployment = (command) => {
  try {
    execSync(`/bin/bash ${deploymentScript} ${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Deployment error: ${command}`, error);
    process.exit(1);
  }
}

const setupLocalDeployment = () => {
  console.log("Bring up the local testing environment");
  runDeployment('up && sleep 5');
}

const teardownLocalDeployment = () => {
  console.log("Tearing down the local testing environment");
  runDeployment('down');
}

BeforeAll(async () => setupLocalDeployment());

AfterAll(async () => teardownLocalDeployment());
