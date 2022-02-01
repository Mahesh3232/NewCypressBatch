

describe("verify the functunality of calender", () => {
    it("verify the functionality of calender", () => {
        cy.visit("https://webdriveruniversity.com/Datepicker/index.html")
        cy.get("#datepicker").click()
        let date = new Date()
        date.setDate(date.getDate() + 400)
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let textmonth = date.toLocaleString('default', { month: "long" })
        function getTheMnth() {
            cy.get(".datepicker-switch").first().then((el) => {
                cy.log(year)
                cy.log(textmonth)
                cy.log(day)
                cy.log(el.text(),el.text().length)
                if (!el.text().includes(year)) {
                    cy.get(".next").first().click()
                    getTheMnth()
                }
            }).then(() => {
                cy.get(".datepicker-switch").first().then((el) => {
                    if (!el.text().includes(textmonth)) {
                        cy.get(".next").first().click()
                        getTheMnth()
                    }
                })
            })
        }
        function getTheDate() {
            cy.get(".day").contains(day).click()
        }
        getTheMnth()
        getTheDate()
    })
})



// describe('automate calendra', () => {

//     it('validate the datepicker', () => {

//         // let d = new Date();
//         // cy.log(d.getDate())
//         // cy.log(d.getFullYear())
//         // cy.log(d.toLocaleString('default', { month: 'long' }))
//         // cy.log(d.getDate())

//         // let d2 = new Date();
//         // d2.setDate(d2.getDate()+400)
//         // cy.log(d2.getFullYear())
//         // cy.log(d2.getDate())
//         // cy.log(d2.toLocaleString('default',{ month:'long'}))
//         cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
//         let d2 = new Date();
//         d2.setDate(d2.getDate() + 200)
//         // Expected values 
//         let year = d2.getFullYear()
//         let month = d2.toLocaleString('default', { month: 'long' })
//         let furturedate = d2.getDate()
//         cy.log(year)
//         cy.log(month)

//         function selectMonthandYear() {
//             cy.get('#datepicker').click()
//             cy.get('.datepicker-switch').first().then((el) => {
//                 //cy.log(el.text())  // jan 2022.includes(2022) 
//                 if (!el.text().includes(year)) {
//                     cy.get('.next').first().click()
//                     selectMonthandYear()
//                 }
//             }).then(() => {
//                 cy.get('.datepicker-switch').first().then((el) => {
//                     //cy.log(el.text())  // jan 2022.includes(2022) 
//                     if (!el.text().includes(month)) {
//                         cy.get('.next').first().click()
//                         selectMonthandYear()
//                     }
//                 })
//             })
//         }

//         function selectDate(){
//             cy.get('.day').contains(furturedate).click();
//             return true
            
//         }
//         selectMonthandYear()
//         selectDate()
        
        
//     })

// })