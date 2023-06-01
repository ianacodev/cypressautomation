// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// reference types
/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

// Custom login command
Cypress.Commands.add('login', (username, password) => {
  cy.visit(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  );
  cy.get('input[name=username]').type('admin');
  cy.get('input[name=password]').type('admin123');
  cy.get('.oxd-button').click();
});

// custom command clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click();
});

// OVERWRITE contains() ignore case
Cypress.Commands.overwriteQuery(
  'contains',
  function (originalFn, filter, text, options = {}) {
    if (typeof text === 'object') {
      options = text;
      text = filter;
      filter = undefined;
    }
    options.matchCase = false;
    return originalFn.call(this, filter, text, options);
  },
);
