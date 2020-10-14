const { execSync } = require('child_process');

let id = "fdebd46dbf2f697c842382e511ad66e538aa276b";
let folder = "folder"

// Check the content using git diff-tree
let changes = execSync(`git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
console.log("executing: " + `git diff-tree --no-commit-id --name-only -z -r ${id} -- ${folder}`);
console.log(`changes for ${id} - ${changes}`);
