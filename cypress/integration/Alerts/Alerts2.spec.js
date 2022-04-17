describe('Verify the alerts functionality', () => {
    beforeEach(function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Verify the alert on rahul shetty page', () => {
        cy.get('input[id="alertbtn"]').click()
        cy.on('window:alert', (text) => {
            //cy.log(text)
            expect(text).to.eq('Hello , share this practice page and share your knowledge')
        })
    })

    it.only('verify the confirm alert on rahulshetty page', () => {
        cy.get('input[id="confirmbtn"]').click()
        cy.on('window:confirm',(text)=>{
            //cy.log(text)
            expect(text).to.eq('Hello , Are you sure you want to confirm?')
            return true
        })
        
    })
})