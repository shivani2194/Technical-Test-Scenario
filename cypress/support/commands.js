Cypress.Commands.add('homePage',()=>{
    cy.visit('/')
    cy.title().should('eq', 'Order takeaway online from 30,000+ food delivery restaurants. | Just Eat')
    //cy.url().should('eq', 'https://www.just-eat.co.uk/')

})