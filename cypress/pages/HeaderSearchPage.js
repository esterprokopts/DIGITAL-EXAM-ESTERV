class HeaderSearchPage {

  getSearchButton() {
    return cy.get("button.search-button_search_button__8vPSS");
  }

  getSearchInput() {
    return cy.get("#SearchInput");
  }

  getSearchPopup() {
    return cy.get("#SearchForm");
  }

  getResultsList() {
    return cy.get("#search_results li");
  }

  getSearchSubmit() {
    return cy.get("#SearchForm button[type='submit']").first();
  }

  openSearchPopup() {
    this.getSearchButton().click({ force: true });
    this.getSearchInput().should("be.visible");
    return this;
  }

  // ✨ Clear שלא נשבר ע"י SuggestExt
clearInput() {
  cy.get("#SearchInput").then(($input) => {
    const input = $input[0];

    // מנקה ישירות בדום
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });

  // מחכה ל-autocomplete שיחזיר (אם יחזיר)
  cy.wait(150);

  // לולאה – מוחק שוב עד שהשדה באמת ריק
  cy.get("#SearchInput").then(function retry($el) {
    if ($el.val() !== "") {
      // מחיקה בכוח
      cy.wrap($el).type("{selectall}{backspace}", { force: true });
      cy.wait(120);

      // מפעילים לולאה מחדש
      cy.get("#SearchInput").then(retry);
    }
  });

  // אימות סופי: צריך להיות ריק
  cy.get("#SearchInput").should("have.value", "");

  return this;
}
  type(text) {
    cy.get("#SearchInput").type(text, { force: true });
    return this;
  }

  submitSearch() {
    this.getSearchSubmit().click({ force: true });
    return this;
  }
}

export default new HeaderSearchPage();
