describe('Verify the functionality of the checkbox', () => {
    beforeEach(function(){
        cy.visit('https://book.spicejet.com/search.aspx')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').should('not.be.checked')
    })

    it('Validate the functionality of the checkbox using click()', () => {
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_HealthCareProfessional').click().should('be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_SeniorCitizen').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Defense').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_GovtEmp').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_Student').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_UNMR').should('not.be.checked')
        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_LTCFare').should('not.be.checked')
    })
    
})