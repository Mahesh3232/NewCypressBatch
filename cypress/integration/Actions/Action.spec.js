describe('Validation of Actions',()=>{
    it('Verify the functionality of scrollIntoView',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').scrollIntoView()
    })

    it.only('Verify the DragnDrop Action',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove')
        .trigger('mouseup',{force: true})
        cy.get('#droppable >p >b').should('have.text','Dropped!')
    })

    it('Verify the functionality of Doubleclick',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class','div-double-click double')
    })

    it('Verify the Functionality of click hold',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#click-box').trigger('mousedown',{which:1})
        cy.get('#click-box').should('have.text','Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup')
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })
})