import Login from '../page-objects/login-page-2';

describe('pom', () => {
  it('login test', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
    cy.get('input[name=username]').type('admin');
    cy.get('input[name=password]').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      'Dashboard',
    );
  });

  // using page object
  it.only('login test using page object', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
    const login = new Login();
    login.setUserName('admin');
    login.setPassword('admin123');
    login.clickSubmit();
    login.verifyLogin();
  });
});
