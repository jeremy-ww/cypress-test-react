/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === "component") {
    const { startDevServer } = require("@cypress/webpack-dev-server");

    const webpackConfig = require("../webpack.config");

    on("dev-server:start", (options) =>
      startDevServer({ options, webpackConfig }),
    );
  }

  require("@cypress/code-coverage/task")(on, config);

  return config;
};
