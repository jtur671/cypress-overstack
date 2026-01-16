// Cypress support file loaded before spec files.
Cypress.config("hideXHR", true);
Cypress.on("uncaught:exception", () => {
  // Ignore third-party script errors from public sites.
  return false;
});

beforeEach(() => {
  // Silence noisy analytics/beacon traffic in the Command Log.
  cy.intercept(
    { method: "POST", url: "https://www.google-analytics.com/**" },
    { statusCode: 204, body: "" },
    { log: false }
  );

  cy.intercept(
    { method: "GET", url: "https://api.parsely.com/**" },
    { statusCode: 200, body: {} },
    { log: false }
  );

  cy.intercept(
    { method: "POST", url: "https://dap.digitalgov.gov/**" },
    { statusCode: 204, body: "" },
    { log: false }
  );
});
