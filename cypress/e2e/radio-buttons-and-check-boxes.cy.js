/// <reference types="Cypress"/>

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

  it('checking check boxes', () => {
    // count
    cy.get(':nth-child(4) > .card-body input[type=checkbox]').should(
      'have.length',
      '7',
    );
    // visibility of element
    cy.get('input#monday').should('be.visible');
    // select individual checkboxes
    cy.get('input#monday').check();
    cy.get('input#monday').should('be.checked');
    // unselecting checkbox
    cy.get('input#monday').uncheck();
    cy.get('input#monday').should('not.be.checked');
    // select multiple checkboxes
    cy.get(':nth-child(4) > .card-body input[type=checkbox]')
      .check()
      .should('be.checked');
    //unselect multiple checkboxes
    cy.get(':nth-child(4) > .card-body input[type=checkbox]')
      .uncheck()
      .should('not.be.checked');
    // individual position select
    cy.get(':nth-child(4) > .card-body input[type=checkbox]')
      .first()
      .check()
      .should('be.checked');
    cy.get(':nth-child(4) > .card-body input[type=checkbox]')
      .last()
      .check()
      .should('be.checked');
  });
});
