describe('xpath locators', () => {
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );
  });

  it('should have forgot password link', () => {
    cy.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p',
    ).contains('Forgot your password?');
  });
});
