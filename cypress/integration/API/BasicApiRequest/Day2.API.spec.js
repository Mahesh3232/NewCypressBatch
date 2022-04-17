// describe('Validate the API', () => {

//     it('Validate the GET Api and count the no of users', () => {
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2"
//         }).then((res) => {
//             expect(res.status).to.eq(200)
//             expect(res.body.per_page).to.eq(res.body.data.length)
//             expect(res['body']['per_page']).to.eq(res['body']['data'].length)
//         })
//     })



//     it('Validate the properties for multiple Users in GET Api', () => {
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2"
//         }).then((res) => {
//             res.body.data.forEach(element => {
//                 expect(element).to.have.haveOwnProperty('id')
//                 expect(element).to.have.haveOwnProperty('email')
//                 expect(element).to.have.haveOwnProperty('first_name')
//                 expect(element).to.have.haveOwnProperty('last_name')
//                 expect(element).to.have.haveOwnProperty('avatar')
//                 expect(element).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
//             });
//         })
//     })


//     it.only('Validate the properties for singal Users in GET Api', () => {
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2"
//         }).then((res) => {
//             expect(res.body.data[0].email).to.eq('michael.lawson@reqres.in')
//         })
//     })

//     it('Validate the POST Api', () => {
//         cy.request({
//             method: "POST",
//             url: "https://reqres.in/api/users",
//             body: {
//                 "name": "morpheus",
//                 "job": "leader"
//             }
//         }).then((res) => {
//             expect(res.status).to.eq(201)
//             expect(res.body).to.have.all.keys('id', 'job', 'name', 'createdAt')
//             expect(res.duration).to.be.within(200, 800)
//         })
//     })
// })


describe('verify the GET comment api',()=>{
    it('Get comment',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
            cy.log(res.body.body)
            // .dot notation or bracket
            expect(res.status).to.eq(200)
            expect(res.body.body).to.includes('laudantium')
        })

    })

    it('Get comment',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
            //cy.log(res.body.body)
            expect(res.status).to.eq(200)
            //expect(res.body.body).to.includes('laudantium')
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text',res.body.body)

        })

        /*************/
        // GET , PUT , POST , DELETE 




    })


    it.only('Get comment',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){

            cy.log(res)
            expect(res.body.per_page).to.eq(6)

        })
    })

    it.only('Get comment',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            return res
        }).then(function(res){
           return res.body.data.find(function(el){
               return el.first_name === "Michael"
           })
            
        }).then(function(obj){
            expect(obj.first_name).to.eq('Michael')
        })
    })

})