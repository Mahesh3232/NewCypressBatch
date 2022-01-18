describe('ckeck the functionality of traversals commands', () => {

    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.get('li[id="veggie"]').closest('ul').should('have.class', 'traversal-food-list')

    })

    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.get('div[class="container"]').first().closest('nav').should('have.class', 'navbar navbar-inverse navbar-fixed-top')

    })

    it('To remove DOM element(s) from the set of elements, use the .not() command', () => {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    it('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.get('cite[class="traversal-cite"]').parent().should('have.contain', 'Platea dictumst quisque sagittis purus sit amet ')
    })

    it('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.get('ul[class="traversal-drinks-list"]').parents().should('have.attr', 'class', 'thumbnail')
        cy.get('div[class="col-sm-12"]').last().parents().should('have.class', 'row')
        cy.get('div[class="btn-group btn-group-toggle"]').parents().should('have.class', 'traversal-button-other-states')
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.get('[id="espresso"]').parentsUntil('div[class="thumbnail"]').should('have.length', 1)
    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.get('input[type="reset"]').parentsUntil('form[id="form-textfield"]').should('have.length', 6)
    })


})