

describe('Validating the Basic API request', () => {
    it('Validating GET request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    })

    it('Validating POST request', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "Mahesh",
                "job": "Tester"
            }
        }).then(function (response) {
            expect(response.status).to.eq(201)
        })
    })

    it('Validating PUT request', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "Mahesh",
                "job": "Automation  tester"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })

    it('Validating Delete Request',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then(function(response){
            expect(response.status).to.eq(204)
        })
    })
})