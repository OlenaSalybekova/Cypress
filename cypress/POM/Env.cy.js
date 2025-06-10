import { garagePage } from '../support/pages/garagePage';
import { expensesPage } from '../support/pages/expensesPage';
describe('Garage and Expenses Tests', () => {
  before(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.get('.header_right > .btn').click();
    cy.get('#signinEmail').type(Cypress.env('userEmail'));
    cy.get('#signinPassword').type(Cypress.env('userPassword'), { sensitive: true });
    cy.get('.modal-footer > .btn-primary').click();
  });
  it('Add car and fuel expense', () => {
    garagePage.addCar('Audi', 'A6', '20000');
    expensesPage.addFuelExpense('50', '75');
  });
});