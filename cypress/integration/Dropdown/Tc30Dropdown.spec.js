describe('Check the functionality of dropdown', () => {
    before(function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    })
    it('validate the functionality the spicejet currency dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('INR').should('have.value', 'INR')
    })

    it.only('validate the functionality of the spicejet from dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('div[class="right text-lt "]').first().find('select[id="ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1"]')
            .select('ATQ', { force: true }).should('have.value', 'ATQ')
    })

    it('validate the functionality the spicejet currency dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('BDT').should('have.value', 'BDT')
    })

    it('validate the functionality the spicejet currency dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('CAD').should('have.value', 'CAD')
    })

    it('validate the functionality the spicejet currency dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('EUR').should('have.value', 'EUR')
    })

    it('validate the functionality the spicejet currency dropdown', () => {
        cy.visit('https://book.spicejet.com/')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('MYR').should('have.value', 'MYR')
    })





    



})

