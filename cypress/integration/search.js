describe('Find Restraurants in AR51 1AA', () => {
  beforeEach(() => {
    cy.visitHomePage();
    cy.get('[data-test-id=address-box-input]').as('searchInput');
    cy.get('[data-test-id=find-restaurants-button]').as('searchButton');
  });

  it('verify SearchInput visibility,initial value and aria label attirbute', () => {
    cy.get('@searchInput')
      .invoke('val')
      .then((val) => expect(val).to.equal(''));
    cy.get('@searchInput').should(
      'have.attr',
      'aria-label',
      'Enter your postcode'
    );
    cy.get('@searchInput').should('be.visible');
  });

  it('verify SearchButton visibility,text and aria label attirbute', () => {
    cy.get('@searchButton')
      .invoke('text')
      .then((text) => expect(text).to.equal('Search'));
    cy.get('@searchButton').should('have.attr', 'aria-label', 'Search');
    cy.get('@searchButton').should('be.visible');
  });

  it('Search Restraunts without entering postalcode', () => {
    cy.get('@searchButton').click();
    cy.get('#errorMessage').should('have.text', 'Please enter a postcode');
  });

  it('Search Restraunts by area code: AR51 1AA', () => {
    cy.get('@searchInput').type('AR51 1AA');
    cy.get('@searchButton').click();
    cy.get('.c-locationHeader-title').should('contain', 'AR51 1AA');
    cy.get('[data-search-count="openrestaurants"]')
      .invoke('text')
      .then((text) => {
        const restaurants = text.trim().split(' ')[0];
        expect(parseInt(restaurants)).to.be.greaterThan(0);
      });
  });
});
