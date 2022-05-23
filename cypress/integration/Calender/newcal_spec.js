// const { describe } = require("mocha");

// const { it } = require("mocha")

// const { it } = require("mocha")

describe("validate the DatePicker",()=>{
    it("verify the datepicker",()=>{
     let pp = new Date()
     pp.setDate(pp.getDate()+400)
     let month = pp.getMonth.toLocaleString('default',{month:'short'})
     let year = pp.getFullYear()
     let da = pp.getDate()
    
     cy.log(month)
     cy.log(da)
     cy.log(year)
     cy.visit("https://webdriveruniversity.com/Datepicker/index.html")
     cy.get('input[class="form-control"]').click()

     function SelectMonthYear(){
         cy.get(".datepicker-switch").first().each((el,index)=>{
             cy.log(el.text)
             if(el.text()==year){
                 (el).click({focus:true})
             }
             SelectMonthYear()

         })
     }
     SelectMonthYear()



    })

})