describe('my first test', () => {
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
  });

  it('verify title-positive test', () => {
    cy.title().should('eq', 'OrangeHRM');
  });

  it('should enter value', () => {
    cy.get('input[name=username]').type('Admin');
    cy.get('input[name=password]').type('admin123');
    cy.get('.orangehrm-login-button').click();
  });
});
