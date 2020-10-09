const core = require('@actions/core');
const github = require('@actions/github')

const folder = core.getInput('folder');

async function run() {
  try {
		console.log(github.context.payload);
		core.setOutput('hasChanges', 0);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
