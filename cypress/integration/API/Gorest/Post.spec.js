let AccesToken = "e354d1752e03b596c1d0a9d53ba265342a17c7c53df904090b7325fa1aafadd9"
describe('Validate the Gorest POST api', () => {
    function GenerateEmail() {
        let Char = "abcdefghijklmnopqrstuvwxyz123456789"
        let str = ""
        for (let i = 0; i < 10; i++) {
            str += Char[Math.floor(Math.random() * Char.length)]
        }
        return str + '@gmail.com'
    }


    it('Verify the Gorest POST Api', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: `Bearer ${AccesToken}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": GenerateEmail(),
                "status": "active"
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            return res.body.data['id']
        }).then(function (id) {
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${id}`,
                headers: {
                    Authorization: `Bearer ${AccesToken}`
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
            }).then((res) => {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${AccesToken}`
                    },
                    body: {
                        "name": "Mahesh Ramakrishna",
                        "gender": "male",
                        "email": GenerateEmail(),
                        "status": "active"
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
                    expect(res.body.data).has.property('name', 'Mahesh Ramakrishna')
                })
            })
        })
    })
})