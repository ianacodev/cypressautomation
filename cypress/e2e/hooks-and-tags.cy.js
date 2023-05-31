/** hooks */
// before
// after
// beforeEach
// afterEach

/**tags */
// it.skip
// it.only

describe('my test suite', () => {
  before(() => {
    cy.log('*** launch app ***');
  });

  after(() => {
    cy.log('*** close app ***');
  });

  beforeEach(() => {
    cy.log('*** before each ***');
  });

  afterEach(() => {
    cy.log('*** after each ***');
  });

  it('search', () => {
    cy.log('*** searching ***');
  });

  it.skip('advanced search', () => {
    cy.log('*** advanced searching ***');
  });

  it.only('listing products', () => {
    cy.log('*** listing products ***');
  });
});
