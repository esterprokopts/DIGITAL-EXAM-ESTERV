// cypress/e2e/part2_api_intercept.cy.js
import { governmentBranchesPage } from "../pages/GovernmentBranchesPage";

describe("משימה 2 – יירוט API עם Page Object Model", () => {
  it(" 3 קריאות  API - סטטוס 200 ", () => {
    
    governmentBranchesPage
      .interceptApis()
      .visit()
      .validateAllApis200();
  });
});