const {
  homePage,
  imageOfTheDayPage,
  imagesPage,
  humansInSpacePage,
  astronautsPage,
  recentlyPublishedPage,
  newsReleasePage,
  nasaLivePage,
} = require("../../support/pageObjects/nasaPages");

describe("NASA Smoke", () => {
  it("loads the homepage", () => {
    homePage.visit();
    homePage.assertLoaded();
  });

  it("loads Image of the Day and shows header", () => {
    imageOfTheDayPage.visit();
    imageOfTheDayPage.assertLoaded();
  });

  it("loads NASA Images page", () => {
    imagesPage.visit();
    imagesPage.assertLoaded();
  });

  it("loads Humans in Space page", () => {
    humansInSpacePage.visit();
    humansInSpacePage.assertLoaded();
  });

  it("loads Astronauts page", () => {
    astronautsPage.visit();
    astronautsPage.assertLoaded();
  });

  it("loads recently published news", () => {
    recentlyPublishedPage.visit();
    recentlyPublishedPage.assertLoaded();
  });

  it("loads News Release index page", () => {
    newsReleasePage.visit();
    newsReleasePage.assertLoaded();
  });

  it("loads NASA Live page", () => {
    nasaLivePage.visit();
    nasaLivePage.assertLoaded();
  });
});
