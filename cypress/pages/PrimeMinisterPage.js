import { BannerComponent } from "./BannerComponent";

export class PrimeMinisterPage {

    visit() {
    cy.visit("https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page");

    // מחכים לבאנר להיטען
    cy.get("#officeBannerItemsCarousel", { timeout: 15000 }).should("exist");
}


    replaceBanner() {
        const banner = new BannerComponent();
        banner.injectBanner();
    }

    validateBanner() {
        const banner = new BannerComponent();
        banner.validateInjection();
    }
}
