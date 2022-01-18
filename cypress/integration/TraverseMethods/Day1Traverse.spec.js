describe('Traverse methods in cypress',()=>{
   //Children()
    it('To get children of DOM elements, use the .children() command',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('To get children of DOM elements, use the .children() command',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length',11)
    })

    it('To get children of DOM elements, use the .children() command',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="menu"]').children().should('have.length',3)
    })

    //eq()
    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(3).should('have.text',('Espresso'))
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(3).should('have.text','Blackberries')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().eq(1).should('have.text','Technology')
    })

    //first()
    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().first().should('have.text','Finance')
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })

    //Last

    it.only('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    it.only('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
    })

    it.only('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().last().should('have.text','Sales')
    })

})