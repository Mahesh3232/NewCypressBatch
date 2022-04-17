// describe('Verify the hooks methods in cypress',()=>{
//     before(function(){
//         cy.log('Im from before')
//     })

//     beforeEach(function(){
//         cy.log('Im from BeforeEach')
//     })

//     after(function(){
//         cy.log('Im from after')
//     })

//     afterEach(function(){
//         cy.log('Im from afterEach')
//     })

//     it('Tescase One',()=>{
//         cy.log('Im from Testcase One')
//     })

//     it('TestCase Two ',()=>{
//         cy.log('Im from Testcase Two')
//     })
// })

describe('tranverse method in javscript',()=>{
    
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').should('have.length',12)
        cy.get('th').eq(0).should('have.text',"Firstname")
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text',"Firstname")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text','3')

    })
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text','3')

    })
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class = "breadcrumb traversal-breadcrumb"]').children().should('have.length',3)

    })

    it.only('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text',"Espresso")
        cy.get('#milk').next().should('have.attr',"id",'espresso')
    })
    it.only('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text',"Tea")
        cy.get('#milk').prev().should('have.attr',"id","tea")

    })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text',"Tea")
        cy.get('#milk').prev().should('have.attr',"id","tea")

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text',"Tea")
        cy.get('#milk').prev().should('have.attr',"id","tea")

    })

    it.only('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').nextAll().should('have.length',2)
        cy.get('#milk').nextAll().first('have.text',"Espresso")
    })

    it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prevAll().should('have.length',2)
       
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')

       
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command..',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length',4)
       
    })
    
    
    // eq(), first(),last(),children(),prev(),next(),nextAll(),prevAll(),siblings(),filter()


})