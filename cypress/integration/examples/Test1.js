import React from 'react';
<reference types="Cypress" />;

describe('My First Test Suite', function() {
  it('My First Test case', function() {
    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    cy.get('.products')
      .find('.product')
      .should('have.length', 4);
    cy.get(':nth-child(3) > .product-action > button').click();
    cy.get('.products')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click();
    cy.get('.products')
      .find('.product')
      .each(($e1, index, $list) => {
        const textVeg = $e1.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          $e1.find('button').click();
        }
      });
    // fixture
  });
  it('My Second Test case', function() {
    // test step
  });
});
