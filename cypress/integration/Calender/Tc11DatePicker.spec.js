describe('Verify the date picker functionality', () => {

    it('Verify the datepicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 400)
        cy.log(date)
        let year = date.getFullYear()
        cy.log(year)
        let month = date.toLocaleString('default', { month: "long" })
        cy.log(month)
        let dat = date.getDate()//todays date

        //cy.log(da)
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function SelectMonthYear() {

            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {

                    if (!el.text().includes(month)) {
                        cy.get('.next').first().click()
                        SelectMonthYear()
                    }
                })
            })
        } function SelectDate() {
            cy.get('.day').contains(dat).click()
        }
        SelectMonthYear()
        SelectDate()
    })
})



