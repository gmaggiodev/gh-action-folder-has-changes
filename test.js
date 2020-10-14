const { execSync } = require('child_process');

let id = "d3a4d78f1f416fc0ddba25b169ae133a96f865b7";
let folder = "folder"

// Check the content using git diff-tree
let changes = execSync(`git diff-tree --no-commit-id --name-only -z -r ${id} ${folder}`);
console.log("executing: " + `git diff-tree --no-commit-id --name-only -z -r ${id} ${folder}`);
console.log(`changes for ${id} - ${changes}`);
