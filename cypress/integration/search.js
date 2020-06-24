describe ('Find Restraurants', () =>{
    beforeEach(() => {
     cy.homePage();
      });
      
     it('Search Restaurants in an area',()=>{
        cy.get('.button')
        .click()
        cy.url().should('eq', 'https://www.just-eat.co.uk/#main')
    })

    it('Search Restraunts by area code', ()=>{
        cy.get('.Form_c-search-placeholder_2F0h-')
        .type('AR51 1AA')
       // cy.get('.Form_c-search-btn_2cjDI')
       cy.get('[data-test-id="find-restaurants-button"]').click()
    })

    /*it('Check for area code', ()=>{
        cy.get('.c-locationHeader-title').contains('AR51 1AA')
       
})*/
})