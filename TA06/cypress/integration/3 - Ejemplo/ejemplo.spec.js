// <reference types="Cypress" />

it('should visit home', () => {
  cy.visit('http://localhost:4200');
})

// <reference types="Cypress" />
it('nglabs List Users', () => {
  cy.visit('http://localhost:4200');
  cy.get('h1').contains('Rick & Morty APP');
});

