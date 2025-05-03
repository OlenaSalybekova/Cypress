describe ('Sign Up and Sign In', () => {
    beforeEach(() => {
        cy.visit ('https://guest:welcome2qauto@qauto.forstudy.space');
        cy.get('.hero-descriptor_btn').click();
    });
  // Name cases:
    it('Should show "Name required" when field is empty', () => {
        cy.get('#signupName').focus().blur();
        cy.contains('Name required').should('be.visible');
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
      });
     
    it('Should show "Name is invalid" for symbols', () => {
        cy.get('#signupName').type('###').blur();
        cy.contains('Name is invalid').should('be.visible');
      });
    
    it('Should show "Name has to be from 2 to 20 characters long" for short/long name', () => {
        cy.get('#signupName').type('A').blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('#signupName').clear().type('Everyveryverylongnametest').blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
      });

    it ('Should find Name field and enter name', () => {
        cy.get('#signupName').type('Ted');
        cy.get('#signupName').should('have.value', 'Ted');
    });

// Last Name cases:
    it ('Should find Last Name field and enter', () => {
        cy.get('#signupLastName').type('Proffi');
    });
    
    it('Should show "Last name required" when field is empty', () => {
        cy.get('#signupLastName').focus().blur();
        cy.contains('Last name required').should('be.visible');
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
      });
     
    it('Should show "Last name is invalid" for symbols', () => {
        cy.get('#signupLastName').type('###').blur();
        cy.contains('Last name is invalid').should('be.visible');
      });
    
    it('Should show "Last name has to be from 2 to 20 characters long" for short/long name', () => {
        cy.get('#signupLastName').type('A').focus().blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('#signupLastName').clear().type('veryveryverylongnametest').blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
      });

// Email cases      

it('Should show "E-mail required" when field is empty', () => {
    cy.get('#signupEmail').focus().blur();
    cy.contains('Email required').should('be.visible');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
  });

it ('Should find E-mail field and enter', () => {
    cy.get('#signupEmail').type('elena95@gmail.com');
});

it('Should show "Email is incorrect" when e-mail format incorrect', () => {
    cy.get('#signupEmail').type('nekd@ss').blur();
    cy.contains('Email is incorrect').should('be.visible');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
  });


// Password cases:

it('Should show "Password required" when field is empty', () => {
    cy.get('#signupPassword').focus().blur();
    cy.contains('Password required').should('be.visible');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
  });

it('Should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"', () => {
    cy.get('#signupPassword').type('A11a').blur();
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    cy.get('#signupPassword').clear().type('veryveryverylongn123AAQ').blur();
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
  });

it ('Should find Password field and enter', () => {
    cy.get('#signupPassword').type('Color123');
    cy.get('#signupPassword').should('have.value', 'Color123');
});

//Re-enter password:

it ('Should find Re-enter Password field and enter', () => {
    cy.get('#signupRepeatPassword').type('Color123', {sensitive: true});
    cy.get('#signupRepeatPassword').should('have.value', 'Color123');
});

it ('Should find Re-enter Password field and enter wrong', () => {
    cy.get('#signupRepeatPassword').type('Color12d2ee', {sensitive: true}).blur();
    cy.get('#signupRepeatPassword').should('have.value', 'Color12d2ee');
    cy.contains('Passwords do not match').should('be.visible');
});

// Register:

it ('Should find Register button and tap', () => {
    cy.get('.modal-footer > .btn').should('be.disabled');
});

//Final test:

it ('Should fill registration', () => {
    cy.get('#signupName').type('Ted');
    cy.get('#signupLastName').type('Proffi');
    cy.get('#signupEmail').type('elena95@gmail.com');
    cy.get('#signupPassword').type('Color123', {sensitive: true});
    cy.get('#signupRepeatPassword').type('Color123', {sensitive: true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.close > span').click();
});

//Login:
it ('Should log in my user', () => {
    cy.get('.close > span').click();
    cy.get('.header_right > .btn').click();
    cy.get('#signinEmail').type('elena95@gmail.com');
    cy.get('#signinPassword').type('Color123', {sensitive: true});
    cy.get('.modal-footer > .btn-primary').click();
});
})    