let AccesToken = "3ba6ce5d71b7751640e351a8c209a71e4b5efbf525ec66c41b520cfbfc703968"

describe('Validate the POST and PUT API ',()=>{
    it('Validate the Get And PUT request',()=>{
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v1/users",
            headers:{
                Authorization: `Bearer ${AccesToken}`
            },
            body:{
               
                    "name": "Tenali Ramakrishna",
                    "gender": "male",
                    "email": "Mahesh.aher1999@gmail.com" ,
                    "status": "active"
                
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            return res.body.data['id']
        }).then((id)=>{
            cy.request({
                method:"PUT",
                url:`https://gorest.co.in/public/v1/users/${id}`,
                headers:{
                    Authorization: `Bearer ${AccesToken}`
                },
                body:{
                    "name": "Mahesh Aher",
                    "gender": "male",
                    "email": "Mahesh.aher19999@gmail.com" ,
                    "status": "active"
                }
            }).then((res)=>{
                expect(res.body.data).has.property('name',"Mahesh Aher")
                expect(res.status).to.eq(200)

            })
        })
    })
})