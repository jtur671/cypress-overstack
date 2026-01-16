# cypress-overflow

NASA smoke tests with Cypress, organized with a simple Page Object Model.

## Setup

```bash
npm install
```

## Run Cypress

```bash
npm run cypress:open
```

```bash
npm test
```

## Project layout

- `cypress.config.js` - Cypress configuration
- `cypress/e2e/nasa_smoke/smoke.cy.js` - Smoke spec
- `cypress/support/pageObjects/nasaPages.js` - Page objects
- `cypress/support/e2e.js` - Global Cypress hooks and logging controls

## Notes

- Tests run against `https://www.nasa.gov`.
- Some third-party analytics hosts are blocked to reduce noise.
