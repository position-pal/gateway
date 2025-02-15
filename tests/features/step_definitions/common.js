const { BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const deploymentScriptName = "./local-deployment/local-deploy.sh";
const deploymentScript = path.resolve(deploymentScriptName);
const mockedClientAppPath = path.resolve("./tests/resources/mocked-client-app");

BeforeAll(async () => setupLocalDeployment());

AfterAll(async () => teardownLocalDeployment());

const setupLocalDeployment = () => {
  console.log("Bring up the local testing environment");
  run("docker build --no-cache -t local-gateway .");
  run(`${deploymentScript} up --override gateway:local-gateway --override location-service:local-location`);
  run(`cd ${mockedClientAppPath} && docker build --no-cache -t mocked-client-app .`);
  run(`docker run -d -p 8080:8080 mocked-client-app`);
  run("sleep 5");
};

const teardownLocalDeployment = () => {
  console.log("Tearing down the local testing environment");
  run(`${deploymentScript} down`);
  run('docker rm $(docker stop $(docker ps -a -q --filter ancestor=mocked-client-app --format="{{.ID}}"))');
};

const run = (command) => {
  try {
    const shell = getShell();
    execSync(command, { shell: shell, stdio: "inherit" });
  } catch (error) {
    console.error(`Deployment error: ${command}`, error);
    process.exit(1);
  }
};

const getShell = () => {
  const isWindows = process.platform === "win32";
  if (isWindows) {
    const gitBashPath = `"C:\\Program Files\\Git\\bin\\bash.exe"`;
    if (fs.existsSync(gitBashPath)) {
      return gitBashPath; // Use Git Bash if it's installed
    } else {
      return "wsl bash"; // Fall back to WSL if Git Bash is not found
    }
  }
  return "/bin/bash";
};
