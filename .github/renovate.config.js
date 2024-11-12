module.exports = {
    repositories: ['WolfSoko/nx-renovate-self-hosted', 'WolfSoko/wol-sok-mono', 'WolfSoko/nx-clean', 'WolfSoko/nx-clean2', 'WolfSoko/ng-mf'],
    branchPrefix: 'renovate-github/',
    dryRun: null,
    gitAuthor: 'Renovate Bot GitHub <bot@renovateapp.com>',
    platform: 'github',
    includeForks: false,
    dependencyDashboard: true,
    onboarding: true,
    autodiscover: false,
    allowCustomCrateRegistries: true,
    allowScripts: true,
    exposeAllEnv: true,
    allowPostUpgradeCommandTemplating: true,
    allowedPostUpgradeCommands: [
      '^rm -f package-lock.json$',
      '^npm ci --ignore-scripts$',
      '^npm install --ignore-scripts$',
      '^npm run prepare --if-present$',
      '^npm run format --if-present$',
      '^npx --no-install ng update (@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]* --from=\\d+\\.\\d+\\.\\d+ --to=\\d+\\.\\d+\\.\\d+ --migrate-only --allow-dirty --force$',
      '^npx --no-install ng lint --fix$',
      '^npx --no-install nx migrate',
      '^npx --no-install nx format',
      '^rm -f migrations.json$',
      '^npx --no-install nx run-many --target=lint --all --parallel --fix$',
      'rm -rf node_modules'
    ],
};
