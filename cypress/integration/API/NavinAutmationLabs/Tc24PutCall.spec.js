describe('Verify the Put API', () => {
    let AcessToken = '6b6969174154db7f1addd6e109e39ba97e641ca5935f7f769ca77cd449186734'

    it('Validate the PUT API', () => {
        cy.fixture('updateUser').then((responce)=>{
            cy.request({
                method: "POST",
                url: "https://gorest.co.in/public/v1/users",
                headers: {
                    Authorization: 'Bearer ' + AcessToken
                },
                body: {
    
                    "name": "Mahesh Aher",
                    "gender": "male",
                    "email": "MaheshAher16@gmailcom",
                    "status": "active"
    
                }
            }).then((res) => {
                expect(res.status).eq(201)
                expect(res.body.data).has.property('name', 'Mahesh Aher')
                expect(res.body.data).has.property('gender', 'male')
                expect(res.body.data).has.property('email', 'MaheshAher16@gmailcom')
                expect(res.body.data).has.property('status', 'active')
            }).then((res) => {
                const Userid = res.body.data.id
                cy.log('User id id ' + Userid)
                cy.request({
                    method: "PUT",
                    url: "https://gorest.co.in/public/v1/users/" + Userid,
                    headers: {
                        Authorization: 'Bearer ' + AcessToken
                    },
                    body: {
                        "name": responce.name,
                        "gender": responce.gender,
                        "email": responce.email,
                        "status": responce.status
                    }
                }).then((res) => {
                    expect(res.status).eq(200)
                    expect(res.body.data).has.property('name',  responce.name)
                    expect(res.body.data).has.property('gender',responce.gender)
                    expect(res.body.data).has.property('email', responce.email)
                    expect(res.body.data).has.property('status', responce.status)
                })
            })
        })
        
    })
})