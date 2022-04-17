

describe('Validate the avilable train', () => {
    // it('TestOne', () => {
    //     let count = 0
    //     cy.visit('https://www.irctc.co.in/nget/train-search')
    //     cy.get('button[type="submit"]').first().click()
    //     cy.get('input[role="searchbox"]').first().click({ force: true }).type('Hyder')
    //     cy.wait(5000) 
    //     cy.get('ul[id="pr_id_1_list"] >li').eq(1).click()
    //     cy.get('input[role="searchbox"]').last().click({force: true}).type('mumbai')
    //     cy.wait(5000)
    //     cy.get('ul[id="pr_id_2_list"]>li').eq(1).click().then(()=>{
    //         cy.get('button[type="submit"]').click()
    //     })
    //     cy.get('div[class="col-sm-5 col-xs-11 train-heading"] > strong').each(()=>{
    //         count = count+1
    //     }).then(()=>{
    //         cy.log(`Availables trains are ${count}`)
    //     })
    // })

    it.only('book ticket', () => {
        let count = 0
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.contains('OK').first().click()
        cy.get('input[role="searchbox"]').first().type('HAR')
        cy.get('ul[role="listbox"]').find('li').each(el => {
            let station = el.text()
            //cy.log(station)
            if (station === 'HARIDWAR JN - HW') {
                cy.wrap(el).click()
            }
        })
        cy.get('input[role="searchbox"]').last().type('MUMB')
        cy.get('ul[role="listbox"]').find('li').each(el => {
            let reach_station = el.text()
            //cy.log(station)
            if (reach_station === 'MUMBAI CENTRAL - MMCT') {
                cy.wrap(el).click()
            }
        })      
        cy.contains(/^Search/).click()
        // cy.get('input[role="searchbox"]').last().type('')
        cy.get('div[class="form-group no-pad col-xs-12 bull-back border-all"]').each((el, index) => {          
        count = count +1
        }).then(() => {
            cy.log(`Total trains available = ${count}`)
        })
    })
})






// .each((el)=>{
//     let text = el.find('span:first').text()
//     cy.log(text)
//     if(text == 'HYDERABAD DECAN - HYB ➨ MUMBAI CENTRAL - MMCT'){
//         cy.wrap(text).click()
//     }
// })