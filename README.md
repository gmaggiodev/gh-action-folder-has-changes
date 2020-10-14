## gh-action-bump-version

GitHub Action for automated npm version bump.

This Action bumps the version in package.json and pushes it back to the repo. 
It is meant to be used on every successful merge to master but 
you'll need to configured that workflow yourself. You can look to the
[`.github/workflows/push.yml`](./.github/workflows/push.yml) file in this project as an example.

**Attention**

Make sure you use the `actions/checkout@v2` action!

### Workflow

* Based on the commit content, check if there are changes in a specific path.

### Usage:
**folder:** Root path for checking changes:
```yaml
- name:  'Folder has changes'
  id: <stepid>
  uses:  'gmaggiodev/gh-folder-has-changes@master'
  with:
    folder:  '/<your-path-to-check>/'
```

If the action find changes in the folder will set the `${{ step.<stepid>.outputs.changes }}` variable to 1.