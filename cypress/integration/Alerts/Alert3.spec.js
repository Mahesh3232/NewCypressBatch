




describe('Verify the Alert functionality',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    // beforeEach(function(){
    //     cy.visit('http://demo.automationtesting.in/Alerts.html')
    // })
    it('Verify the Basic alert',()=>{
        cy.get('div[id="OKTab"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq('I am an alert box!')
        })
    })

    it('Verify the Alert with okey and cancle',()=>{
        cy.get('a[href="#CancelTab"]').click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.on('window:confirm',(text)=>{
            //cy.log(text)
            expect(text).to.eq('Press a Button !')
            return true
        })
        cy.get('p[id="demo"]').should('have.text','You pressed Ok')
    })

    it('Verify the alert input text box',()=>{
        cy.get('a[href="#Textbox"]').click()
        cy.get('button[class="btn btn-info"]').click()
        cy.on('prompt',(text)=>{
            cy.log(text)
            return true
        })
    })

    it.only('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((ele) => {
            cy.stub(ele, 'prompt').returns('This is a test text')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').contains('You entered: This is a test text')
    })
})