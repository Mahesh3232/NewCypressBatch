


describe('Traverse Methods in cypress',()=>{

    //next()
    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').next().should('have.id','sugar')

    })
    
    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text','Apple')
    })
    
    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    })

    // nextAll()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)
    })

    // nextUntil()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    //prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prev().should('have.text','Milk')
    })

    //prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
    })

    //prevAll
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)
    })

    //siblings
    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').siblings().should('have.length',5)
    })

    //find

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.length',3)
    })

    //filter
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb').find('li').filter('.active').should('have.text','Contact Us')
    })

})