describe('Assignment', () => {
    Cypress.on('uncaught:exception', (err, Runnable) => {
        return false
    })
    it('Order the Product', () => {
        cy.visit('https://newageproducts.com/?z=19230&_ga=2.167720826.551042015.1645801439-571282171.1645801439')


        cy.get('img[class="img-search-icon"]').first().click({ force: true })
        cy.get('input[class="search-field search__inputs input"]').eq(1).type('garage cabinet{enter}')
        cy.get('a[href="https://shopnewage.com/collections/search-results/products/bold-series-extra-wide-7-piece-cabinet-set-53239"]')
            .last().click({ force: true }).then(() => {
                cy.get('span[class="bv-rating-stars-on bv-rating-stars bv-width-from-rating-stats-94"]').click({ force: true })
                cy.get('a[id="see_more_link"]').click({ force: true })
                cy.get('div[class="swatch_file swatch_type"]').eq(1).click({ force: true })
                cy.get('div[class="swatch_file swatch_type"]').eq(5).click({ force: true })
                cy.get('div[class="klaviyo_modal"]', { timeout: 10000 }).should('be.visible')
                cy.get('a[class="klaviyo_close_modal klaviyo_header_close"]').eq(1).click()
                cy.get('input[name="quantity"]').first().clear().type('4', { force: true })
                cy.get('.bookcunsult_close_modal', { timeout: 10000 }).click()
                cy.get('button[class="column small-12 add-to-cart_main ff-pr"]').click()
                cy.get('a[href="/cart"]').first().click({ force: true }).then(() => {
                    cy.wait(8000)
                    cy.get('a[class="klaviyo_close_modal klaviyo_header_close"]', { timeout: 10000 }).eq(1).click()
                    cy.get('#postalCode').clear().type('19230')
                })
            })

    })
})