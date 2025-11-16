export class ServicesPage {

  visit() {
    cy.visit("https://govisit.gov.il/he/authorities/authority/262");
  }

  // כל ה-service containers שיש בהם כפתור לזימון תור
  getServicesWithAppointmentButton() {
    return cy.get('.service:has(button[aria-label*="לזימון תור"])');
  }

  // כפתור "לזימון תור" מתוך service
  getAppointmentButton(serviceElement) {
    return cy.wrap(serviceElement).find('button[aria-label*="לזימון תור"]');
  }

  // מזהה השירות (svc_authority_service)
  getServiceId(serviceElement) {
    return cy.wrap(serviceElement).invoke("attr", "id");
  }
}
