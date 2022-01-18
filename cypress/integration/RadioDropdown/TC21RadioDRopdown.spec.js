


describe('Verify the functionality of Radiobuttons and dropdownlist', () => {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('Verify the functionality of radio buttons using check(),unchecked()', () => {
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })

    it('Verify the functionality of radio buttons using click()', () => {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-3"]').click().should('not.be.checked')
    })

    it('Verify the functionality of radio buttons using multiple select', () => {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
        cy.wait(4000)
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')
    })

    it('Verify the functionality of the radio button Using Click()', () => {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('be.not.checked')
        cy.wait(2000)
        cy.get('input[value="purple"]').click().should('be.checked')
        cy.get('input[value="orange"]').should('be.not.checked')

    })

    it('Verify the functionality of the radio button Using check()', () => {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('be.not.checked')
        cy.wait(4000)
        cy.get('input[value="yellow"]').check().should('be.checked')
        cy.get('input[value="orange"]').should('be.not.checked')
    })

})