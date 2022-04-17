describe('Count the serach results', () => {
    it.only('count the products', () => {
        let count = 0
        cy.visit('https://www.amazon.in/')
        cy.get('input[id="twotabsearchtextbox"]').type('hello')
        cy.wait(5000)
        cy.get('div[class="autocomplete-results-container"]>div >div>div').find('span:first').each((el) => {
            if (el.text().includes(' kitty bag')) {
                cy.wrap(el).click()
            }
        }).then(() => {
            cy.get('div[class="a-section aok-relative s-image-tall-aspect"]').each(() => {
                count = count + 1
            }).then(() => {
                cy.log(`count of the products is ${count}`)
            })
        })
    })
})