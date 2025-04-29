/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Limpar busca', () => {
    beforeEach(() => {
        cy.visit('/')
      });
    
    it('Deve limpar campo de busca', () => {
      cy.get('#search-input').type("Matrix")
      cy.get('#clear-button').click()
  
    })
  })