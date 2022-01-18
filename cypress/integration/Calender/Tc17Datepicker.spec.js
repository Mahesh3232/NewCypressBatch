

describe('Verify the functionality of Datepicker', () => {

    it('Validate the functionality of DatePicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 100)
        let Year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        let da = date.getDate()
        cy.log(Year)
        cy.log(month)
        cy.log(da)

        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker2').last().click()
        function SelectYearMonth() {

            cy.get('select[title="Change the year"]').children().each((el) => {
                cy.log(el.text())
                if (el.text().includes(Year)) {
                    (el).click()
                }
            })
            cy.get('select[title="Change the month"]').select(month)
            // //.children().each((el) => {

            //     if (el.text().includes(month)) {
            //         cy.log(el.text())
            //         //cy.wrap(el).click({force: true})
            //         cy.select(el)
            //     }
            // })
        }
        function SelectDate() {
            cy.get('tbody').find('tr').find('td').each((el) => {
                // cy.log(el.text().includes(da))
                // cy.log(el.text())
                if (el.text().includes(da)) {
                    cy.wrap(el).click()
                    //cy.log('hii')
                }
            })

        }
        SelectYearMonth()
        SelectDate()
    })
})