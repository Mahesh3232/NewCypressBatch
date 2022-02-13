describe('Validate the Api request with intercept', () => {
    it('Validate the get comment in UI using intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GETRequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@GETRequest')
        cy.get('div[class="network-comment"]').should('be.visible')
        cy.get('div[class="network-comment"]').should('contain', 'laudantium enim quasi')
    })

    it('Validate the GET API request using intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GETcmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@GETcmt').then(function (res) {
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.request.headers.origin).to.eq("https://example.cypress.io")
        })
        cy.get('div[class="network-comment"]').should('contain', 'laudantium enim quasi')
    })

    it.only('Validate thr POST API request using intercept', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('POSTcmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-post btn btn-success"]').click()
        cy.wait('@POSTcmt').then(function (res) {
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.body).to.have.all.keys('body', 'email', 'id', 'name')
        })
        cy.get('div[class="network-post-comment"]').should('be.visible')
        cy.get('div[class="network-post-comment"]').should('have.text', 'POST successful!')
    })

    it.only('Validate PUT API using intercept', () => {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('PUTcmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-put btn btn-warning"]').click()
        cy.wait('@PUTcmt').then(function (res) {
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.request.headers.host).to.eq("jsonplaceholder.cypress.io")
            //expect(res.responce['body']['body']).to.eq('"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"')
            expect(res.response.body).to.have.all.keys('body', 'email', 'id', 'name')
            expect(res.responce['body']['name']).to.eq("Using PUT in cy.intercept()")
        })
    })
})