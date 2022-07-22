describe('Validate the Api',()=>{
    it.only('Validate the get Api',()=>{
       cy.request({
        method:'GET',
        url:"https://reqres.in/api/users?page=2"
       }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
       })
    })

    it('Validate the Post api',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:
                {
                    "name": "morpheus",
                    "job": "leader"
                }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(201)
        })
    })

    it('Validate the Put Api',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
        })
    })

    it('Validate the Put Api',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(204)
        })
    })
})