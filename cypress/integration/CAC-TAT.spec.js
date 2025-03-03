/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = "Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste,"
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.info')
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    it('campo telefone continua vazio quando preenchido com valot não-numérico', function(){
        cy.get('#phone')
            .type('abcdefghij')
                .should('have.value', '')
    })
    it(' exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.info')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Joao').should('have.value', 'Joao')
        .clear().should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })
    it('usar cy.contais ao inves de cy.get ', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.com')
        cy.get('#open-text-area').type('Testando')
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })
    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })
    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })
    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })
    it('marca o tipo de atendimento "Feedback"', function(){
        cy.get('input[type="radio"][value="feedback"]').check()
    })
    it('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                .should('be.checked')
            })
    })
    it('arca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type="checkbox"]').check()
        .should('be.checked')
            .last().uncheck()
            .should('not.be.checked')
        
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Moutinho')
        cy.get('#email').type('jvkmoutinho@hotmail.com')
        cy.get('#phone-checkbox').check()
            .should('be.checked')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })
    it('selecione um arquivo da pasta fixtures', function(){
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
                .should(function($input){
                    expect($input[0].files[0].name).to.equal('example.json')
                })
    })
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
    it('acessa a página da política de privacidade removendo o target e então clicanco no link', function(){
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click(
    })
  })
  

 