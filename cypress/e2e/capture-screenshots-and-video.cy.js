/// <reference types="Cypress"/>

describe('capture screens and video', () => {
  it('capture screenshots & video', () => {
    cy.visit('https://demo.opencart.com/');
    //cy.screenshot('homepage');
    //cy.wait(5000);
    // cy.get('#logo > a > .img-fluid').screenshot('logo');

    // auto capture screenshot & video on failure
    cy.get(':nth-child(7) > .nav-link').click();
    cy.get('h2').should('have.text', 'Tablets');
  });
});
