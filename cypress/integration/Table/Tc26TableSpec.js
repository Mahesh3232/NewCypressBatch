describe('Validates the tables', () => {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('validate the First Table', () => {
        let sum = 0
        cy.get('#t01').find('tbody').children().each(function (el, index) {
            cy.log(el.text())
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('validate the second table', () => {
        let sum2 = 0
        cy.get('#t02').find('tbody').find('tr').each(function (el, index) {
            cy.log(el.text())
            if (index != 0) {
                sum2 = sum2 + Number(el.children().last().text())
            }
        }).then(() => {
            cy.log(sum2)
            expect(sum2).to.eq(163)
        })
    })

   
})