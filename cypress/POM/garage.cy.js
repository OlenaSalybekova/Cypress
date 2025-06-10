import { garagePage } from '../support/pages/garagePage';
import { expensesPage } from '../support/pages/expensesPage';
describe('Garage and Expenses Tests', () => {
  let createdCarId;
  before(() => {
    cy.loginByApi().then(() => {
      cy.visit('/');
    });
  });
  it('Add car and validate by interception', () => {
    cy.intercept('POST', '**/api/cars').as('createCar');
    garagePage.addCar('Audi', 'A6', '10000');
    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      createdCarId = interception.response.body.id;
    });
  });
  it('Validate car from API by ID', () => {
    cy.request({
      method: 'GET',
      url: '/api/cars',
      headers: {
        authorization: `Bearer ${Cypress.env('accessToken')}`
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      const car = res.body.cars.find(c => c.id === createdCarId);
      expect(car).to.exist;
      expect(car.brand).to.eq('Audi');
      expect(car.model).to.eq('A6');
    });
  });
  it('Create expense via API and validate response', () => {
    const today = new Date().toISOString().split('T')[0];
    cy.request({
      method: 'POST',
      url: '/api/expenses',
      headers: {
        authorization: `Bearer ${Cypress.env('accessToken')}`
      },
      body: {
        carId: createdCarId,
        type: 'FUEL',
        amount: 50,
        date: today
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.amount).to.eq(50);
    });
  });
  it('Validate expense via UI', () => {
    cy.visit('/');
    cy.contains('Audi A6').click();
    cy.contains('10000 km').should('exist');
    cy.contains('50').should('exist');
  });
});
