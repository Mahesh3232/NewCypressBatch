

describe('Interview Task',()=>{
    it('Validate URl using click on each tab', () => {
        let responce = ["/Group-Tours","/Speciality-Tours","/Speciality-Tours/Low-Price-Tours",
            "/Tailor-Made","http: //www.kesarimice.in","/kesari-forex","/visa","/cruises",
            "/Deals","/About-Us","javascript:void(0);"]
        cy.visit('https://www.kesari.in/')
        cy.get('nav[id="main-menu"]').find('ul:first').children().each((el, index) => {
            let text = el.find('a').first()
            if (text.attr('href').startsWith('/')) {
                cy.wrap(text).click({ force: true })
                cy.url().should('contain', responce[index])
                cy.go('back')
            }
        })
    })

    it("",()=>{
        let arr = []
        cy.visit("https://www.lambdatest.com/lp/cross-browser-testing?utm_source=google&utm_medium=cpc&utm_campaign=LambdaTest_Search_Generic_Automation_Testing_India&utm_term=automated%20testing%20software&utm_id=16034246527&gclid=CjwKCAjwrfCRBhAXEiwAnkmKmf9eNSefscSTh9rYUDFZiAsKFGn2-Utp3IdLTLqD_Ts9ajuJ1HuenhoCdQwQAvD_BwE")
        cy.get('.footer-menu').first().find('li').each((el)=>{
           let text =el.find('a:first').text()
           cy.log(text)
     arr.push(text)
        }).then(()=>{
           cy.log(arr.sort())     
        })
    })

    it('Search mobiles which are having cost between 2000-30000',()=>{
        let minCost=2000
        let maxCost = 30000
        cy.visit("https://www.flipkart.com/")
        cy.get('input[type="text"]').type('mobiles').type('{enter}')
        cy.wait(4000)
        cy.get('select[class="_2YxCDZ"]').first().select(String(minCost))
        cy.wait(4000)
        cy.get('select[class="_2YxCDZ"]').last().select(String(maxCost))
        cy.wait(4000)
        cy.get('._30jeq3._1_WHN1').each((el) => {
            //cy.wait(4000)
            cy.log(el.text()).then(()=>{
                expect((Number(el.text().replace(/₹|,/gi,"")))).to.within(minCost,maxCost)
            })
        })
    })

    it.only('validate the search box without typing the results', () => {
        cy.visit('https://www.mercari.com/')
        cy.get('input[data-testid="SearchInput"]').click()
        cy.get('div[data-testid="SearchesGreyPills"] ').last().find('ul:first')

        
    })
})


// cy.get('div[class="components__DropdownWrapper-l0irxq-0 gvMzaF"]').children().last().as('list')
//         cy.get('@list').find('li[data-testid="SearchGreyPill"]').each(el => {
//             search = el.text()
//             cy.log(search)    //list found
//         }).then(function () {
//             cy.get('.Button_StrippedButton-y431fn-2.components_GreyPill-l0irxq-1.fuOhqP').each((el, index) => {
//                 cy.log(el.text())
//                 cy.get('.Button_StrippedButton-y431fn-2.components_GreyPill-l0irxq-1.fuOhqP')
//                     .eq(index).click()
//               //  expect(el.text()).to.equal(search)
//             })
    
//         })