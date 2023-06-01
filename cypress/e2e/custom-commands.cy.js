describe('custom commands', () => {
  beforeEach(() => {
    cy.visit('https://demo.nopcommerce.com');
  });

  it('handling links', () => {
    // manual
    /*
    cy.get(
      ':nth-child(2) > .product-item > .details > .product-title > a',
    ).click();
    cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
    */
    // using custom command
    cy.clickLink('Apple MacBook Pro 13-inch');
    cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
  });

  it.only('overwriting existing command', () => {
    cy.clickLink('APPLE MACBOOK Pro 13-inch');
    cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
  });
});
