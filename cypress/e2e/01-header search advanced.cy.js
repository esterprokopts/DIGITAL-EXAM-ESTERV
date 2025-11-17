import HeaderSearch from "../pages/HeaderSearchPage";

describe("GOV.IL - Header Search Component", () => {
  beforeEach(() => {
    cy.visit("https://www.gov.il/he");
    cy.get("header", { timeout: 10000 }).should("be.visible");
  });

  // -------------------------------
  // 1) Full Search Flow
  // -------------------------------
  it("Full Search Flow – popup → search → verify results", () => {
    HeaderSearch.openSearchPopup();

    HeaderSearch.clearInput();
    HeaderSearch.type("דרכ");

    HeaderSearch.getResultsList().should("have.length.at.least", 1);

    HeaderSearch.clearInput();
    HeaderSearch.type("רישיון נהיגה");

    HeaderSearch.submitSearch();
    cy.url().should("include", "Search?query=");
  });

  // -------------------------------
  // 2) UI Behavior
  // -------------------------------
it("UI Behavior – typing, clearing", () => {
  HeaderSearch.openSearchPopup();

  const inputs = ["דרכון", "passport", "12345"];

  inputs.forEach((txt) => {
    HeaderSearch.clearInput();
    HeaderSearch.type(txt);

    HeaderSearch.getSearchInput().should("have.value", txt);
  });

  HeaderSearch.clearInput();
  HeaderSearch.getSearchInput().should("have.value", "");
});


  // -------------------------------
  // 3) Autocomplete
  // -------------------------------
  it("Autocomplete – suggestions appear when typing", () => {
    HeaderSearch.openSearchPopup();

    HeaderSearch.clearInput();
    HeaderSearch.type("דרכ");

    HeaderSearch.getResultsList()
      .should("have.length.at.least", 1)
      .first()
      .invoke("text")
      .should("not.be.empty");
  });

  // -------------------------------
  // 4) Stress typing
  // -------------------------------
  it("Stress Test – rapid typing + clear", () => {
    HeaderSearch.openSearchPopup();

    const word = "דרכון".split("");

    word.forEach((letter) => {
      HeaderSearch.getSearchInput().type(letter, { delay: 10, force: true });
    });

    HeaderSearch.clearInput();
    HeaderSearch.getSearchInput().should("have.value", "");
  });

  // -------------------------------
  // 5) End-to-End switching inputs
  // -------------------------------
  it("End-to-End – change inputs mid-flow", () => {
    HeaderSearch.openSearchPopup();

    HeaderSearch.clearInput();
    HeaderSearch.type("ביטוח לאומי");

    HeaderSearch.clearInput();
    HeaderSearch.type("חידוש דרכון");

    HeaderSearch.submitSearch();
    cy.url().should("include", "Search?query=");
  });
});
