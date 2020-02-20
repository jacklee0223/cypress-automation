import React from 'react';
<reference types="Cypress" />;

describe('My Second Test Suite', function() {
  it('My First Test case', function() {
    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products').as('productLocation');
    cy.get('@productLocation')
      .find('.product')
      .each(($e1, index, $list) => {
        const textVeg = $e1.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          $e1.find('button').click();
        }
      });
    cy.get('.cart-icon > img').click();
  });
});
