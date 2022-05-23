// let AccesToken = "3ba6ce5d71b7751640e351a8c209a71e4b5efbf525ec66c41b520cfbfc703968"

// describe('Validate the POST and PUT API ',()=>{
//     it('Validate the Get And PUT request',()=>{
//         cy.request({
//             method:"POST",
//             url:"https://gorest.co.in/public/v1/users",
//             headers:{
//                 Authorization: `Bearer ${AccesToken}`
//             },
//             body:{
               
//                     "name": "Tenali Ramakrishna",
//                     "gender": "male",
//                     "email": "Mahesh.aher1999@gmail.com" ,
//                     "status": "active"
                
//             }
//         }).then((res)=>{
//             expect(res.status).to.eq(201)
//             expect(res.body.data).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
//             return res.body.data['id']
//         }).then((id)=>{
//             cy.request({
//                 method:"PUT",
//                 url:`https://gorest.co.in/public/v1/users/${id}`,
//                 headers:{
//                     Authorization: `Bearer ${AccesToken}`
//                 },
//                 body:{
//                     "name": "Mahesh Aher",
//                     "gender": "male",
//                     "email": "Mahesh.aher19999@gmail.com" ,
//                     "status": "active"
//                 }
//             }).then((res)=>{
//                 expect(res.body.data).has.property('name',"Mahesh Aher")
//                 expect(res.status).to.eq(200)

//             })
//         })
//     })
// })

describe('verify the fixture topic in js', function () {
    let obj
    before(() => {
        console.log('hello')
        cy.fixture('example2').then((data) => {
            obj = data
            cy.log(obj)
        })

    })

   

    // obj.forEach(function (el) {
    //     it('verify the fixture', function () {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.message)
    //         cy.get('input[value ="SUBMIT"]').click()
    //     })
    // })


    it('verify the fixture', function () {
        obj.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[value ="SUBMIT"]').click()

        })
      
    })







    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj[0].firstName)
    //     cy.get('input[name="last_name"]').type(obj[0].lastName)
    //     cy.get('input[name="email"]').type(obj[0].email)
    //     cy.get('textarea[name="message"]').type(obj[0].message)
    //     cy.get('input[value ="SUBMIT"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj[1].firstName)
    //     cy.get('input[name="last_name"]').type(obj[1].lastName)
    //     cy.get('input[name="email"]').type(obj[1].email)
    //     cy.get('textarea[name="message"]').type(obj[1].message)
    //     cy.get('input[value ="SUBMIT"]').click()
    // })




    // let obj = {
    //     first_name: "chinmay",
    //     last_Name: "deshpande",
    //     email: "chinmaydeshpande010@gmail.com",
    //     message :"learning js"
    // }

    // let obj1 = {
    //     first_name: "poorva",
    //     last_Name: "vyas",
    //     email: "poorvvyas@gmail.com",
    //     message :"Poorva is learning js"
    // }

    it('verify the fixture', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('email')
        cy.get('textarea[name="message"]').type('helli')
        cy.get('input[value ="SUBMIT"]').click()
    })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type('chinmay')
    //     cy.get('input[name="last_name"]').type('deshpande')
    //     cy.get('input[name="email"]').type('email')
    //     cy.get('textarea[name="message"]').type('helli')
    //     cy.get('input[value ="RESET"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj.first_name)
    //     cy.get('input[name="last_name"]').type(obj.last_Name)
    //     cy.get('input[name="email"]').type(obj.email)
    //     cy.get('textarea[name="message"]').type(obj.email)
    //     cy.get('input[value ="RESET"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj1.first_name)
    //     cy.get('input[name="last_name"]').type(obj1.last_Name)
    //     cy.get('input[name="email"]').type(obj1.email)
    //     cy.get('textarea[name="message"]').type(obj1.email)
    //     cy.get('input[value ="RESET"]').click()
    // })

    // only for the one testcase

    // {
    //     "firstName": "Using fixtures to represent data",
    //     "lastName": "hello@cypress.io",
    //     "email": "Fixtures are a great way to mock data for responses to routes",
    //     "message":"hello"
    //   }


    // it.only('verify the fiture for only one testcase',function(){
    //     cy.fixture("example").then(function(data){
    //         //cy.log(data)
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(data.firstName)
    //         cy.get('input[name="last_name"]').type(data.lastName)
    //         cy.get('input[name="email"]').type(data.email)
    //         cy.get('textarea[name="message"]').type(data.message)
    //         cy.get('input[value ="RESET"]').click()

    //     })


    // })





})