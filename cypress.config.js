const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.nasa.gov",
    retries: 1,
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 800,
    supportFile: "cypress/support/e2e.js",
    blockHosts: [
      "www.google-analytics.com",
      "api.parsely.com",
      "dap.digitalgov.gov",
      "googleads.g.doubleclick.net",
      "www.youtube.com",
      "jnn-pa.googleapis.com",
    ],
  },
});
