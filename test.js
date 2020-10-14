const { execSync } = require('child_process');

let id = "6d4e7d324ada9f4421fc832b5ac012692cb40648";
let folder = "folder"

// Check the content using git diff-tree
let changes = execSync(`git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
console.log("executing: " + `git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
console.log(`changes for ${id} - ${changes}`);
