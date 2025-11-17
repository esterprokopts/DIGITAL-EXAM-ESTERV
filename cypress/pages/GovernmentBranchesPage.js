// cypress/pages/GovernmentBranchesPage.js

class GovernmentBranchesPage {

  visit() {
    cy.visit("https://www.gov.il/he/government-service-branches");
    return this;
  }

  interceptApis() {
    cy.intercept("GET", "/govilHF/api/GetServices?culture=he").as("services");
    cy.intercept("GET", "https://sm.gov.il/trends.json?culture=he").as("trends");
    cy.intercept("GET", "/govilHF/api/GetHeaderMoreData*").as("header");
    return this;
  }

  validateAllApis200() {
    cy.wait("@services").its("response.statusCode").should("eq", 200);
    cy.wait("@trends").its("response.statusCode").should("eq", 200);
    cy.wait("@header").its("response.statusCode").should("eq", 200);
    return this;
  }
}

export const governmentBranchesPage = new GovernmentBranchesPage();
