
describe('Verify the all traverse method', () => {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    // it('Verify the children mathod',()=>{
    //     cy.get('ul[class="traversal-drinks-list"]').children().should('have.length',5)
    // })

    // it('To get a DOM element at a specific index, use the .eq() command.',()=>{
    //     cy.get('ul[class="traversal-drinks-list"]').children().eq(3).should('have.text','Espresso')
    // })

    // it('To get the first DOM element within elements, use the .first() command.',()=>{
    //     cy.get('ul[class="traversal-drinks-list"]').children().first().should('have.text','Coffee')
    // })

    // it('To get the last DOM element within elements, use the .last() command.',()=>{
    //     cy.get('ul[class="traversal-drinks-list"]').children().last().should('have.text','Sugar')
    // })

    // it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
    //     cy.get('ul[class="traversal-drinks-list"]').children().first().next().should('have.text','Tea')
    // })
    // it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
    //     cy.get('ul[class="traversal-drinks-list"]').children().first().nextAll().should('have.length', 4)
    // })

    // it('To get parent DOM element of elements, use the .parent() command.', () => {
    //     cy.get('li[id="milk"]').parent().should('have.class', 'traversal-drinks-list')
    // })

    // it('To get parents DOM element of elements, use the .parents() command.', () => {
    //     cy.get('li[id="milk"]').parents().should('have.length', 6)
    // })

    // it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
    //     cy.get('li[id="milk"]').siblings().should('have.length', 4)
    // })

    // it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
    //     cy.get('li[id="veggie"]').prevAll().should('have.length', 6)
    // })

    // it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
    //     cy.get('li[id="veggie"]').prev().should('have.text', 'Figs')
    // })

    // it('To get descendant DOM elements of the selector, use the .find() command.', () => {
    //     cy.get('div[class="col-sm-12"]').eq(0).find('form').should('have.id', 'form-textfield')
    // })

    // it('To get the closest ancestor DOM element, use the .closest() command.', () => {
    //     cy.get('li[id="veggie"]').closest('li').should('have.text', 'Figs')
    // })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.get('.breadcrumb').find('li').filter('.active').should('have.text','Contact Us')
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command', () => {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.get('input[type="reset"]').parentsUntil('form[id="form-textfield"]').should('have.length', 6)
    })



//filter,.nextUntil(),.not(),.parentsUntil(),.prevUntil(),



})