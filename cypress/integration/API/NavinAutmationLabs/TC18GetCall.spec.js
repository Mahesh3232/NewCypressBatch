describe('Get request for get the users',()=>{
let AcessToken = '05226c309bd944478f41bacf5a60b0ddbe533b5a4aeb9021218ba9cb4355e2a7'
    it('Validate the GET api',()=>{
        cy.request({
            method:"GET",
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                Authorization:'Bearer'+ AcessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.pages).to.eq(68)
        })
    })
})









