describe('navigation', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com');
  });
  it('navigation test', () => {
    cy.title().should('eq', 'Your Store');
    cy.get(':nth-child(7) > .nav-link').click();
    cy.get('h2').should('have.text', 'Cameras');
    cy.go('back');
    cy.title().should('eq', 'Your Store');
    cy.go('forward');
    cy.get('h2').should('have.text', 'Cameras');
    cy.go(-1); // alternative for back
    cy.title().should('eq', 'Your Store');
    cy.go(1); // alternative for back
    cy.get('h2').should('have.text', 'Cameras');
    // reload
    cy.reload();
  });
});
