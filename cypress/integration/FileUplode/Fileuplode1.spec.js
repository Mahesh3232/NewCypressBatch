describe('Validate the file uplode functionality',()=>{
    it('Verify the the file uplode functionality',()=>{
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html?filename=Capture+1.JPG')
        cy.get('input[id="myFile"]').attachFile('Capture.JPG')
        cy.get('input[id="submit-button"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq('Your file has now been uploaded!')
        })
    })
})