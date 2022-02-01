describe('Verify the Delete User API', () => {
    //let AcessToken = '554b97a07b598b012f137a5804ae7617dc67fe4da3974abae2274a75655d70a7'
    it('Create the New User Using POST Api', () => {

        function GenerateEmail() {
            let Char = "abcdefghijklmnopqrstuvwxyz123456789"
            let str = ""
            for (let i = 0; i < 10; i++) {
                str += Char[Math.floor(Math.random() * Char.length)]
            }
            return str + '@gmail.com'
        }
        cy.fixture('CreateUser').then((payload) => {
            payload.email = GenerateEmail()
            cy.Gorest('POST', "https://gorest.co.in/public/v1/users", payload)
                .then((res) => {
                    expect(res.status).to.eq(201)
                    expect(res.body.data).has.property('name',payload.name)
                    expect(res.body.data).has.property('gender', 'male')
                    //expect(res.body.data).has.property('email', GenerateEmail())
                    expect(res.body.data).has.property('status', 'active')
                }).then((res) => {
                    // cy.log(res)
                    const UserID = res.body.data.id
                    // cy.log(`User id is ${UserID}`)

                    cy.Gorest('DELETE', `https://gorest.co.in/public/v1/users/${UserID}`)

                        .then((res) => {
                            expect(res.status).to.eq(204)
                        })
                })
        })
    })

})


// cy.request({
//     method: "POST",
//     url: "https://gorest.co.in/public/v1/users",
//     headers: {
//         Authorization: 'Bearer ' + AcessToken
//     },
//     body: {
//         "name": "Mahesh Sunil Aher ",
//         "gender": "male",
//         "email": GenerateEmail(),
//         "status": "active"
//     }
// })