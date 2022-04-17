describe('Verify the functionality of Alerts', () => {

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false
    //   })

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com')
        cy.get('a[href="Popup-Alerts/index.html"]').invoke('removeAttr', 'target').click()
    })

    it('Verify the Basic Alerts', () => {
        cy.get('span[id="button1"]').click()
        cy.on('window:alert', (text) => {
            //cy.log(text)
            expect(text).to.eq('I am an alert box!')
        })
    })

    it('Verify the Javascript Confirm Alert for true/ok ', () => {
        cy.get('span[id="button4"]').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eq('Press a button!')
            return true
        })
        cy.get('p[id="confirm-alert-text"]').should('have.text', 'You pressed OK!')
        cy.get('p[id="confirm-alert-text"]').should('be.visible')
    })

    it('Verify the Javascript Confirm Alert for false/cancle ', () => {
        cy.get('span[id="button4"]').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eq('Press a button!')
            return false
        })
        cy.get('p[id="confirm-alert-text"]').should('have.text', 'You pressed Cancel!')
        cy.get('p[id="confirm-alert-text"]').should('be.visible')
    })

    it('Verify the model popup', () => {
        cy.get('span[id="button2"]').click()
        cy.get('h4[class="modal-title"]').should('be.visible')
        cy.get('h4[class="modal-title"]').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.get('button[class="btn btn-default"]').click()
        cy.get('h4[class="modal-title"]').should('not.be.visible')
    })

    it('Verify the ajax loader ', () => {
        cy.get('span[id="button3"]').click()
        cy.wait(10000)
        cy.get('span[id="button1"]').click()
        cy.get('button[class="close"]').should('be.visible')
        cy.get('h4[class="modal-title"]').should('have.text', 'Well Done For Waiting....!!!')
        cy.get('button[class="btn btn-default"]').click()
        cy.get('button[class="close"]').should('not.be.visible')
    })
}) 