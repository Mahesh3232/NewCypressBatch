describe('Validate the GEt request',()=>{
    it('Verify the GET request responce',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then((res)=>{
            let text = res.body.body
            return text
        }).then(function(text){
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('button[class="network-btn btn btn-primary"]').click()
            cy.get('div[class="network-comment"]').should('have.text',text)
        })
    })

    it('Verify the Post request responce',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                 "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.email).to.eq('hello@cypress.io')
        })
    })

    it('Verify the PUT request',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq('Using PUT in cy.intercept()')
        })
    })
})