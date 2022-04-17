describe('verfiy checkbox , radio , dropDown , enabled disabled', () => {
    // checkbox ---- search for the tagName input 
    // [type="checkox"]
    // [value= "option-1"]
    // it('verify the checbox with help of click function', () => {
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="option-1"]').click().should('be.checked')
    //     cy.get('input[value="option-1"]').click().should('not.be.checked')
    // })


    // it('verify the checbox with help of check() and uncheck() function', () => {
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="option-3"]').check().should('be.checked')
    //     cy.wait(3000)
    //     cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    // })
    // it('verify the  multiple selection for checbox with help of check() and uncheck() function', () => {
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
    //     cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')
    // })

    // // radio button will not have method uncheck()
    // // validation -----> pick one element ===> check(),click() ===> select another , it should not be.checked

    // it('verify the radio button functionality with click() funcnction', () => {
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="green"]').click().should('be.checked')
    //     cy.get('input[value="blue"]').should('not.be.checked')
    // })

    // it('verify the radio button functionality with check() funcnction', () => {
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="green"]').check().should('be.checked')
    //     cy.get('input[value="blue"]').should('not.be.checked')
    // })

    it('verify the radio button functionality with check() funcnction', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('input[type ="radio"]').each(function(el){
        //     cy.wrap(el).check().should('be.checked')
        // })

        // cy.get('#radio-buttons').children().filter('input').each(function (el) {
        //     cy.wrap(el).check().should('be.checked')
        // })
        // 
        cy.get('#radio-buttons').find('input').each(function (el) {
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('verify the drop down functionality', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('sql').should('have.value','sql')
        cy.get('#dropdowm-menu-1').select('SQL').should('have.value','sql')
    })


    // ["python",'junit','jquery']

    it('verify the multiple selection of drop down', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let selectValues = ["python",'junit','jquery']
        cy.get('.section-title').first().children('select').each(function(el,index){
            cy.wrap(el).select(selectValues[index]).should('have.value',selectValues[index])
        })
    })

    it('verify functionality for enabled and disable',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.enabled')
    })

    it.only('verify functionality for enabled and disable',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each(function(el,index){
            if(index != 0){
                let text = el.children().last().text()
                cy.log(text)
                //cy.log(cy.wrap(el).children().last().text())
                sum = sum + Number(el.children().last().text())
            }
        }).then(()=>{ 
            expect(sum).to.equal(163)
        })
        //cy.log(sum)      
    })
})