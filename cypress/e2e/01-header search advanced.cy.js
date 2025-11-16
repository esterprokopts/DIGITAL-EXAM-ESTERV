import HeaderSearch from "../pages/HeaderSearchPage";

describe("GOV.IL - Header Search Component", () => {

    beforeEach(() => {
        cy.session("homepage", () => {
            cy.visit("https://www.gov.il/he");
            cy.get("header", { timeout: 10000 }).should("be.visible");
        });

        cy.visit("https://www.gov.il/he");
    });

    it("Full Search Flow – popup → search → verify results", () => {

        HeaderSearch.openSearchPopup();
        HeaderSearch.type("דרכ");

        cy.get("#search_results li").should("have.length.at.least", 1);

        HeaderSearch.clearSearch();
        HeaderSearch.type("רישיון נהיגה");
        HeaderSearch.submitSearch();

        cy.url().should("include", "Search?query=");
    });

    it("UI Behavior – typing, clearing, closing popup", () => {

        HeaderSearch.openSearchPopup();

        const inputs = ["דרכון", "passport", "12345"];

        inputs.forEach(text => {
            HeaderSearch.clearSearch();
            HeaderSearch.type(text);
            HeaderSearch.getSearchInput().should("have.value", text);
        });

        HeaderSearch.clearSearch().should("have.value", "");

        HeaderSearch.getOverlay().click({ force: true });
        HeaderSearch.getSearchPopup().should("not.be.visible");
    });

    it("Autocomplete – suggestions appear when typing", () => {
        HeaderSearch.openSearchPopup();
        HeaderSearch.type("דרכ");

        cy.get("#search_results li")
            .should("have.length.at.least", 1)
            .first()
            .invoke("text")
            .should("not.be.empty");
    });

    it("Stress Test – rapid typing + clear", () => {
        HeaderSearch.openSearchPopup();

        "דרכון".split("").forEach(letter => {
            HeaderSearch.getSearchInput().type(letter, { delay: 10, force: true });
        });

        HeaderSearch.clearSearch();
    });

    it("End-to-End – change inputs mid-flow", () => {
        HeaderSearch.openSearchPopup();

        HeaderSearch.type("ביטוח לאומי");
        HeaderSearch.clearSearch();

        HeaderSearch.type("חידוש דרכון");
        HeaderSearch.submitSearch();

        cy.url().should("include", "Search?query=");
    });
});
