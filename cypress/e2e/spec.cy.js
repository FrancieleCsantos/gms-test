/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos orbigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Franciele")
    cy.get('#signup-lastname').type("Conceição")
    cy.get('#signup-email').type("Franciele3@gmail.com")
    cy.get('#signup-phone').type("71983791733")
    cy.get('#signup-password').type("Pipoca@10")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain", "Cadastro realizado com sucesso!" )


  
  })
})

describe('US-001-Funcionalidade: Buscar Filme', () => {
  it('Deve buscar o filme', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type("Matrix")
    cy.get('#search-button').click()

  })
})