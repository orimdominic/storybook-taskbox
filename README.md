# storybook-taskbox

Used to learn [Storybook]() with [React](). Includes [tailwindcss]() configuration (instructions)

## Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuring create-react-app + tailwindcss + storybook

1. Create the app `create-react-app app-name`
2. [Tailwind installation for create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
  - Install tailwindcss essentials `yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --offline`
  - Install `craco` `yarn add @craco/craco --offline`
  - Initialise `tailwindcss` config `npx tailwind init`
  - Initialise `craco` config `touch craco.config.js`
  - Copy and paste this in `craco.config.js`
    ```javascript
    module.exports = {
      style: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    };
    ```
  - Change package.json scripts to run React app using `craco`
    ```json
    {
        "start": "BROWSER=none craco start",
        "build": "craco build",
        "test": "craco test",
    }
    ```
  - Copy and paste into your `src/index.css` file
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
3. If you haven't installed `storybook` locally and/or globally, run `yarn global add @storybook/cli`. If you have already, run `yarn exec sb init --offline`
4. Copy and paste this into your `.storybook/main.js`
```javascript
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
```

## For create-react-app/strybook tests

[Snapshot testing](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/)

1. Install as devDependencies ` @storybook/addon-storyshots` and `react-test-renderer`
2. Create a `src/storybook.test.js` file
3. Copy and paste into `src/storybook.test.js`:

```javascript
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```