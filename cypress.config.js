const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshotsFolder",
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  videosFolder: "cypress/videos",
  video: true,
  modifyObstructiveCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
