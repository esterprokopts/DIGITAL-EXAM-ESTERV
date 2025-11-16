import { BannerComponent } from "./BannerComponent";

export class PrimeMinisterPage {

    constructor() {
        this.url = "https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page";
        this.banner = new BannerComponent();
    }

    visit() {
        cy.visit(this.url);
    }

    replaceBanner() {
        cy.get("@bannerHTML").then(html => {
            this.banner.replaceBanner(html);
        });
    }

    validateBanner() {
        this.banner.getFirstImage().should("be.visible");
    }
}
