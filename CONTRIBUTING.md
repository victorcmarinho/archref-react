# Contributing to Storybook

Thanks for your interest in improving! We are a community-driven project and welcome contributions of all kinds: from discussion to documentation to bugfixes to feature improvements.

Please review this document to help to streamline the process and save everyone's precious time.

This repo uses yarn workspaces, so you should install `yarn` as the package manager. See [installation guide](https://yarnpkg.com/en/docs/install).

## Issues

No software is bug-free. So, if you got an issue, follow these steps:

- Search the [issue list](https://github.com/storybookjs/storybook/issues?utf8=%E2%9C%93&q=) for current and old issues.
  - If you find an existing issue, please UPVOTE the issue by adding a "thumbs-up reaction". We use this to help prioritize issues!
- If none of that is helping, create an issue with the following information:
  - Clear title (shorter is better).
  - Describe the issue in clear language.
  - Share error logs, screenshots and etc.
  - To speed up the issue fixing process, send us a sample repo with the issue you faced:

### Testing against `main`

To test your project against the current latest version of storybook, you can clone the repository and link it with `yarn`. Try following these steps:

#### 1. Download the latest version of this project, and build it:

```sh
git clone https://github.com/victorcmarinho/archref-react.git
cd archref-react
yarn
yarn start

```

#### 2a. Run unit tests

You can use one of the example projects in `examples/` to develop on.

This command will list all the suites and options for running tests.

```sh
yarn test
```

##### Core & Examples Tests

`yarn test`

This option executes tests from `<rootdir>/src/`.

#### 2b. Run Linter

We use eslint as a linter for all code (including typescript code).

All you have to run is:

```sh
yarn lint
``` 
