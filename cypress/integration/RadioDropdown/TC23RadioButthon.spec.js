describe('Verify the radio button functionality',()=>{
    before(function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
      });
    beforeEach(function(){
        cy.visit('https://book.spicejet.com/')
    })
    it('Validate the functionality of Round trip Radio button Using click()',()=>{
        cy.get('input[value="RoundTrip"]').first().click().should('be.checked')
        cy.get('input[value="OneWay"]').first().should('not.be.checked') 
        cy.get('input[value="TripPlanner"]').first().should('not.be.checked')  
    })

    it('Validate the functionality of Round trip Radio button Using click()',()=>{
        cy.get('input[value="TripPlanner"]').first().click().should('be.checked')
        cy.get('input[value="OneWay"]').first().should('not.be.checked') 
        cy.get('input[value="RoundTrip"]').first().should('not.be.checked')  
    })

    it('Validate the functionality of Round trip Radio button Using check()',()=>{
        cy.get('input[value="RoundTrip"]').first().check().should('be.checked')
        cy.get('input[value="OneWay"]').first().should('not.be.checked') 
        cy.get('input[value="TripPlanner"]').first().should('not.be.checked')  
    })

    it('Validate the functionality of Round trip Radio button Using check()',()=>{
        cy.get('input[value="TripPlanner"]').first().check().should('be.checked')
        cy.get('input[value="OneWay"]').first().should('not.be.checked') 
        cy.get('input[value="RoundTrip"]').first().should('not.be.checked')  
    })

    it.only('Validate the functionality of the checkbox using click()',()=>{
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
    })
})