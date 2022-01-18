

describe('Verify the functionality of Datepicker', () => {
    it('Validate the date picker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 100)
        let month = date.toLocaleString('default', { month: "long" })
        let Year = date.getFullYear()
        let da = date.getDate()
        cy.log(month)
        cy.log(Year)
        cy.log(da)

        cy.visit('https://paytm.com/train-tickets')
        cy.get('._80Si').click()
        function SelectYearMonth() {
            cy.get('div[class="react-datepicker__header"]').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(Year)) {
                    cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                    SelectYearMonth()
                }
            })
            cy.get('div[class="react-datepicker__header"]').then((el) => {
                if (!el.text().includes(month)) {
                    cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                    SelectYearMonth()
                }
            })


        }
        function SelectDate() {
            cy.get('.react-datepicker__week').find('.react-datepicker__day').each((el) => {
                cy.log(el.text())
                if (el.text().includes(da)) {
                    (el).click()
                    //SelectDate()
                }
            })
        }
        SelectYearMonth()
        SelectDate()
    })
})