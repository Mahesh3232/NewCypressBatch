describe('Validate Iframe Functionality', () => {
    it('Validate the Iframe using jquery method', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('iframe[id="frame"]').then((ele) => {
            cy.log(ele)
            let body = ele.contents().find('body')
            cy.wrap(body).as('eleOne')
            cy.get('@eleOne').find('a[href="products.html"]').should('have.text', 'Our Products')
        })
    })

    it.only('Verify Iframe using javaScript', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('iframe[id="frame"]').then((ele) => {
            console.log(ele)
            let body = ele['0'].contentDocument.body
            //cy.log(body)
            cy.wrap(body).as('Iframe')
            cy.get('@Iframe').find('a[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })
})
