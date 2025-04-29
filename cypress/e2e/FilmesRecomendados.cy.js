/// <reference types="cypress"/>

describe('US-015-Funcionalidade: Lista de filmes recomendados', () => {
    beforeEach(() => {
        cy.visit('/')
      });
   
    it('Deve exibir filmes recomendados', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#recommendations-section').should("exist")
  
    })
  })