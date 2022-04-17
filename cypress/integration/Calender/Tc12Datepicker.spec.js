describe('Verify the date picker functionality', () => {

    it('Verify the DatePicker functionality', () => {
        let date = new Date()
        date.setDate(date.getDate() + 100)
        let Year = date.getFullYear().toString().slice(2)
        let Month = date.toLocaleString('default', { month: "long" })
        let da = date.getDate()
        cy.log(Year)
        cy.log(Month)
        cy.log(da)

        cy.visit('https://paytm.com/flights')
        cy.get('#datePickerOnward').click()
        function SelectYearMonth() {
            cy.get('._1T_Q').last().then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('#moveToNext').click({ force: true })
                    SelectYearMonth()
                }
            })
            cy.get('._1T_Q').last().then((el) => {
                if (!el.text().includes(Month)) {
                    cy.get('#moveToNext').click({ force: true })
                    SelectYearMonth()
                }
            })
        } function SelectDate() {
            cy.get('tbody').last().find('._2JMZ').each((el) => {
                //cy.log(el.text())
                if (el.text().includes(da)) {
                    (el).click()

                }
            })
        }
        SelectYearMonth()
        SelectDate()
    })
})