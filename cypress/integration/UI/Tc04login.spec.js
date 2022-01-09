

describe('Verify the login functionality', () => {
    it('Verify the login functionality with valid cardentials', () => {
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('input[id="ctl00_CPHContainer_txtUserLogin"]').type('Mahesh3232')
        cy.get('input[id="ctl00_CPHContainer_txtPassword"]').type('Sonu@3232')
        cy.get('input[id="ctl00_CPHContainer_btnLoginn"]').click()
        cy.get('div[class="logo"]').should('be.visible')
        cy.title().should('eq','Student Dashboard | Test Maker - TestYou')
    })

    it('Verify the login functionality with invalid cardentials', () => {
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('input[id="ctl00_CPHContainer_txtUserLogin"]').type('Mahesh3232')
        cy.get('input[id="ctl00_CPHContainer_txtPassword"]').type('Sonu@323243')
        cy.get('input[id="ctl00_CPHContainer_btnLoginn"]').click()
        cy.get('span[class="lblboxerror"]').should('be.visible')
        cy.title().should('eq','Login Page | Test Creator - TestYou')
    })
})