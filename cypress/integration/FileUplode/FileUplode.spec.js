describe('Validate Fileuplode functionality',()=>{
    it('Verify the file uplode functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input[id="file-upload"]').attachFile('Capture.JPG')
        cy.get('input[id="file-submit"]').click()
        cy.get('div[id="uploaded-files"]').contains('Capture')
        cy.get('div >h3').should('have.text','File Uploaded!')
        cy.url().should('contain','upload')    
    })

    it('Validate the Uplode Multiple File functionality',()=>{
        let path ='Capture.jpg'
        let files =['Capture.jpg','Capture.jpg','Capture.jpg']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input[id="filesToUpload"]').attachFile(files)
        cy.get('ul[id="fileList"]').children().should('have.length',files.length)
    })

    it.only('verify the option to chanage the file name',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input[id="file-upload"]').attachFile({filePath: 'Capture.JPG', fileName: 'Mahesh.JPG'})
        cy.get('input[id="file-submit"]').click()
        cy.get('div[id="uploaded-files"]').contains('Mahesh')
        cy.get('div >h3').should('have.text','File Uploaded!')
        cy.url().should('contain','upload')    
    })


})