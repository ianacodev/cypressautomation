describe('fixtures', () => {
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
  });

  it('fixtures demo test', () => {
    // manual
    /*
    cy.get('input[name=username]').type('Admin');
    cy.get('input[name=password]').type('admin123');
    cy.get('button[type=submit]').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      'Dashboard',
    );
    */

    //fixture
    cy.fixture('orangehrm').then((data) => {
      const { username, password, expected } = data;
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(password);
      cy.get('button[type=submit]').click();
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
        'have.text',
        expected,
      );
    });
  });

  // access through hook - for multi it blocks
  let userdata;
  before(() => {
    cy.fixture('orangehrm').then((data) => {
      userdata = data;
    });
  });

  it('fixture demo test', () => {
    const { username, password, expected } = userdata;
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      expected,
    );
  });
});
