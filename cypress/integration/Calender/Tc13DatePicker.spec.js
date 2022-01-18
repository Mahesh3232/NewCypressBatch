

describe('Verify the Date Picker Functionality', () => {
    it('Verify the date picker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 50)
        let Year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        let d = date.getDate()
        cy.log(Year)
        cy.log(month)
        cy.log(d)
        cy.visit('https://paytm.com/bus-tickets')
        cy.get('._2k43').eq(0).click()
        function SelectYearMonth() {
            cy.get('.react-datepicker__current-month').last().then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                    //SelectYearMonth()
                }
            })
            cy.get('.react-datepicker__current-month').last().then((el) => {
                cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                    SelectYearMonth()
                }
            })
            
        }
        SelectYearMonth()
        function SelectDate() {
            cy.get('.react-datepicker').last().contains(d).click()

        }
        SelectDate()
    })
})