const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

async function run() {
  try {
    const pushEvent = github.context.payload;

    exec.exec("echo", [
      "This a test action with javascript to see its working.",
    ]);
    core.info(
      `Repository: ${github.context.repo.owner}/${github.context.repo.repo}`
    );
    core.info(`Event: ${github.context.eventName}`);
    core.info(`Ref: ${github.context.ref}`);
    core.info(`SHA: ${github.context.sha}`);

    if (pushEvent.head_commit) {
      core.info(`Commit message: ${pushEvent.head_commit.message}`);
      core.info(`Author: ${pushEvent.head_commit.author.name}`);
    }
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
  }
}

run();
