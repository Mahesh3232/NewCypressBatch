describe('Validate the API request using intercept', () => {
    it('Validate the GET request Using intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GETRequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        //cy.contains('Get Comment').click()
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@GETRequest').then(function (res) {
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.request.headers.origin).to.eq("https://example.cypress.io")
            expect(res.response.body).to.have.all.keys('postId', 'id', 'name', 'email', 'body')
        })
        cy.get('div[class="network-comment"]').should('be.visible')
        cy.get('div[class="network-comment"]').should('contain', 'laudantium enim quasi')

    })

    it.only('validate the intercept ....POST', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')


        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            cy.log(response)
            //cy.log(request)

            //let {headers,url}  = request
            //let {headers:resonseHeaders,url:responseUrl}  = response


        })
        cy.get('.network-post-comment').should('contain', "POST")



    })
})