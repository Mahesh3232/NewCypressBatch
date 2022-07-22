// describe('login form', () => {
//     // // it('to verify login', () => {
//     // //     cy.visit("https://automationteststore.com/")
//     // //     cy.get('#customernav').click()
//     // //     cy.get('.btn.btn-orange.pull-right').first().click()
//     // //     cy.get('#AccountFrm_firstname').type('Pranali')
//     // //     cy.get('#AccountFrm_lastname').type('Pansare')
//     // //     cy.get('#AccountFrm_email').type('pranali2@gmail.com')
//     // //     cy.get('#AccountFrm_telephone').type('8811223344')
//     // //     cy.get('#AccountFrm_fax').type('665544')
//     // //     cy.get('#AccountFrm_company').type('Minskole')
//     // //     cy.get('#AccountFrm_address_1').type('Pune')
//     // //     cy.get('#AccountFrm_address_2').type('Pune2')
//     // //     cy.get('#AccountFrm_city').type('Wadgoan')
//     // //     cy.get('.btn.btn-orange.pull-right').first().click()
//     // //     cy.get('select[id="AccountFrm_country_id"]').select('Brazil').should('have.value', '30')
//     // //     cy.get('#AccountFrm_postcode').type('422605')
//     // //     cy.get('select[id="AccountFrm_zone_id"]').select('Acre').should('have.value', '440')
//     // //     cy.get('#AccountFrm_loginname').type('abcdUser123')
//     // //     cy.get('#AccountFrm_password').type('abcd@User32332')
//     // //     cy.get('#AccountFrm_confirm').type('abcd@User32332')
//     // //     cy.get('#AccountFrm_newsletter1').check().should('be.checked')
//     // //     cy.get('#AccountFrm_agree').check().should('be.checked')
//     // //     cy.get('.fa.fa-check').click()
//     // // })

//     // // it.only('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
//     // //     cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
//     // //     cy.window().then(($win)=>{
//     // //         cy.stub($win,'prompt').returns('This is a test text')
//     // //         cy.contains('Click for JS Prompt').click()
//     // //     })
//     // //     cy.get('#result').should('contain','You entered: This is a test text')
//     // // })

//     // it('drag and drop using trigger and  data transfer', () => {
//     //     cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
//     //     const dataTransfer = new DataTransfer();
//     //     cy.get('li[id="menu-fried-chicken"]').trigger('dragstart', { dataTransfer })
//     //     cy.get('div[id="plate"]').trigger('drop', { dataTransfer })
//     // })

//     // it('drag and drop using  drag method directly', () => {
//     //     cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
//     //     cy.get('#menu-ice-cream').drag('#plate-items')
//     // })

//     // it('mouse down , mouse up, mousemove', () => {
//     //     cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
//     //     cy.get('div[id="draggable"]').trigger('mousedown', { which: 1 })
//     //     cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
//     //     cy.get('#droppable').should('have.class', 'ui-widget-header ui-droppable ui-state-highlight')
//     // })

//     // it('drag and drop using  drag method directly', () => {
//     //     cy.visit('https://codenboxautomationlab.com/')
//     //     cy.contains('Contact Us').scrollIntoView().click()
//     //     cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
//     //     cy.get('footer').scrollIntoView()
//     // })

//     // it('add to cart and checkout', () => {
//     //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
//     //     cy.get('input[type="search"]').last().type('Ca')
//     //     cy.get('h4[class="product-name"]').each((el, index) => {
//     //         if (el.text() == 'Cashews - 1 Kg') {
//     //             cy.get('div[class="product-action"] button').eq(index).click()
//     //         }

//     //     })

//     //     cy.get('[class="cart-icon"]').click()
//     //     cy.get('div[class="action-block"] button').first().click()
//     //     cy.contains('Place Order').click()
//     //     cy.get('div[class="products"] select').select('India')
//     //     cy.get('[class="chkAgree"]').check()
//     //     cy.contains('Proceed').click()
//     // })

//     // it.only('events', () => {
//     //     cy.visit('https://www.orangehrm.com/');
//     //     cy.get('a[class="link"]').eq(0).trigger('mouseover')
//     //     cy.get('div[class="secondary"]').eq(0).invoke('show')
//     //         .should('be.visible')
//     // })
    
//     // it.only('tc-4: events2', () => {
//     //     cy.visit('https://opensource-demo.orangehrmlive.com/');
//     //     cy.get('input[id="txtUsername"]').type('admin');
//     //     cy.get('input[id="txtPassword"]').type('admin123');
//     //     cy.get('input[id="btnLogin"]').click()
//     //     cy.contains('Admin').trigger('mouseover', {bubbles: false})
//     //     cy.get('a[class="firstLevelMenu"]').eq(0).invoke('show').trigger('mouseover')
//     //     //cy.get('a[class="firstLevelMenu"]').eq(0).screenshot()
//     //     cy.screenshot()
//     //     //s document.getSelection(".menu > ul > li > ul").style.opacity = "0.5";
//     //     cy.get('ul#mainMenuFirstLevelUnorderedList ul li a#menu_admin_UserManagement')
//     //         .invoke('show')
//     //         .should('be.visible')
//     //         .trigger('mousedown')
//     // })
    
    
// })

describe('verify all Methods of simple api',function(){

    it('verify GET method of simple api',function(){

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2",
        }).then(function(UserData){
            console.log(UserData)
            // [{first_name,last_name}]=UserData.body.data
            // cy.log(first_name)
        })
    })
})