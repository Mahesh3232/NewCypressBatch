describe('Verify the Iframe',()=>{
    it('Verify the Iframe',()=>{
        cy.visit('http://demo.automationtesting.in/Frames.html')
        cy.get('iframe[id="singleframe"]').then((ele)=>{
            //cy.log(ele)
            let body = ele.contents().find('body')
            cy.wrap(body).as('eleOne')
            cy.get('@eleOne').find('div[class="container"]').children().find('input[type="text"]:first').type('Mahesh')
        })
    })
})