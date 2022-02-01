

describe('Verify the Login functionality', () => {

    it.only('verify the login functionality with valid cardentials', () => {
        cy.visit('https://app.recast.studio/auth/login')
        cy.get('input[id="login-form_email"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="login-form_password"]').type('Sonu@3232')
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-block auth-form-button"]').click()
        //cy.wait(5000)
        //cy.get('span[class="ant-typography"]').first().should('be.visible')
        //cy.get('span[class="anticon anticon-dashboard"]').should('be.visible')
        cy.title().should('eq',"Dashboard - Recast Studio")
    })

    it('verify the login functionality with invalid cardentials', () => {
        cy.visit('https://app.recast.studio/auth/login')
        cy.get('input[id="login-form_email"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="login-form_password"]').type('Sonu@323232')
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-block auth-form-button"]').click()
        cy.get('li[class="ant-menu-item ant-menu-item-only-child"]').should('be.visible')
        cy.get('li[class="ant-menu-item ant-menu-item-only-child"]').should('be.visible')
        cy.title().should('eq',"Login - Recast Studio")
    })
})