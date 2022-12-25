# nx-template

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

TypeScript NX template with SvelteKit and Tailwind available at [nx-template.pages.dev](https://nx-template.pages.dev/).

- 4x100 rating on [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- A rating on [Security Headers](https://securityheaders.com/)
- A+ rating on [Qualys SSL Labs](https://www.ssllabs.com) when deployed to Cloudflare Pages

## Table of Contents

- [Usage](#usage)
- [Contributing](#contributing)

## Usage

This project uses [NX](https://nx.dev/getting-started/intro) for monorepo management and [commitlint](https://github.com/conventional-changelog/commitlint) to enforce commit messages.

### Common commands

```bash
# Install dependencies
npm install

# Run commands defined in `project.json` or `package.json` for specific projects
# Example commands may include build, lint, and test
npx nx run [PROJECT]:[COMMAND]

# For example, start the dev server for the `site` project
npx nx dev site --open

# Prior to opening a PR, format, build, lint, and test affected projects
# Only `nx.json` `cacheableOperations` are valid for use with `affected`
npx nx format:write && \
npx nx affected:build && \
npx nx affected:lint && \
npx nx affected:test

# Generate new buildable library
npx nx generate @nrwl/node:library [PROJECT] --buildable

# Rename a project
npx nx generate move [NEW_NAME] --projectName [CURRENT_NAME]

# Show dependency graph
npx nx dep-graph

# To upgrade NX,
npx nx migrate @nrwl/workspace@latest && \
npm install && \
npx nx migrate --run-migrations
```

## Contributing

If editing README, conform to [standard-readme](https://github.com/RichardLitt/standard-readme).
