import { BannerComponent } from "./BannerComponent";

export class MinistrySecurityPage {

    visit() {
        cy.visit("https://www.gov.il/he/departments/ministry_of_public_security/govil-landing-page");
    }

    captureBannerHTML() {
        const banner = new BannerComponent();
        return banner.captureBannerHTML();
    }
}
