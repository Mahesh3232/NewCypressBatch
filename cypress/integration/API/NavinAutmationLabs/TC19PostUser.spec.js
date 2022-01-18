describe('Post User Request', () => {

    let AccesToken = '6b6969174154db7f1addd6e109e39ba97e641ca5935f7f769ca77cd449186734'
    let randomtext = ""
    let TestEmail = ""


    it('Create User request', () => {
        let pattern = "ABCDEFGHIJKLMNOPQRTSVWXYZabcdefghijklmnopqqrstuvwxyz"
        for (let i = 0; i < 10; i++)
            randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length))
        TestEmail = randomtext + '@gmail.com'
        cy.log(TestEmail)

        cy.fixture('CreateUser').then((responce) => {

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    Authorization: 'Bearer ' + AccesToken
                },
                body: {
                    "name": responce.name,
                    "gender": responce.gender,
                    "email": TestEmail,
                    "status": responce.status
                }

            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('name', responce.name)
                expect(res.body.data).has.property('gender', responce.gender)
                expect(res.body.data).has.property('email', TestEmail)
                expect(res.body.data).has.property('status', responce.status)
            }).then((res) => {
                const UserId = res.body.data.id
                cy.log(`UserId id ${UserId}`)
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users/'+UserId,
                    headers: {
                        Authorization: 'Bearer ' + AccesToken
                    }

                }).then((res) => {
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('name', responce.name)
                    expect(res.body.data).has.property('gender', responce.gender)
                    expect(res.body.data).has.property('email', TestEmail)
                    expect(res.body.data).has.property('status', responce.status)
                })

            })
        })
    })


})