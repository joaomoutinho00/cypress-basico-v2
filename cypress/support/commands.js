Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Joao')
    cy.get('#lastName').type('Moutinho')
    cy.get('#email').type('jvkmoutinho@hotmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})