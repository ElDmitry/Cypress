import '../support/commands'

const baseUrl = 'https://guest:welcome2qauto@qauto.forstudy.space/';
const login = 'testinho@meta.ua';
const password = 'Test123!';
let carId;

describe('API', () => {
  beforeEach('Login to website', () => {
    cy.visit(baseUrl);
    cy.login(login, password);
  });

  it('Add car and validate', () => {    
    cy.intercept('POST', `/api/cars`).as('addCarRequest');

    cy.get('.panel-page_heading > .btn').click();
    cy.get('#addCarMileage').type('999');
    cy.get('.modal-footer > .btn-primary').click();

    cy.wait('@addCarRequest').then((interception) => {
      cy.log(JSON.stringify(interception.response.body)); 
      expect(interception.response.statusCode).to.equal(201);
      carId = interception.response.body.data.id;
      cy.log(`Created Car ID: ${carId}`);
      cy.writeFile('cypress/fixtures/example.json', { carId, lastMileage: 999 })
    });
  });
  it('Get cars', () => {
    cy.request({
      method: 'POST',            
      url: `${baseUrl}api/auth/signin`,
      body: {                   
        "email": login,
        "password": password,
        "remember": false
  },       
      failOnStatusCode: true,  
      timeout: 10000,
      responseTimeout: 30000,
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: true,
    })

    cy.request({
      method: 'GET',            
      url: `${baseUrl}api/cars`,        
      failOnStatusCode: true,  
      timeout: 10000,
      responseTimeout: 30000,
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: true,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('ok');

      const createdCar = response.body.data.find(car => car.id === carId);
      expect(createdCar).to.exist;
      expect(createdCar.mileage).to.equal(999); 
      expect(createdCar.brand).to.equal('Audi'); 
      expect(createdCar.model).to.equal('TT'); 
    });
  })

   it('Create expense via API', () => {
    cy.request({
      method: 'POST',            
      url: `${baseUrl}api/auth/signin`,
      body: {                   
        "email": login,
        "password": password,
        "remember": false
  },       
      failOnStatusCode: true,  
      timeout: 10000,
      responseTimeout: 30000,
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: true,
    })
    cy.fixture('example.json').then((data) =>{
      const mileage = 1000;
      const liters = 100;
      const totalCost = 100000;
      cy.createExpense(data.carId, mileage, liters, totalCost)
        .then((response) => {
          expect(response.status).to.equal(200);
          
          // Валідація тіла респонсу
          expect(response.body.status).to.equal('ok');
          expect(response.body.data).to.have.property('id');
          expect(response.body.data.carId).to.equal(data.carId);
          expect(response.body.data.mileage).to.equal(mileage);
          expect(response.body.data.liters).to.equal(liters);
          expect(response.body.data.totalCost).to.equal(totalCost);
          expect(response.body.data.reportedAt).to.exist;
          // Зберігаємо ID витрати для подальшої перевірки
          cy.writeFile('cypress/fixtures/expense.json', {
            expenseId: response.body.data.id,
            carId: data.carId,
            mileage: mileage,
            liters: liters,
            totalCost: totalCost
          });
        });
    });
  });
  it('Validate expense via UI', () => {
    cy.fixture('expense.json').then((expenseData) => {
      cy.get('[routerlink="expenses"]').click();
      cy.get('#carSelectDropdown').last()
      cy.get('.col-lg-9')
      .should('contain', expenseData.mileage) 
      .should('contain', expenseData.liters)  
      .should('contain', expenseData.totalCost)

    });
  });
})
