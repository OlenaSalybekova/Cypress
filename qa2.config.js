const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    env: {
      userEmail: 'user2@mail.com',
      userPassword: 'Password2'
    }
  }
});