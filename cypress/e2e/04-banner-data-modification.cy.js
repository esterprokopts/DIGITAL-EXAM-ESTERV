import { MinistrySecurityPage } from "../pages/MinistrySecurityPage";
import { PrimeMinisterPage } from "../pages/PrimeMinisterPage";

describe("Inject banner HTML from Security Ministry into PMO page (POM)", () => {

    const security = new MinistrySecurityPage();
    const pmo = new PrimeMinisterPage();

    it("Extracts banner HTML from A and injects it into B", () => {

        // ביקור בדף הביטחון
        security.visit();
        security.captureBannerHTML();

        // ביקור בדף רה"מ
        pmo.visit();

        // החלפת הבאנר
        pmo.replaceBanner();

        // ולידציה
        pmo.validateBanner();
    });
});
