

let AcessToken = "3ba6ce5d71b7751640e351a8c209a71e4b5efbf525ec66c41b520cfbfc703968"
describe('VAlidate Gorest GET Api',()=>{
    it('Validate the responce of Gorest GET api',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v1/users",
            headers:{
                Authorization:`Bearer ${AcessToken}`
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).to.haveOwnProperty('total')
            expect(res.body.meta.pagination).to.haveOwnProperty('pages')
            expect(res.body.meta.pagination).to.haveOwnProperty('page')
            expect(res.body.meta.pagination).to.haveOwnProperty('limit')
            expect(res.body.meta.pagination).to.haveOwnProperty('links')
           
        })
    })
})