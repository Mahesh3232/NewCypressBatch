describe('Validate the functionality of the Checkbox',()=>{
    it('Verify the checkbox functionality',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[value="checkbox1"]').check().should('be.checked')
        cy.get('input[value="checkbox2"]').check().should('be.checked')
        cy.get('input[value="checkbox3"]').check().should('be.checked')
        cy.get('input[value="checkbox4"]').check().should('be.checked')
        cy.get('input[value="checkbox-disabled"]').should('not.be.checked')
    })

    it.only('Check the checkbox using passing the value to check',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[type="checkbox"]').check('checkbox1').should('be.checked')
        cy.get('input[type="checkbox"]').check('checkbox2').should('be.checked')
        cy.get('input[type="checkbox"]').check('checkbox3').should('be.checked')
        cy.get('input[type="checkbox"]').check('checkbox4').should('be.checked')
    })
})