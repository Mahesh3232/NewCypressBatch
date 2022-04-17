describe('Verify the login functionality', () => {
    it.only('check login function for zoomin', function () {
        cy.visit('https://www.zoomin.com/sign-up?%2F%27')
        cy.get('input[name="name"]').type('Rashmi')
        cy.get('input[name="email"]').type('dixrashmi@yahoo.com')
        cy.get('input[class="number-input"]').type('4242634002')
        cy.get('input[name="password"]').type('rashmi000')
        cy.get('span[class="MuiButton-label"]').click()
        cy.get('a[href="/sign-up?%2F%27"]').should('be.visible')
    })
})


