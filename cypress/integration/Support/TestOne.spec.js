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