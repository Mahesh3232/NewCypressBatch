// describe("CRICBUZZ WEB WORK", function () {
//     let sum1 = 0
//     let sum2 = 0
//     let sum3 = 0
//     it("SUM OF SCORES OF MATCH", () => {
//         cy.visit("https://www.cricbuzz.com/live-cricket-scorecard/42806/cgc-vs-klt-6th-match-bangladesh-premier-league-2022")
//         cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').first().children().each((el, index) => {
//             //cy.log(el.text())
//             if (index >= 2 && index <= 9) {
//                 sum1 = sum1 + Number(el.children().eq(2).text())
//                 return sum1
//             }
//             else if (index == 10) {
//                 sum2 = sum2 + Number(el.children().eq(1).text())
//                 return sum2
//             }
//             sum3 = sum1 + sum2
//             //cy.log(sum3)
//             return sum3
//             //  cy.log(sum1)
//             //  cy.log(sum2)
//         }).then(() => {
//             //cy.log(sum3)
//             cy.get('div[class="cb-col cb-col-8 text-bold text-black text-right"]').first().should('contain', sum3)
//          })
//     })
// })

describe("CRICBUZZ WEB WORK", function () {
    let sum = 0
    it("SUM OF SCORES OF MATCH", () => {
        cy.visit("https://www.cricbuzz.com/live-cricket-scorecard/42806/cgc-vs-klt-6th-match-bangladesh-premier-league-2022")
        cy.get('div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]').first().children().each((el, index) => {
            if (index >= 2 && index <= 9) {
                sum = sum + Number(el.children().eq(2).text())
            }
            else if (index == 10) {
                sum = sum + Number(el.children().eq(1).text())
            }
            // let string = sum.toString()

            return sum

        }).then(() => {
            cy.get('div[class="cb-col cb-col-100 cb-scrd-itms"]').eq(9).find('div[class="cb-col cb-col-8 text-bold text-black text-right"]').eq(0).should('contain',sum)


        })
    })
})