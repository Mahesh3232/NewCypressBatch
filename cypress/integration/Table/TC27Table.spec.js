describe('Verify the CricInfo scorecard table', () => {
    it('Validate the CricInfo Scorecard', () => {
        let sum = 0
        cy.visit('https://www.espncricinfo.com/series/india-in-south-africa-2021-22-1277060/south-africa-vs-india-1st-odi-1277082/full-scorecard')
        cy.get('.ci-scorecard-table').first().find('tbody')
            .find('td[class="ds-w-0 ds-whitespace-nowrap ds-min-w-max ds-text-right"]>strong').each(function (el, index, arr) {
                cy.log(el.text())
               // sum = sum + Number(el.text())

            }).then(() => {
               // expect(sum).to.eq(296)
            })
    })
})