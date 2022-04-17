describe('Sort the element alphabitically', () => {
    it('Sort the element', () => {
        let Text = ['Home', 'Interaction', 'Widget', 'Frames and Windows', 'Dynamic Elements', 'Registration', 'Alert']
        let SortList = []
        cy.visit('https://way2automation.com/demo.html')
        cy.get('nav[id="main-nav"]>div >ul >li > a').each((el, index) => {
            //cy.log(el.text())
            cy.wrap(el).should('have.text', Text[index])
            SortList.push(el.text())
            //cy.log(SortList)
        }).then(() => {
            cy.log(SortList.sort()).should('have.length', 7)
        })
    })

    it.only('Print the Pattern', () => {
        // for (let i = 1; i <= 5; i++) {
        //     cy.log('* '.repeat(i))
        // }
        // for(let i =5;i>=1;i--){
        //     cy.log('* '.repeat(i))
        // }

        for(let i=1;i<=5;i++){
            cy.log('* * * * *')
        }
    })
})