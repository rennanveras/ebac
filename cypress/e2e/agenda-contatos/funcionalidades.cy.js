/// <reference types="cypress" />

describe('Teste funcionalidades pagina de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app');
  })

  it('Deve fazer a inclusão de um contato na lista', () => {
    cy.get('[type="text"]').type('Rennan');
    cy.get('[type="email"]').type('rennanveras@gmail.com');
    cy.get('[type="tel"]').type('11 91231233');
    cy.get('.adicionar').click();
  })
  
  it('Deve alterar um contato que esta na lista', () => {
    cy.get('.edit').last().click()
    cy.get('input').clear()
    cy.get('[type="text"]').type('Veras');
    cy.get('[type="email"]').type('veras@gmail.com');
    cy.get('[type="tel"]').type('11 12343244');
    cy.get('.alterar').click()
  })
  
  it('Deve excluir um contato que esta na lista', () => {
    cy.get('.delete').last().click()
  })
});