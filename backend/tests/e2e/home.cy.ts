describe('Home Page', () => {
  it('shows hero headline', () => {
    cy.visit('/');
    cy.contains('MASTER DEVOPS').should('be.visible');
  });
});