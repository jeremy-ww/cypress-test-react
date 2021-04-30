/// <reference types="cypress" />
// const injectDevServer = require("@cypress/react/plugins/react-scripts");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // require("@cypress/code-coverage/task")(on, config);
  // on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
  // injectDevServer(on, config);
  return config;
};
