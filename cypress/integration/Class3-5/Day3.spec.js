describe('Verify the GOrest Api', () => {
    it('Verify the GetUsers Api', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.length).to.eq(10)
            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            });
        })
    })

    let paylode = {
        "name": "Tenali Ramakrishna",
        "gender": "male",
        "email": `tenali${Math.random()*3}.ramafdk45eri64shna@15ce.com`,
        "status": "active"
    }

    it('Verify the Create user API', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            },
            body: paylode
        }).then((res)=>{
            //cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.body).to.have.keys(["id","name","gender","email","status"])
            expect(res.body.id).not.eq(null)
            expect(res.body.name).to.eq(paylode.name)
            expect(res.body.gender).to.eq(paylode.gender)
            expect(res.body.status).to.eq(paylode.status)
            expect(res.body.email).to.eq(paylode.email)
            return res.body.id
        }).then((id)=>{
            cy.request({
                method:"DELETE",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers:{
                    Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
                }
            }).then((res)=>{
                expect(res.status).to.eqls(204)
            })
        })
    })
})