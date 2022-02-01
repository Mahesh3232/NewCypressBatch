

describe('Verify the functionality of checkbox and Radio button',()=>{
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Validate the Function of Checkbox using click()',()=>{
        cy.get('#checkBoxOption1').click().should('be.checked')
        cy.get('#checkBoxOption2').click().should('be.checked')
        cy.get('#checkBoxOption3').click().should('be.checked')
        cy.wait(3000)
        cy.get('#checkBoxOption1').click().should('not.be.checked')
        cy.get('#checkBoxOption2').click().should('not.be.checked')
        cy.get('#checkBoxOption3').click().should('not.be.checked')
    })

    it('Validate the Function of Checkbox using check()',()=>{
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
        cy.wait(3000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
    })

    it.only('Validate the Function of Radio button using click()',()=>{
        cy.get('input[value="radio1"]').click().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
        cy.get('input[value="radio2"]').click().should('be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
        cy.get('input[value="radio1"]').should('not.be.checked')
        cy.get('input[value="radio3"]').click().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio1"]').should('not.be.checked')
    })

    it.only('Validate the Function of Radio button using check()',()=>{
        cy.get('input[value="radio1"]').check().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
        cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
        cy.get('input[value="radio1"]').should('not.be.checked')
        cy.get('input[value="radio3"]').check().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio1"]').should('not.be.checked')
    })
    
})