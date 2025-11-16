import { BannerComponent } from "./BannerComponent";

export class MinistrySecurityPage {

    constructor() {
        this.url = "https://www.gov.il/he/departments/ministry_of_public_security/govil-landing-page";
        this.banner = new BannerComponent();
    }

    visit() {
        cy.visit(this.url);
    }

    captureBannerHTML() {
        return this.banner.captureBannerHTML().as("bannerHTML");
    }
}
