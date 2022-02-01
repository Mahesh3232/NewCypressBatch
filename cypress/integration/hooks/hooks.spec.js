

describe('Verify the hooks methods in cypress',()=>{
    before(function(){
        cy.log('Im from before')
    })

    beforeEach(function(){
        cy.log('Im from BeforeEach')
    })

    after(function(){
        cy.log('Im from after')
    })

    afterEach(function(){
        cy.log('Im from afterEach')
    })

    it('Tescase One',()=>{
        cy.log('Im from Testcase One')
    })

    it('TestCase Two ',()=>{
        cy.log('Im from Testcase Two')
    })
})