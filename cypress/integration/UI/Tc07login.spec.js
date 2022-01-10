

describe('Verify the login Functionality',()=>{
    it('Verify the login functionality with valid cardentials',()=>{
        cy.visit('https://www.ilovepdf.com/login')
        cy.get('input[id="loginEmail"]').type('maheshaher.3232@gmail.com')
        cy.get('input[id="inputPasswordAuth"]').type('Sonu@3232')
        cy.get('button[id="loginBtn"]').click()
        cy.get('img[alt="iLovePDF"]').should('be.visible')
        cy.title().should('eq',"iLovePDF | Online PDF tools for PDF lovers")
    })

    it('Verify the login functionality with invalid cardentials',()=>{
        cy.visit('https://www.ilovepdf.com/login')
        cy.get('input[id="loginEmail"]').type('maheshaher.3232@gmail.com')
        cy.get('input[id="inputPasswordAuth"]').type('Sonu@323234')
        cy.get('button[id="loginBtn"]').click()
        cy.get('div[class="help-block"]').last().should('be.visible')
        cy.title().should('eq',"iLovePDF, login to your account")
    })
})