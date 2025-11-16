const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.gov.il',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 120000,  // 2 דקות לטעינת דפים
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // אפשר להגדיר specPattern אם רוצים מבנה ספציפי
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});