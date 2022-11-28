// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')

    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  
    })

    it.only('Preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste , teste, Teste , teste, Teste , teste.'
        cy.get('#firstName').type('Bruno')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('candidochan@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})       
        cy.get('.button').click()

        cy.get('.success').should('be.visible')
    })

    
    it.only('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Bruno')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('candidochan@gmail,com')
        cy.get('#open-text-area').type('Teste')       
        cy.get('.button').click()

        cy.get('.error').should('be.visible')

    })
  })