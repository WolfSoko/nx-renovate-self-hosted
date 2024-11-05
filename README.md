# nx-renovate-self-hosted
![renovate](https://img.shields.io/badge/maintaied%20with-renovate-blue?logo=renovatebot)

### renovate self-hosted setup for nx workspaces to run migrations

How to use:

1. Create a `.github/renovate.json` file in the root of your nx workspace
2. Add the following content to the file:
```json
{
   "$schema": "https://docs.renovatebot.com/renovate-schema.json",
   "extends": [
      "config:recommended",
      ":label(dependencies)",
      "github>WolfSoko/nx-renovatre-self-hosted:nxMonorepo",
      ":assignee(WolfSoko)"
   ],
   "schedule": [
      "at any time"
   ],
   "automergeStrategy": "rebase",
   "automerge": true,
   "automergeType": "pr",
   "platformAutomerge": true,
   "prCreation": "immediate"
}
```

3. Create a self-hosted renovate runner
   e.g. Add the following to your `.github/workflows/renovate.yml`
4. Add the following to your `.github/renovate.config.js`

inspired by: [nx-squeezer/squeezer](https://github.com/nx-squeezer/squeezer/tree/main/packages/workspace#github-workflow)


