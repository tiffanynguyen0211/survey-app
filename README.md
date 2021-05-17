
# Create Survery App

## Project Setup

Make sure you set everything up before starting:

-   [VSCODESETUP](/docs/vscode.md)
-   [NVM](/docs/nvm.md)

If you're trying to run this in dev mode, cd into the project and run:

```
yarn && yarn start
```

If you're trying to run a prod build:

```
yarn build
```

If you're trying to run current test:

```
yarn test
```

If you're trying to update test snapshot:

```
yarn test -u
```

## Technical Decision:
- Project is developed with [React App](https://github.com/facebook/create-react-app) & TypeScript based on the timeframe & complexity of the requirements:
    - create-react-app handles webpack config + hot reload + code splitting + bundling for production build for a light weight web app
    - TypeScript for static type checking, IntelliSense, support for common library and better for code readibilty
- Project is using tsconfig & prettier for linting & code formatting to maintain code standards
- Project came with customised vscode config for easier local set up
- the UI is developed based on Atomic design systems with a tweak to minimised the complexicity (elements -> components -> templates)
- BEM is used for CSS naming system following[Harry Robert's BEM standards](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- CSS important standards are reinfoced using stylint

| Stylint Rules                                                                                               | Auto-formattted                                                                            |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [stylelint-config-idiomatic](https://github.com/ream88/stylelint-config-idiomatic-order#readme)     | Yes                                                                                        |
| [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern)      | No - only warning if the block is definded using `/** @define [component-name] */`         |
| empty line between class block                                                                      | Yes                                                                                        |  |
| max 2 nesting within a block & only allow staring with `&` & mixin function                         | No - warning only           

- Jest snapshot test is used for lightweight & fast tests runs focus on UI components rendering
