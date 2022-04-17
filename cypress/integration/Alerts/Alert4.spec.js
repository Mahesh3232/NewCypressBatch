describe('To learn automation for js alerts', () => {

    beforeEach(function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    })
    it('Normal Js alert', () => {
        cy.contains(/JS Alert/i).click()
        cy.on('window:alert', (text) => {
            expect(text).to.eql('I am a JS Alert')
        })
        cy.get('p[id=result]').should('be.visible')

    })
    it('Normal Js alert using window()', () => {
        cy.window().then((el) => {
            cy.stub(el, 'alert').as('alert')
        })
        cy.contains(/JS Alert/i).click()
        cy.get('@alert').should('have.been.calledOnceWith', 'I am a JS Alert')
    })
    it('Confirm JS alert', () => {
        cy.contains(/JS Confirm/i).click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('contain', 'You clicked: Ok')
    })
    it('Confirm JS alert', () => {
        cy.contains(/JS Confirm/i).click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain', 'You clicked: Cancel')
    })
    it('Confirm JS alert using window()', () => {
        cy.window().then((el) => {
            cy.stub(el, 'confirm').as('confirm')
            // cy.contains('Click for JS Confirm').click()
        })
        cy.contains(/JS Confirm/i).click()
        cy.get('@confirm').should('have.been.calledOnceWith', 'I am a JS Confirm')

    })
    it('Click for JS Prompt', () => {
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns('Priyanka Dani')
        })
        cy.contains(/JS Prompt/i).click()
        //cy.get('#result').should('be.visible')
        cy.get('#result').should('contain', 'Priyanka Dani')
    })
    it.only('Click for JS Prompt', () => {
        cy.window().then((el) => {
            cy.stub(el, 'prompt').callsFake(() => null);

        })
        cy.contains(/JS Prompt/).click()
        //cy.get('#result').should('be.visible')
        //cy.get('#result').should('contain', 'You entered:')
    })
})