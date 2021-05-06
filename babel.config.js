const IS_CYPRESS_TEST = Boolean(process.env.BY_CYPRESS);

module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: IS_CYPRESS_TEST ? "cjs" : false,
        /**
         * @see https://github.com/cypress-io/cypress/tree/develop/npm/react/cypress/component/advanced/mocking-imports
         */
        loose: IS_CYPRESS_TEST,
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    "@babel/preset-typescript",
  ],

  env: {
    test: {
      plugins: ["istanbul"],
    },
  },
};
