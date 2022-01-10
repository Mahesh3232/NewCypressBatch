describe('Verify the login functionality',()=>{
    it('Verify the login functionality with valid cardentials',()=>{
        cy.visit('http://testphp.vulnweb.com/login.php')
        cy.get('input[name="uname"]').type('test')
        cy.get('input[name="pass"]').type('test')
        cy.get('input[value="login"]').click()
        cy.get('h2[id="pageName"]').should('be.visible')
        cy.title().should('eq','user info')
    })

    it('Verify the login functionality with invalid cardentials',()=>{
        cy.visit('http://testphp.vulnweb.com/login.php')
        cy.get('input[name="uname"]').type('test')
        cy.get('input[name="pass"]').type('test123')
        cy.get('input[value="login"]').click()
        cy.get('img[alt="Acunetix website security"]').should('be.visible')
        cy.title().should('eq','login page')
    })
})