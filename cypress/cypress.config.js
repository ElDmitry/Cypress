const { base } = require("@faker-js/faker");
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
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  
  },
  env: {
    baseUrlProd: process.env.CYPRESS_BASE_URL_PROD,
    loginProd: process.env.CYPRESS_LOGIN_PROD,
    passwordProd: process.env.CYPRESS_PASSWORD_PROD,
    baseUrlStage: process.env.CYPRESS_BASE_URL_STAGE,
    loginStage: process.env.CYPRESS_LOGIN_STAGE,
    passwordStage: process.env.CYPRESS_PASSWORD_STAGE,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on)
    },
    
  },
});
