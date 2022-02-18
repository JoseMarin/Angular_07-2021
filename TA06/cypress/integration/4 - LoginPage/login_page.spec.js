// <reference types="Cypress" />
context('window', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/login')
  })

  // <reference types="Cypress" />
  it('should view Title', () => {
    cy.get('h1').contains('Rick & Morty APP');
  });

  //Test navbar y los botones
  it('Navbar test', () => {
    cy.get('app-navbar')
    cy.get('nav').find('a').should('be.visible')
    cy.get('nav').find('li').should('not.be.visible')
  })

  //Test Sessionstorage
  it('cy.clearLocalStorage() - clear all data in local storage', () => {
    // https://on.cypress.io/clearlocalstorage
    cy.get('button').contains('Submit').click().should(() => {
      expect(sessionStorage.getItem('auth-username')).to.null
      expect(sessionStorage.getItem('auth-password')).to.null
      expect(sessionStorage.getItem('auth-token')).to.null
    })
  })

  it('cy.title() - get the title', () => {
    cy.title().should('include', 'Rick & Morty APP')
  })

  it('input Username on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('label').contains('Username')
    cy.get('input[id=username]')
  })

  it('input Password on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('label').contains('Password')
    cy.get('input[id=password]')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('button').click()
  })



  })
