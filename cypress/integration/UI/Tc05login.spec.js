
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
describe('Verify the login functionality',()=>{
    it('Verify login functionality with valid cardentials',()=>{
        cy.visit('https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=28efaf1fda084e12bf48cf4114c7225d&nonce=1bba86461c914c48b391f14ce8bbf6c9')
        cy.get('input[id="username"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="password"]').type('Sonu@3232')
        cy.get('input[id="tp-sign-in"]').click()
        cy.wait(20000)
        cy.get('svg[class="logo"]').should('be.visible')
    })

    it('Verify login functionality with invalid cardentials',()=>{
        cy.visit('https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=28efaf1fda084e12bf48cf4114c7225d&nonce=1bba86461c914c48b391f14ce8bbf6c9')
        cy.get('input[id="username"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="password"]').type('Sonu@323243')
        cy.get('input[id="tp-sign-in"]').click()
        // cy.wait(20000)
        cy.get('span[id="tp-message-error"]').should('be.visible')
    })
})