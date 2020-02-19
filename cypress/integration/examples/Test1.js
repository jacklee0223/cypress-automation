import React from 'react';
<reference types="Cypress" />;

describe('My First Test Suite', function() {
  it('My First Test case', function() {
    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    // fixture
  });
  it('My Second Test case', function() {
    // test step
  });
});
