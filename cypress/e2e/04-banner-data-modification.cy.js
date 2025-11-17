import { MinistrySecurityPage } from "../pages/MinistrySecurityPage";
import { PrimeMinisterPage } from "../pages/PrimeMinisterPage";

describe("Inject banner HTML from Security Ministry into PMO page", () => {

    const security = new MinistrySecurityPage();
    const pmo = new PrimeMinisterPage();

    it("Extracts banner HTML from A and injects it into B", () => {

        // מקור
        security.visit();
        security.captureBannerHTML();

        // יעד
        pmo.visit();
        pmo.replaceBanner();

        // אימות
        pmo.validateBanner();
    });
});
