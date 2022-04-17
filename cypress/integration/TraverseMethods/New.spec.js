describe('Traverse methods in cypress',()=>{
    beforeEach(function(){
        cy.visit('https://way2automation.com/demo.html')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.get('div[class="container main-nav"]').closest('nav[id="main-nav"]').should('have.class','block')
    })

    it('To get children of DOM elements, use the .children() command.',()=>{
        cy.get('ul[id="toggleNav"]').children().should('have.length',7)
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.get('ul[id="toggleNav"]').closest('nav').should('have.class','block')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.get('ul[id="toggleNav"]').children().eq(2).find('a:first').should('have.text','Widget')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.get('div[class="container margin-top-20"]').children().filter('div[class="text_box"]').should('have.length',1)
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.get('ul[class="dropdown"]').children().eq(3).find('a:first').should('have.text','Selectable')
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.get('ul[class="dropdown"]').children().first().find('a:first').should('have.text','Draggable')
    })

    it('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.get('ul[class="dropdown"]').children().last().find('a:first').should('have.text','Dropdown')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.get('nav[id="main-nav"]').next().should('have.class','banner')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.get('nav[id="main-nav"]').nextAll().should('have.length','3')
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.get('div[class="linkbox margin-bottom-20"]').nextUntil('div[target="_blank"]').should('have.length','4')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.get('div[class="row"]').children().not('div[target="_blank"]').should('have.length',5)
    })

    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.get('div[class="linkbox margin-bottom-20"]').parent().should('have.class','row')
    })

    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.get('div[class="linkbox margin-bottom-20"]').parents().should('have.length',5)
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command',()=>{
        cy.get('div[class="linkbox margin-bottom-20"]').parentsUntil('div[class="banner"]').should('have.length',5)
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command',()=>{
        cy.get('div[class="banner"]').prev().should('have.class','block')
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.get('div[class="banner"]').prevAll().should('have.length',2)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.get('div[target="_blank"]').prevUntil('#wrapper>div.container.margin-top-20>div.row>div:nth-child(1)').should('have.length','3')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.get('div[target="_blank"]').siblings().should('have.length',5)
    })

    // it.only('.next() command.', function () {

    //     cy.visit('https://serviceon.com.au/')
    //     cy.get('div[class="elementor-text-editor elementor-clearfix"]').first().find('ul').children().eq(0).next().should('have.text', 'Appliance installations')
    // })

})