describe('to verify traverse method',()=>{
    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().should('have.length',8)
        cy.get('ul[class="nav-pills categorymenu"]').children().eq(1).should('contain','Apparel & accessories')
        
    })
    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().first().should('contain','Home')
        
    })
    it.only('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[herf="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain','Makeup')
        cy.get('a[herf="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().next().should('contain','Skincare')     
    })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[herf="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().should('contain','Makeup')
        cy.get('a[herf="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().prev().should('contain','Apparel & accessories')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[herf="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().siblings().should('have.length',7)
    })   
})


// describe('Task- mercari site', () => {
//     var popSearches = ""
//     it("valiadate the popular searches of searchbox", () => {
//         cy.visit('https://www.mercari.com/')
//         cy.get('input.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
//         cy.get('div.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').each((el, indx) => {
//             popSearches = el.text()
//             //cy.log(popSearches)
//             check(popSearches, indx)
//         })

//         function check(searchList, item) {
//             var results = ""
//             //cy.get('div.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').eq(num).click()
//             // cy.get('button[class="Button_StrippedButton-y431fn-2 components_GreyPill-l0irxq-1 fuOhqP"]')
//             // .eq(num).click()
//             cy.get('div[data-testid="SearchesGreyPills"] ul li a button[class="Button_StrippedButton-y431fn-2 components_GreyPill-l0irxq-1 fuOhqP"]')
//             .eq(item).click()
//             cy.url().should('include', 'https://www.mercari.com/search/')
//             cy.get('.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
//             //cy.get('.Button__BaseButton-xht50r-0.ekmdiR').click()         //clrs search history
//             cy.get('.components__DropdownWrapper-l0irxq-0.gvMzaF ul li').each((el) => {
                   
//                 if (searchList.includes(el.text())){
//                   //  cy.log(el.text())
//                      results = el.text()
//                 }
//             }).then(function () {
//                 expect(results).to.equals(searchList)
//             })
//             cy.go(-1)
//           cy.get('input.Input__StyledInput-sc-19d8fkv-0.hlpFOe.SearchInput-sc-1kwj44w-0.elygcy').click()
//         }
//     })
// })