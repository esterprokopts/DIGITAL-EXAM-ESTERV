export class BannerComponent {

    getSourceBannerRoot() {
        // משרד לביטחון לאומי
        return cy.get("#officeBannerItemsCarousel", { timeout: 15000 });
    }

    getTargetBannerRoot() {
        // משרד ראש הממשלה
        return cy.get("#officeBannerItemsCarousel", { timeout: 15000 });
    }

    captureBannerHTML() {
        return this.getSourceBannerRoot()
            .should("be.visible")
            .invoke("prop", "outerHTML")
            .as("bannerHTML");
    }

    injectBanner() {
    cy.get("@bannerHTML").then(html => {
        cy.document().then(doc => {

            // מחכים שהאלמנט יופיע עד 15 שניות
            cy.get("#officeBannerItemsCarousel", { timeout: 15000 })
                .should("exist");

            const target = doc.querySelector("#officeBannerItemsCarousel");

            // הגנה – אם עדיין לא נטען
            if (!target) {
                throw new Error("Target banner not found on PMO page");
            }

            target.outerHTML = html;
        });
    });
}


    validateInjection() {
        cy.get("@bannerHTML").then(html => {
            cy.get("#officeBannerItemsCarousel")
                .invoke("prop", "outerHTML")
                .should("eq", html);
        });
    }
}
