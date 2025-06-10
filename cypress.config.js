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
    baseUrl: 'https://qauto.forstudy.space',
    env: {
      userEmail: 'your@email.com',
      userPassword: 'yourPassword123'
    },
    },
  },
});
