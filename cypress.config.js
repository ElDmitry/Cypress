const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshotsFolder",
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  videosFolder: "cypress/videos",
  video: true,
  modifyObstructiveCode: false,
  defaultCommandTimeout: 4000,
  env: {
    baseUrlProd: process.env.CYPRESS_BASE_URL,
    loginProd: process.env.CYPRESS_LOGIN,
    passwordProd: process.env.CYPRESS_PASSWORD,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    
  },
});
