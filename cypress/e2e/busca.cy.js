/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Buscar Filme', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Deve buscar o filme com sucesso', () => {
        cy.get('#search-input').type("Matrix")
        cy.get('#search-button').click()

    })
})