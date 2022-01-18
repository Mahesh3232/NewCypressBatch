describe('Verify the date Picker functionality',()=>{
    it('VAlidate the date picker functionality',()=>{
        let date = new Date()
        date.setDate(date.getDate()+ 100)
        let Year = date.getFullYear()
        let Month=date.toLocaleString('default',{month:"long"}).slice(0,-2) 
        cy.log(Month)//April
        let daaa=date.getDate()
        cy.log(date)
        cy.log(Year)

        cy.visit('https://www.redbus.com/')
        cy.get('input[id="onward_cal"]').click({force: true})
        function SelectYearMonth(){
            cy.get('.monthTitle').last().then((el)=>{
                if(!el.text().includes(Year)){
                    cy.get('.next').last().click()
                    SelectYearMonth()
                }
            })
            cy.get('.monthTitle').last().then((el)=>{
                if(!el.text().includes(Month)){
                    cy.get('.next').last().click()
                    SelectYearMonth()
                }
            })
            function SelectDate(){
                cy.get('td[class="we day"]').contains(daaa).click({force: true})

            }

            SelectDate()
        }
        SelectYearMonth()
        
    })
})