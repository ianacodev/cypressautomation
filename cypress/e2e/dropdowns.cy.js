describe('dropdowns', () => {
  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
  });

  it('dropdown with select', () => {
    cy.get('.custom-select').select('Italy').should('have.value', '6');
  });
});
