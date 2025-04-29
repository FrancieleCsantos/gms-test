/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  })

  it('Cadastro de campos obrigatorios', () => {
    var email = `fran${Date.now()}@gmail.com`
    cy.PreencherCadastro("Fran", "conceição", email, "719897399", "Pipoca@1010")
    cy.get('#signup-response').should("contain", "Cadastro realizado com sucesso!")

  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.PreencherCadastro("Fran2020", "conceição", "Fran@gmail.com", "719897399", "Pipoca@1010")
    cy.get('#signup-response').should("contain", "Nome deve conter apenas caracteres alfabéticos")
  });
})



