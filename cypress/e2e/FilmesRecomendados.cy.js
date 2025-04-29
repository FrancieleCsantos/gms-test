/// <reference types="cypress"/>

describe('US-015-Funcionalidade: Lista de filmes recomendados', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve exibir filmes recomendados', () => {
    cy.get('#recommendations-section').should("exist")

  })
})