class ExpensesPage {
    addFuelExpense(litres, price) {
      cy.get('.car_add-expense').click();
      cy.get('#addExpenseLiters').type(litres);
      cy.get('#addExpenseTotalCost').type(price);
      cy.get('.modal-footer > .btn-primary').click();
    }
  }
  export const expensesPage = new ExpensesPage();