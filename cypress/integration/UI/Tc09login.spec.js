describe('verify the login functionality',()=>{

    it('verify the login functionality with valid cardentials',()=>{
        cy.visit('https://livesql.oracle.com/apex/f?p=590:1000')
        cy.get('a[class="t-Button t-Button--icon t-Button--header t-Button--navBar"]').last().click()
        cy.get('input[id="sso_username"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="ssopassword"]').type('Sonu@3232')
        cy.get('input[id="signin_button"]').click()
        cy.get('a[class="t-Header-logo-link"]').should('be.visible')
        cy.title().should('eq','Oracle Live SQL')
    })

    it('verify the login functionality with invalid cardentials',()=>{
        cy.visit('https://livesql.oracle.com/apex/f?p=590:1000')
        cy.get('a[class="t-Button t-Button--icon t-Button--header t-Button--navBar"]').last().click()
        cy.get('input[id="sso_username"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="ssopassword"]').type('Sonu@323232')
        cy.get('input[id="signin_button"]').click()
        cy.get('div[class="cb41error"]').last().should('be.visible')
        cy.title().should('eq',' Oracle Login - Single Sign On')
    })
})