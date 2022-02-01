describe('Verify the dropdoen functionality', () => {
    it('Verify  the dropdown functionality', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('sql').should('have.value', 'sql')
        cy.wait(3000)
        cy.get('#dropdowm-menu-1').select('java').should('have.value', 'java')
        cy.wait(3000)
        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
        cy.wait(3000)
        cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python')
    })

    it('Verify the dropdown functionality from multiple list', () => {
        let Values = ["sql", "junit", "javascript"]
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(Values[index]).should('have.value', Values[index])
        })
    })

    it('Verify whwther the dropdown element id enabled or disabled', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.enabled')
    })

    it('Validate the url of the page', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.url().should('includes', 'Dropdown')
    })

    it('Validate the title of the page', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('includes', 'WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    })

})