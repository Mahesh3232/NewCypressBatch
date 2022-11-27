describe('Verify the Iframe',()=>{
    it('Verify the Iframe',()=>{
        cy.visit('http://demo.automationtesting.in/Frames.html')
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('div[id="Multiple"]').then((el)=>{
            let body = el.contents().find('body:first')
            cy.log(body)
            // cy.wrap(body).as('elOne')
            // cy.get('@elOne').find('div[class="container"] > h5').should('have.text','iNested iFrames')
            // cy.get('iframe[id="singleframe"]').then((ele)=>{
            //     let body = ele.contents().find('body')
            //     cy.wrap(body).as('eleOne')
            //     cy.get('@eleOne').find('div[class="container"] > h5').should('have.text','iFrame Demo')
            // })
        })
        
    })
})