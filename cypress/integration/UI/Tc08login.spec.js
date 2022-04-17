
Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
describe('verify the login functionality',()=>{
    it('verify the login functionality with valid cardentials',()=>{
        cy.visit('https://www.bewakoof.com/login')
        cy.get('button[id="web_email_login"]').click()
        cy.wait(300)
        cy.get('input[id="email_input"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="mob_password"]').type('Sonu@3232')
        cy.get('button[class="loginSubmit false"]').click()
        cy.get('div[class="col-xs-2 mainHeaderCols bewakoofLogoDiv"]').should('be.visible')
        cy.title('eq','Online Shopping for Men, Women Clothing & Accessories at Bewakoof')

    })

    it('verify the login functionality with valid cardentials',()=>{
        cy.visit('https://www.bewakoof.com/login')
        cy.get('button[id="web_email_login"]').click()
        cy.wait(300)
        cy.get('input[id="email_input"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[id="mob_password"]').type('Sonu@323232')
        cy.get('button[class="loginSubmit false"]').click()
        cy.get('span[id="mob_toast_error"]').should('be.visible')
        cy.title('eq','Online Shopping for Men, Women Clothing & Accessories at Bewakoof')

    })
})