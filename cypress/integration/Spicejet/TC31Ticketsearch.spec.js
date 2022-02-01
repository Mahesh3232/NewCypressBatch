

describe('Verify the ticket search functionality on spicejet',()=>{
    before(function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    })

    it('Validate ticket search funcnality',()=>{
        cy.visit('https://book.spicejet.com/search.aspx')
        cy.get('div[class="right text-lt "]').first().find('#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1')
        .select('DEL',{force: true}).click().should('have.value','DEL')
        //cy.wait(4000)
        // cy.get('div[class="right text-lt "]').eq(1).find('select[id="ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1"]')
        // .select('option[value="AMD"]',{force: true}).should('have.value','IXC')
    })

})