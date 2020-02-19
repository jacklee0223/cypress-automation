import React from 'react';
<reference types="Cypress" />;

describe('My First Test Suite', function() {
  it('My First Test case', function() {
    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    // fixture
  });
  it('My Second Test case', function() {
    // test step
  });
});
