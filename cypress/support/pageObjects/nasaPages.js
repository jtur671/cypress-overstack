const homePage = {
  visit() {
    cy.visit("/");
  },
  assertLoaded() {
    cy.title().should("match", /NASA/i);
    cy.get("header").should("be.visible");
    cy.contains(/NASA/i).should("exist");
  },
};

const imageOfTheDayPage = {
  visit() {
    cy.visit("/image-of-the-day/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/image-of-the-day");
    cy.contains("h1", /Image of the Day/i).should("be.visible");
  },
};

const imagesPage = {
  visit() {
    cy.visit("/images/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/images");
    cy.contains(/NASA History/i).should("be.visible");
  },
};

const humansInSpacePage = {
  visit() {
    cy.visit("/humans-in-space/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/humans-in-space");
    cy.contains("h1", /Humans in Space/i).should("be.visible");
  },
};

const astronautsPage = {
  visit() {
    cy.visit("/humans-in-space/astronauts/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/humans-in-space/astronauts");
    cy.contains("h1", /Astronauts/i).should("be.visible");
  },
};

const recentlyPublishedPage = {
  visit() {
    cy.visit("/news/recently-published/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/news/recently-published");
    cy.get("main").should("be.visible");
    cy.contains("h2", /Recently Published/i).should("be.visible");
  },
};

const newsReleasePage = {
  visit() {
    cy.visit("/news-release/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/news-release");
    cy.get("#hds-content-items").should("be.visible");
    cy.contains("h1", /News Release/i).should("be.visible");
  },
};

const nasaLivePage = {
  visit() {
    cy.visit("/live/");
  },
  assertLoaded() {
    cy.location("pathname").should("include", "/live");
    cy.get("main").should("be.visible");
    cy.contains("h1", /NASA Live/i).should("be.visible");
  },
};

module.exports = {
  homePage,
  imageOfTheDayPage,
  imagesPage,
  humansInSpacePage,
  astronautsPage,
  recentlyPublishedPage,
  newsReleasePage,
  nasaLivePage,
};
