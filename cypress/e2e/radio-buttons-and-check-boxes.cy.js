describe('check ui elements', () => {
  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
  });

  it('checking radio buttons', () => {
    // count
    cy.get(':nth-child(4) > .card-body input[type=radio]').should(
      'have.length',
      '3',
    );

    cy.get('input#male').should('be.visible');
    cy.get('input#female').should('be.visible');

    // check male
    cy.get('input#male').check().should('be.checked');
    cy.get('input#female').should('not.be.checked');

    // female
    cy.get('input#female').check().should('be.checked');
    cy.get('input#male').should('not.be.checked');
  });
});
