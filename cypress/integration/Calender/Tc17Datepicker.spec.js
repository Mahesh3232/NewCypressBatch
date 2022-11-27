// describe('Verify the functionality of Datepicker', () => {

//     it('Validate the functionality of DatePicker', () => {
//         let date = new Date()
//         date.setDate(date.getDate() + 100)
//         let Year = date.getFullYear()
//         let month = date.toLocaleString('default', { month: "long" })
//         let da = date.getDate()
//         cy.log(Year)
//         cy.log(month)
//         cy.log(da)

//         cy.visit('http://demo.automationtesting.in/Datepicker.html')
//         cy.get('#datepicker2').last().click()
//         function SelectYearMonth() {

//             cy.get('select[title="Change the year"]').children()
//             .each((el) => {
//                 cy.log(el.text())
//                 if (!el.text().includes(Year)) {
//                     cy.get('.datepick-cmd-next ').click()
//                 }
//             })
//             cy.get('select[title="Change the month"]').select(month)
//             // //.children().each((el) => {

//             //     if (el.text().includes(month)) {
//             //         cy.log(el.text())
//             //         //cy.wrap(el).click({force: true})
//             //         cy.select(el)
//             //     }
//             // })
//         }
//         function SelectDate() {
//             cy.get('tbody').find('tr').find('td').each((el) => {
//                 // cy.log(el.text().includes(da))
//                 // cy.log(el.text())
//                 if (el.text().includes(da)) {
//                     cy.wrap(el).click()
//                     //cy.log('hii')
//                 }
//             })

//         }
//         SelectYearMonth()
//         SelectDate()
//     })
// })

describe('validate calendor in cypress', function () {
    it('verify year month date in cypress', function () {
        let date2 = new Date()
        date2.setDate(date2.getDate() + 300)
        let Year = date2.getFullYear()
        let Month = date2.toLocaleString('default', { month: 'long' })
        let Daydate = date2.getDate()
        cy.log(Year)
        cy.log(Month)
        cy.log(Daydate)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function selectmonthandyear() {
            cy.get('.datepicker-switch').first().then(function (el) {
                //cy.log($el.text())
                if (!$el.text().includes(Year)) {
                    cy.get('.next').first().click({force:true})
                    selectmonthandyear()
                }
            })
            cy.get('.datepicker-switch').first().then(function ($el) {
                if (!$el.text().includes(Month)) {
                    cy.get('.next').first().click({force:true})
                    selectmonthandyear()
                }
            })
        }
        selectmonthandyear()

        function selectdate() {
            cy.get('td[class="day"]').contains(3).click()
        }
        selectdate()
    })
})

