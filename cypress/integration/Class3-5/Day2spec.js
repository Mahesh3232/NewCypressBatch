describe('Verify the functionality of Api',()=>{
    it('Verify the count via Api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(({status,duration,body,headers})=>{
            //cy.log(res)
            expect(status).to.eql(200)
            expect(duration).to.be.within(20,100)
            expect(body).to.have.keys(["data","page","per_page","support","total","total_pages"])
            body.data.forEach(element => {
                expect(element).to.have.keys(["id","email","first_name","avatar","last_name"])
                expect(element.email).not.to.eql(null)
                expect(element.first_name).not.to.eql(null)
                expect(element.id).not.to.eql(null)
                expect(element.avatar).not.to.eql(null)
                expect(element.last_name).not.to.eql(null)
            });
            expect(headers).to.have.property('content-type','application/json; charset=utf-8')
        })
    })
})




//