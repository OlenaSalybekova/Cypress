Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false;
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
    return originalFn(element, text, options);
  });

  Cypress.Commands.add('loginByApi', () => {
   return cy.request({
      method: 'POST',
      url: '/api/auth/signin',
      body: {
        email: Cypress.env('userEmail'),
        password: Cypress.env('userPassword')
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      const token = res.body.accessToken;
      Cypress.env().accessToken = token;
    });
  });