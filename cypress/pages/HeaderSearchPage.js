class HeaderSearch {

    static getSearchButton() {
        return cy.get("button.search-button_search_button__8vPSS");
    }

    static getSearchInput() {
        return cy.get("#SearchInput");
    }

    static getOverlay() {
        return cy.get(".advanced-search_overlay_Out_Of_Popup__qjx3J");
    }

    static getSearchPopup() {
        return cy.get(".advanced-search_wrap_search_popup__ucNgK");
    }

    static openSearchPopup() {
        this.getSearchButton().click({ force: true });
        this.getSearchInput().should("be.visible");
    }

static clearSearch() {
    this.getSearchInput().then($el => {
        const len = ($el.val() || "").length;
        const back = "{backspace}".repeat(len + 5);

        cy.wrap($el).type("{ctrl}a", { force: true });
        cy.wrap($el).type(back, { force: true });
    });

    this.getSearchInput().should("have.value", "");
}

    static type(value) {
        this.getSearchInput().type(value, { force: true });
    }

    static submitSearch() {
        this.getSearchInput().type("{enter}", { force: true });
    }
}

export default HeaderSearch;
