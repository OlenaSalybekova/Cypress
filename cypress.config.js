const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mcuyhp',
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
