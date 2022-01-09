describe('Verify the login functionality',()=>{
    it('Verify the login functionality with valid cardentials',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('a[class="_1_3w1N"]').click()
        cy.get('input[class="_2IX_2- VJZDxU"]').type('8208232100')
        cy.get('input[class="_2IX_2- _3mctLh VJZDxU"]').type('8208232100')
        cy.get('button[class="_2KpZ6l _2HKlqd _3AWRsL"]').click()
        cy.get('div[class="KK-o3G"]').should('be.visible')
    })

    it('Verify the login functionality with invalid cardentials',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('a[class="_1_3w1N"]').click()
        cy.get('input[class="_2IX_2- VJZDxU"]').type('8208232100')
        cy.get('input[class="_2IX_2- _3mctLh VJZDxU"]').type('8208267475')
        cy.get('button[class="_2KpZ6l _2HKlqd _3AWRsL"]').click()
        cy.get('span[class="_2YULOR"]').should('be.visible')
    })
})