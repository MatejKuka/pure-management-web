describe('Profile page form', () => {
  it('should show validation error messages when submit with all fields blank', () => {
    cy.visit('http://localhost:3000/profile');
    cy.contains("Submit").click();
    cy.get(`[data-testid="error-first-name"]`).should("exist");
    cy.get(`[data-testid="error-last-name"]`).should("exist");
    cy.get(`[data-testid="error-email"]`).should("exist");
  })

  it("should show toast with specific content when submit with filled fields ", () => {
    cy.visit('http://localhost:3000/profile');
    cy.get(`[data-testid="action-first-name"]`).type("Matej");
    cy.get(`[data-testid="action-last-name"]`).type("Kuka");
    cy.get(`[data-testid="action-email"]`).type("contact@matejkuka.com");
    cy.contains("Submit").click();
    cy.contains(`Succesfully changed your profile`);
  })
})