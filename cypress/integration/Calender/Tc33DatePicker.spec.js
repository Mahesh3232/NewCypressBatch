describe('Validate DatePicker functionality', () => {

    it('Verify the DatePicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 400)
        let month = date.toLocaleString('default', { month: "long" })
        cy.log(month)
        let year = date.getFullYear()
        cy.log(year)
        let futureDate = date.getDate()
        cy.log(futureDate)
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('div[id="datepicker"]').click()
        function SelectMonthYear() {
            cy.get('th[class="datepicker-switch"]').first().then((ele) => {
                if (!ele.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthYear()
                }
            }).then(() => {
                cy.get('th[class="datepicker-switch"]').first().then((ele) => {
                    if (!ele.text().includes(month)) {
                        cy.get('.next').first().click()
                        SelectMonthYear()
                    }
                })
            })
        }

        function SelectDate() {
            cy.get('.day').contains(futureDate).click()
           
        }
        SelectMonthYear()
        SelectDate()
    })
})


