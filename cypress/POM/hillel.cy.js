describe ('Header and Footer elements', () => {
    beforeEach(() => {
        cy.visit ('https://guest:welcome2qauto@qauto.forstudy.space');
    });

 //Elements in Header
    
it ('Should find "Home" in header', () => {
    cy.get('.-active').should('contain', 'Home').should('be.visible');
});
it ('Should find "About" in header', () => {
    cy.get('[appscrollto="aboutSection"]').should('contain', 'About').should('be.visible');
});
it ('Should find "Contacts" in header', () => {
    cy.get('[appscrollto="contactsSection"]').should('contain', 'Contacts').should('be.visible');
});    
it ('Should find "Guest Log In"', () => {
    cy.get('.header_right > .header-link').should('contain', 'Guest log in').should('be.visible').and('not.be.disabled').click();
}); 
it ('Should find "Sign In"', () => {
    cy.get('.header_right > .btn').should('be.visible').and('not.be.disabled').click();
}); 
it ('Should find "Sign Up"', () => {
    cy.get('.hero-descriptor_btn').should('be.visible').and('not.be.disabled').click();
}); 

//Elements in Footer

it ('Should find facebook button', () => {
 cy.get('[href="https://www.facebook.com/Hillel.IT.School"] > .socials_icon').should('be.visible').and('not.be.disabled').click();
});
it ('Should find telegram button', () => {
    cy.get('[href="https://t.me/ithillel_kyiv"] > .socials_icon').should('be.visible').and('not.be.disabled').click();
   });
it ('Should find YouTube button', () => {
    cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"] > .socials_icon').should('be.visible').and('not.be.disabled').click();
   });  
it ('Should find Instagramm button', () => {
    cy.get('[href="https://www.instagram.com/hillel_itschool/"] > .socials_icon').should('be.visible').and('not.be.disabled').click();
   });     
it ('Should find LinkedIn button', () => {
    cy.get('[href="https://www.linkedin.com/school/ithillel/"] > .socials_icon').should('be.visible').and('not.be.disabled').click();
   });    
   
it ('Should go to the school site', () => {
    cy.get('.display-4').should('be.visible').and('not.be.disabled').click();
});   
it ('Should go to the developer e-mail', () => {
    cy.get('.h4', {timeout: 10000}).should('be.visible').and('not.be.disabled');
}); 
})

