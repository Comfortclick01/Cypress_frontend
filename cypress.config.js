// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
    video: true,
    videosFolder: 'cypress/videos',

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'Test_Result',
      charts: true,
      inlineAssets: true,
      reportPageTitle: 'Test_Report',
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
      code: false,
      autoOpen: true,  
    },
  },
});

