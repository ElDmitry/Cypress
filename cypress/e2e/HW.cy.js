import '../support/commands'

const baseUrl = Cypress.env('baseUrlProd'); //baseUrlStage для версії з багами
const login = Cypress.env('loginProd'); // loginStage для версії з багами
const password = Cypress.env('passwordProd') // passwordStage для версії з багами


describe('Add car and expenses', () => {
  beforeEach('login to web-site',() => {
    cy.visit(baseUrl);
    cy.login(login, password)
});
it('Button "Add car" is visible', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').should('be.visible');
});
it('Modal window "Add car" is visible', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('.modal-content').should('be.visible') 
});
it('Drop-down menu "brand" has all options', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand') 
      .should('contain', 'Audi')
      .and('contain', 'BMW')
      .and('contain', 'Ford')
      .and('contain', 'Porsche')
      .and('contain', 'Fiat')
});
it('Drop-down menu "models" has all options in "Audi"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('Audi');
    cy.get('#addCarModel')
      .should('contain', 'TT')
      .and('contain', 'R8')
      .and('contain', 'Q7')
      .and('contain', 'A6')
      .and('contain', 'A8')
});
it('Drop-down menu "models" has all options in "BMW"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('BMW');
    cy.get('#addCarModel')
      .should('contain', '3')
      .and('contain', '5')
      .and('contain', 'X5')
      .and('contain', 'X6')
      .and('contain', 'Z3')
});
it('Drop-down menu "models" has all options in "Ford"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('Ford');
    cy.get('#addCarModel')
    .should('contain', 'Fiesta')
      .and('contain', 'Focus')
      .and('contain', 'Fusion')
      .and('contain', 'Mondeo')
      .and('contain', 'Sierra')
});
it('Drop-down menu "models" has all options in "Porsche"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('Porsche');
    cy.get('#addCarModel')
    .should('contain', '911')
      .and('contain', 'Cayenne')
      .and('contain', 'Panamera')
});
it('Drop-down menu "models" has all options in "Fiat"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('Fiat');
    cy.get('#addCarModel')
      .should('contain', 'Palio')
      .and('contain', 'Ducato')
      .and('contain', 'Panda')
      .and('contain', 'Punto')
      .and('contain', 'Scudo')
});
it('Modal window has input "Mileage"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarMileage').should('be.visible');
});
it('Modal window has button "X"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('.close').should('be.visible');
});
it('Modal window has button "Cancel"', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('.close').should('be.visible');
});
it('Button "Add" is disabled by default', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('.modal-footer > .btn-primary').should('be.disabled');
});
it('"Miliage" is require', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarMileage').click();
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Mileage cost required')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)')
});
it('"Miliage" has error', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarMileage').type('-1');
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Mileage has to be from 0 to 999999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('"Miliage" has error', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarMileage').type('1000000');
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Mileage has to be from 0 to 999999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Add new car', () => {
    cy.get('.panel-page_heading > .btn').as('addCarButton');
    cy.get('@addCarButton').click();
    cy.get('#addCarBrand').select('BMW');
    cy.get('#addCarModel').select('X5')
    cy.get('#addCarMileage').type('10');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.car-list').should('contain', 'BMW')
});
it('Button Add fuel expense is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').should('be.visible')
});
it('Modal window add an expense is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('.modal-content').should('be.visible')
});
it('Select Vehicle is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseCar').should('be.visible')
});
it('Data-piker Date is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseDate').should('be.visible')
});
it('Mileage input is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseMileage').should('be.visible')
});
it('Number of liters input is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseLiters').should('be.visible')
});
it('Total cost input is visible', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseTotalCost').should('be.visible')
});
it('Button "Add" is disabled by default in modal fuel', () => {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
    cy.get('@addFuel').click()
    cy.get('.modal-footer > .btn-primary').should('be.disabled');
});
it('Modal window has button "X"', () => {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
    cy.get('@addFuel').click()
    cy.get('.close').should('be.visible');
});
it('Modal window has button "Cancel"', () => {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
    cy.get('@addFuel').click()
    cy.get('.close').should('be.visible');
});
it('Data-piker Date is require', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseDate').clear()
  cy.get('.modal-footer > .btn-primary').should('be.disabled')
});
it('Mileage input is require', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseMileage').clear()
  cy.get('.modal-footer').click();
  cy.get('.invalid-feedback')
    .should('have.text', 'Mileage required')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)')
});
it('"Miliage" has error', () => {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
    cy.get('@addFuel').click()
    cy.get('#addExpenseMileage').clear().type('-1');
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Mileage has to be from 0 to 999999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
})
it('"Miliage" has error', () => {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
    cy.get('@addFuel').click()
    cy.get('#addExpenseMileage').clear().type('1000000');
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Mileage has to be from 0 to 999999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Number of liters input is require', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseLiters').clear()
  cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Liters required')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Number of liters input error', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseLiters').clear().type('0.009')
  cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Liters has to be from 0.01 to 9999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Number of liters input error', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseLiters').clear().type('10000')
  cy.get('.modal-footer').click();
    cy.get('.invalid-feedback')
    .should('have.text', 'Liters has to be from 0.01 to 9999')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Total cost input is require', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseTotalCost').clear()
  cy.get('.modal-footer').click();
  cy.get('.invalid-feedback')
    .should('have.text', 'Total cost required')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Total cost input is invalid', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseTotalCost').clear().type('0.009')
  cy.get('.modal-footer').click();
  cy.get('.invalid-feedback')
    .should('have.text', 'Total cost has to be from 0.01 to 1000000')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Total cost input is invalid', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseTotalCost').clear().type('1000001')
  cy.get('.modal-footer').click();
  cy.get('.invalid-feedback')
    .should('have.text', 'Total cost has to be from 0.01 to 1000000')
    .and('have.css', 'color', 'rgb(220, 53, 69)')
    .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Add expence to new car', () => {
  cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').as('addFuel')
  cy.get('@addFuel').click()
  cy.get('#addExpenseCar').select(0)
  cy.get('#addExpenseMileage').clear().type('100')
  cy.get('#addExpenseLiters').type('20')
  cy.get('#addExpenseTotalCost').type('120')
  cy.get('.modal-footer > .btn-primary').click()
  cy.url().should('include', '/panel/expenses')
})
});