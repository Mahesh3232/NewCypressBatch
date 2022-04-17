describe('iterate over the DOm elemet', () => {

    it('sort the element alphabetically', () => {

        const list = ['Home', 'Interaction', 'Widget', 'Frames and Windows', 'Dynamic Elements', 'Registration', 'Alert']
        let sortedElelemt = []
        cy.visit('https://way2automation.com/demo.html')
        cy.get('#toggleNav > li >a').each((el, index) => {

            //children().find('a:first')

            cy.wrap(el).should('contains.text', list[index])
            sortedElelemt.push(el.text())


        }).then(() => {

            cy.log(sortedElelemt.sort()).should('have.length',7)
            
        })
    })    
})