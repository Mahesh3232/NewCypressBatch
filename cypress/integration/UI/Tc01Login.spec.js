describe('Verify the login functionality',()=>{
    it('Login with valid cardentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })

    it('Login with invalid cardensials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin4563')
        cy.get('input[id="btnLogin"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })
})