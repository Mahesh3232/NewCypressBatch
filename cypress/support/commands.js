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
// Cypress.Commands.add('login', (email, password) => { ... })
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'

Cypress.Commands.add('Gorest', (method, url,body) => { 


    cy.request({
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer 554b97a07b598b012f137a5804ae7617dc67fe4da3974abae2274a75655d70a7'
        },
        body:body

        
    })

})

Cypress.Commands.add('getAndSetToken', (email,password) => {
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login',
        method: 'POST',
        body: {
            user: {
                email,
                password
            }
        }
    }).then(response => {
        const token = response.body.user.token;
        localStorage.setItem('jwt', token);
    });
 });

