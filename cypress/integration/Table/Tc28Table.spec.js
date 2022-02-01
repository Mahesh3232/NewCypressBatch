describe('Validate the Cricinfo scorecord',()=>{
    it('Validate the ScoreCard table 2',()=>{
        let sum = 0 
        cy.visit('https://www.espncricinfo.com/series/india-in-south-africa-2021-22-1277060/south-africa-vs-india-1st-odi-1277082/full-scorecard')
        cy.get('.table.batsman').last().find('tbody').find('.font-weight-bold').each(function(el,index,arr){
            cy.log(el.text())
            sum = sum + Number(el.text())

        }).then(()=>{
            expect(sum).to.eq(265)
        })
    })

    it('Validate the cricinfo scorecard table 2',()=>{
        let sum =0
        cy.visit('https://www.espncricinfo.com/series/zimbabwe-in-sri-lanka-2021-22-1294726/sri-lanka-vs-zimbabwe-2nd-odi-1294970/full-scorecard')
        cy.get('.table.batsman').last().find('tbody').find('.font-weight-bold').each(function(el,index,arr){
            cy.log(el.text())
            sum = sum + Number(el.text())

        }).then(()=>{
            expect(sum).to.eq(280)
        })
    })

    it.only('Validate the cricinfo scorecard table 1',()=>{
        let sum =0
        cy.visit('https://www.espncricinfo.com/series/zimbabwe-in-sri-lanka-2021-22-1294726/sri-lanka-vs-zimbabwe-2nd-odi-1294970/full-scorecard')
        cy.get('.table.batsman').first().find('tbody').find('.font-weight-bold').each(function(el,index,arr){
            cy.log(el.text())
            sum = sum + Number(el.text())

        }).then(()=>{
            expect(sum).to.eq(302)
        })
    })
})