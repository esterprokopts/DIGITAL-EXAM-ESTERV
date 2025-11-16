import { ServicesPage } from "../pages/ServicesPage";
import { AppointmentUtils } from "../utils/AppointmentUtils";


describe("Collect appointment URLs before navigation - POM", () => {

  const page = new ServicesPage();
  const appointmentUrls = [];

  it("Collects all appointment URLs before navigation", () => {

    page.visit();

    page.getServicesWithAppointmentButton()
      .should("have.length.greaterThan", 0)
      .each(($service) => {

        page.getServiceId($service).then((serviceId) => {
          
          const appointmentUrl = AppointmentUtils.buildAppointmentUrl(serviceId);

          appointmentUrls.push(appointmentUrl);
          cy.log(`Captured URL: ${appointmentUrl}`);
        });
      })
      .then(() => {
        // validate collected URLs
        expect(appointmentUrls).to.have.length.greaterThan(0);

        appointmentUrls.forEach((url) => {
          expect(url).to.match(/\/appointment\/\d+\/\d+\/v2$/);
        });

        // save for later tests
        cy.writeFile("cypress/fixtures/appointment-urls.json", appointmentUrls);
      });
  });
});
