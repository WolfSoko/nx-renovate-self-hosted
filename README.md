# nx-renovate-self-hosted

### renovate self hosted config for nx workspaces that runs migrations

How to use:

1. Create a `renovate.json` file in the root of your nx workspace
2. Add the following content to the file:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>WolfSoko/nx-renovate-self-hosted:nrwl"
  ]
}
```

3. Create a self hosted renovate runner
   e.g. Add the following to your `.github/workflows/renovate.yml`

```yaml
name: Renovate
on:
  workflow_dispatch:
  schedule:
    - cron: '0/15 * * * *'

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: false

jobs:
  renovate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3.2.0

      - name: Self-hosted Renovate
        uses: renovatebot/github-action@v34.77.1
        env:
          NX_CLOUD_AUTH_TOKEN: ${{ secrets.NX_CLOUD_AUTH_TOKEN }}
          LOG_LEVEL: debug
        with:
          configurationFile: renovate.config.js
          token: ${{ secrets.RENOVATE_SELF_HOSTED_TOKEN }}
```

Add the following to your `renovate.config.js`

```js
module.exports = {
    branchPrefix: 'renovate-github-sh/',
    dryRun: null,
    dependencyDashboardTitle: 'Renovate Dashboard -- Self-Hosted',
    gitAuthor: 'Renovate Bot GitHub <bot@renovateapp.com>',
    platform: 'github',
    repositories: ['your-repositories'],
    includeForks: false,
    dependencyDashboard: true,
    onboarding: false,
    autodiscover: false,
    allowCustomCrateRegistries: true,
    allowScripts: true,
    exposeAllEnv: true,
    allowPostUpgradeCommandTemplating: true,
    allowedPostUpgradeCommands: [
        '^npm ci --ignore-scripts$',
        '^npm run prepare --if-present$',
        '^npm run format --if-present$',
        '^npx --no-install ng update (@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]* --from=\\d+\\.\\d+\\.\\d+ --to=\\d+\\.\\d+\\.\\d+ --migrate-only --allow-dirty --force$',
        '^npx --no-install ng lint --fix$',
        '^npx --no-install nx migrate (@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]* --from=(@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]*@\\d+\\.\\d+\\.\\d+ --to=(@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]*@\\d+\\.\\d+\\.\\d+$ || true$',
        '^npx --no-install nx migrate --run-migrations=migrations\\.json || true$',
        '^rm -f migrations.json || true$',
        '^npx --no-install nx workspace-lint$',
        '^npx --no-install nx run-many --target=lint --all --parallel --fix --skip-nx-cache$',
        '^npx --no-install nx format:(check|write)$',
    ],
};
```

inspired by: [ng-easy/renovate-config ](https://github.com/ng-easy/renovate-config)


