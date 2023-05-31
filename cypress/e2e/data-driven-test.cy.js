describe('data driven', () => {
  it('data driven test', () => {
    cy.fixture('orangehrm2').then((dataSet) => {
      cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      );
      dataSet.forEach((userData) => {
        const { username, password, expected } = userData;
        cy.get('input[name=username]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type=submit]').click();
        if (username === 'Admin' && password === 'admin123') {
          cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
            'have.text',
            expected,
          );
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        } else {
          cy.get('.oxd-alert-content > .oxd-text').should(
            'have.text',
            expected,
          );
        }
      });
    });
  });
});
