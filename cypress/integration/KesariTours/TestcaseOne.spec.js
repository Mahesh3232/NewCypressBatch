// describe('Validate the kesari tours', () => {
//     beforeEach(function () {
//         cy.visit('https://www.kesari.in/')
//     })
//     it('Validate the nav bar', () => {
//         cy.fixture('Navbar').then((responce) => {
//             cy.get('nav[id="main-menu"]').find('ul:first').children().each((el, index) => {
//                 let text = el.find('a:first').text()
//                 cy.log(text)
//                 cy.wrap(text).should('contain', responce[index])
//             })
//         })
//     })

//     // it.only('Validate the each tab link', () => {
//     //     let arr = []
//     //     cy.get('#main-menu > ul >li').find('a:first').each((el) => {
//     //         let herf = el.attr('href');
//     //         //cy.log(herf)
//     //         arr.push(herf)
//     //         //cy.log(arr);
//     //     }).then(() => {
//     //         cy.get('#main-menu > ul >li').find('a:first').each((ele,index) => {
//     //             let text = ele.find('a:first')
//     //             if (text.attr('href').startsWith('/')) {
//     //                 cy.wrap(text).click({ force: true })
//     //                 cy.url().should('contain', arr[index])
//     //                 cy.go('back')
//     //             }
//     //         })
//     //     })
//     // })

//     it.only('Validate URl using click on each tab', () => {
//         let responce = ["/Group-Tours","/Speciality-Tours","/Speciality-Tours/Low-Price-Tours",
//             "/Tailor-Made","http: //www.kesarimice.in","/kesari-forex","/visa","/cruises",
//             "/Deals","/About-Us","javascript:void(0);"]
//         cy.visit('https://www.kesari.in/')
//         cy.get('nav[id="main-menu"]').find('ul:first').children().each((el, index) => {
//             let text = el.find('a').first()
//             if (text.attr('href').startsWith('/')) {
//                 cy.wrap(text).click({ force: true })
//                 cy.url().should('contain', responce[index])
//                 cy.go('back')
//             }
//         })
//     })

//     it('validate url for each navigate bar', () => {
//         cy.visit('https://www.kesari.in/')
//         cy.get('.menu-item-has-children > a').each((el) => {
//             let kk = el.attr("href")
//             if (!(kk.includes("void(0)")))
//                 if (((el.prop("target")) != "_blank")) {
//                     cy.visit(`https://www.kesari.in${kk}`).then(() => {
//                         cy.url().should('contain', kk)
//                     })
//                 } else {
//                     cy.log(kk, "different base domain")
//                 }
//         })
//     })
// })


describe('My Task', () => {
    
    it.only('Agent login', () => {
        cy.visit('http://www.akankshatours.in/') ;
        cy.get('ul.social').children().find('a').first()
            .invoke('removeAttr', 'target').click({ force: true })
        cy.get('input[id="login"]').last().type('minskolePune')
        cy.get('input[id="password"]').type('minkole@2022')
        cy.get('input[id="login_button"]').click()

    })

})