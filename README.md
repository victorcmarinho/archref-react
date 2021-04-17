# React Reference Architecture
[![Check Code](https://github.com/victorcmarinho/arch-ref/actions/workflows/checkcode.yml/badge.svg)](https://github.com/victorcmarinho/arch-ref/actions/workflows/checkcode.yml)
[![CodeQL](https://github.com/victorcmarinho/archref-react/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/victorcmarinho/archref-react/actions/workflows/codeql-analysis.yml)
### Preview
![preview image](https://raw.githubusercontent.com/victorcmarinho/archref-react/main/images/preview.gif)

## BFF - Proxy Configurate

Often serve the front-end React app from the same host and port as their backend implementation.

Exemple:

```
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation

```

For that, it is only necessary to configure the file: src/setupProxy.js 

example: 

```
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ...
};

```

```
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

```


## Storybook
`npm run storybook`
`yarn storybook`

Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

![Storybook](https://raw.githubusercontent.com/storybookjs/storybook/master/media/storybook-intro.gif)

## Develop

`npm start`
`yarn start`
[https://localhost:3000]

## Build

`npm run build`
`yarn build`

## Build Storybook
`npm run build-storybook`
`yarn build-storybook`

## Unit Tests

`npm test`
`yarn test`

**This is your source code tree:**

```
src
|-- assets
|-- components
|-- config // all aplications configs, external services and interceptores
|-- hooks
|-- mocks
|-- models
|-- pages
|-- routes
|-- services // all query and functions request 
|-- utils
|-- Bootstrap.tsx
|-- App.tsx
|-- index.tsx
|-- react-app-env.d.ts
|-- reportWebVitals.ts
|-- service-worker.ts
|-- serviceWorkerRegistration.ts
|-- setupProxy.js
|-- setupTests.ts
...
```

**This is your component structure:**

```
...
components
|-- YourComponent
    |-- index.tsx
    |-- styles.ts
    |-- YourComponent.spec.ts
    |-- YourComponent.stories.ts
...

or

...
components
|-- YourComponent
    |-- index.tsx
    |-- styles.ts
    |-- interfaces.ts
    |-- YourComponent.ts
    |-- YourComponent.spec.ts
    |-- YourComponent.stories.ts
...

or

...
components
|-- YourContainerComponents
    |-- Component1
    |-- Component2
    |-- Component3
    |-- index.ts
...


```

**This is your page structure:**

```
...
Pages
|-- YourPage
    |-- index.tsx
    |-- styles.ts
    |-- interface.ts 
    |-- YourPage.spec.ts
    |-- YourPage.stories.ts
...
```


`./assets`

Here will be all your project assets as images, icons...

`./components`

Components are presentational only elements, grouping UI items

`./configs`

Here will be all configurations for external and internal services

`./hooks`

Services are responsible to handle the connection with all external elements, like APIs and global functions

`./mocks`

All mock data for your unit testes, examples and any mocks

`./models`

global interfaces and models that your project needs

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

`./services`

Here will be all query and request funcions

`./styles`

Here will be all global and css(relatives)

`./utils`

Directory to keep all utils functions to share all over the project

## Enviroments

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have NODE_ENV defined for you, and any other environment variables starting with ``REACT_APP_.``


> WARNING: Do not store any secrets (such as private API keys) in your React app!
> Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.
> Create .env.test.local and .env.local before run project

**Adding Development Environment Variables In**

To define permanent environment variables, create a file called .env in the root of your project:

``REACT_APP_NOT_SECRET_CODE=abcdef```

**What other files can be used**

- ``.env``: Default.
- ``.env.local``: Local overrides. This file is loaded for all environments except test.
- ``.env.development``, , : Environment-specific settings..env.test.env.production
- ``.env.development.local``, , : Local overrides of environment-specific settings..env.test.local.env.production.local

Files on the left have more priority than files on the right:

- ``npm start``: , , , ``.env.development.local`` ``.env.local`` ``.env.development`` ``.env``
- ``npm run build``: , , , ``.env.production.local`` ``.env.local`` ``.env.production`` ``.env``
- ``npm test``: , , (note is missing) ``.env.test.local `` ``.env.test.env`` ``.env.local``

**Example**

```
REACT_APP_VERSION=$npm_package_version
# also works:
# REACT_APP_VERSION=${npm_package_version}

DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```

### More utils commands

Analyzer your build bundle
`npm run analyze`
`yarn analyze`

Find and fix Javascrit and TypeScript problems according to pre-defined rules
`npm run analyze`
`yarn analyze`

Find and fix code formatted
`npm run prettier`
`yarn prettier`

# Advantages of using this react project template

The project is already configured with:

- React
- Typescript
- Jest
- Babel-root-import
- unit testing example
- Eslint
- Prettier
- Styled
- Styled Theming
- Husky
- Storybook
- PWA
- Integration back-end proxy (http-proxy)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

You can learn more web develop tools [web.dev](https://web.dev/)


### Main dependecies

- [@apollo/client](https://www.npmjs.com/package/@apollo/client)
- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://date-fns.org/)
- [graphql](https://www.npmjs.com/package/graphql)
- [lodash](https://lodash.com/)
- [polished](https://www.npmjs.com/package/polished)
- [react](https://reactjs.org/)
- [react-hook-form](https://react-hook-form.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-lottie](https://www.npmjs.com/package/react-lottie) more: https://lottiefiles.com/
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/)
- [workbox](https://create-react-app.dev/docs/making-a-progressive-web-app)

### Main dev dependecies

- [storybook](https://storybook.js.org/)
- [testing-library](https://testing-library.com/)
- [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)
- [eslint](https://eslint.org/)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [prettier](https://prettier.io/)
- [react-test-renderer](https://pt-br.reactjs.org/docs/test-renderer.html)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://web.dev/vitals/)
