import {data} from "../fixtures/example3.json"
//let s = require('fixtures/example3.json')
describe('verify the fixture topic in js', function () {
    data.forEach(function(el){
    it('verify the fixture', function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[value ="SUBMIT"]').click()
        })   
    })
})


// let k = [11,22,33]
// let [a,b,c] = k
// let obj = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// let {firstName:fn,lastName:fn} = obj