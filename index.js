const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const folder = core.getInput('folder');

async function run() {
	try {
		const commits = github.context.payload.commits;

		commits.forEach(async commit => {
			const id = commit.id;

			console.log(commit);
			// Check the content using git diff-tree
			let output = '';
			let error = '';

			const options = {};
			options.listeners = {
				stdout: (data) => {
					output += data.toString();
				},
				stderr: (data) => {
					error += data.toString();
				}
			};

			await exec.exec('git', ['diff-tree', '--no-commit-id', '--name-only', '-z', '-r', id, '--', folder], options);

			//let changes = execSync(`git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
			if (!error)
				console.log(`changes for ${id} - ${output}`);
			else
				console.error(error);
		});

		core.setOutput('hasChanges', 0);
	}
	catch (error) {
		core.setFailed(error.message);
	}
}

run();
