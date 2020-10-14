const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');

const folder = core.getInput('folder');

async function run() {
  try {
		const commits = github.context.payload.commits;

		commits.forEach(commit => {
			const id = commit.id;

			// Check the content using git diff-tree
			let changes = execSync(`git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
			console.log("executing: " + `git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
			console.log(`changes for ${id} - ${changes}`);
			
		});
		
		core.setOutput('hasChanges', 0);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
