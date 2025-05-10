
class GaragePage {
    addCar(brand, model, mileage) {
      cy.get('.panel-page_heading > .btn').click();
      cy.get('#addCarBrand').select(brand);
      cy.get('#addCarModel').select(model);
      cy.get('#addCarMileage').type(mileage);
      cy.get('.modal-footer > .btn-primary').click();
    }
  }
  export const garagePage = new GaragePage();

