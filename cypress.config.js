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
      baseUrl: 'https://qauto.forstudy.space',
    env: {
      userEmail: 'your@email.com',
      userPassword: 'yourPassword123'
    },
    setupNodeEvents(on, config) {
      return config
    },
  },
});
