describe('Validate the Api using stub responce', () => {
    it('Validate the Get Request', () => {
        cy.fixture('intercept').then((responce) => {
            responce.forEach(element => {
                cy.intercept({
                    method: "GET",
                    url: "https://jsonplaceholder.cypress.io/comments/1"
                }, {
                    body: element

                }).as('GetRequest')
                cy.visit('https://example.cypress.io/commands/network-requests')
                cy.get('button[class="network-btn btn btn-primary"]').click()
                cy.wait('@GetRequest').then((res) => {
                    cy.log(res)
                    expect(res.response.statusCode).to.equal(200)
                    cy.get('.network-comment').should('have.text', res.response.body.body)
                })
                cy.get('.network-comment').should('have.text', element.body)
            });
        })
    })

    it('Validate the POST request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 201
        }).as('Postrequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-post btn btn-success"]').click()
        cy.wait('@Postrequest').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            cy.get('div[class="network-post-comment"]').should('be.visible')
        })
        cy.get('div[class="network-post-comment"]').should('have.text', 'POST successful!')
    })

    it('Validate the POST request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 401
        }).as('Postrequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-post btn btn-success"]').click()
        cy.wait('@Postrequest').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(401)
            cy.get('div[class="network-post-comment"]').should('not.be.visible')
        })
        //cy.get('div[class="network-post-comment"]').should('have.text','POST successful!')
    })
})

