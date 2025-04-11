// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.get('.header_right > .btn').click();
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password, {sensitive: true});
    cy.get('.modal-footer > .btn-primary').click()
 });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
});

Cypress.Commands.add('createExpense', (carId, mileage, liters, totalCost) => {
  cy.request({
    method: 'POST',
    url: `https://qauto.forstudy.space/api/expenses`,
    body: {
      "carId": carId,
      "reportedAt": new Date().toISOString(),
      "mileage": mileage,
      "liters": liters,
      "totalCost": totalCost,
      "forceMileage": false
    },
    failOnStatusCode: true,  
    timeout: 10000,
    responseTimeout: 30000,
    retryOnNetworkFailure: true,
    retryOnStatusCodeFailure: true,
  });
});
import './commands'