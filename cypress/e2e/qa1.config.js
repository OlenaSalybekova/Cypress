const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    env: {
      userEmail: 'user1@mail.com',
      userPassword: 'Password1'
    },
    setupNodeEvents (on, config) {
      return config
    },
  }
});