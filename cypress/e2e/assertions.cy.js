describe('assertions demo', () => {
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
  });

  xit('implicit assertions', () => {
    // independent assertions
    cy.url().should('include', 'orangehrmlive.com');
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
    cy.url().should('contain', 'orangehrmlive');
    // chaining using should
    cy.url()
      .should('include', 'orangehrmlive.com')
      .should(
        'eq',
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      )
      .should('contain', 'orangehrmlive');
    // using and
    cy.url()
      .should('include', 'orangehrmlive.com')
      .and(
        'eq',
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      )
      .and('contain', 'orangehrmlive')
      .and('not.contain', 'greenhrm');

    // title
    cy.title()
      .should('include', 'OrangeHRM')
      .and('eq', 'OrangeHRM')
      .and('contain', 'HRM');
    // logo (be.visible / exist)
    cy.get('.orangehrm-login-branding > img').should('be.visible');
    cy.get('.orangehrm-login-branding > img').should('exist');
    // using chaining
    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist');
    // links present
    cy.xpath('//a').should('have.length', '5');
    cy.get('a').should('have.length', '5');
    //
    const usernameInput = cy.get('input[name=username]');
    usernameInput.type('admin');
    cy.get('input[name=username]').should('have.value', 'admin');
  });

  // explicit assertions
  it('explicity assertions', () => {
    cy.get('input[name=username]').type('admin');
    cy.get('input[name=password]').type('admin123');
    cy.get('.oxd-button').click();
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    );

    let expName = 'Venkatesh MishraVampVampVampVamp';
    // user defined function
    cy.get('.oxd-userdropdown-name').then((x) => {
      let actName = x.text();
      // BDD style (expect)
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal('bad name');

      // TDD style (assert)
      assert.equal(actName, expName);
      assert.notEqual(actName, 'bad name');
    });
  });

  it('should use custom command', () => {
    cy.login('admin', 'admin123');
  });
});
