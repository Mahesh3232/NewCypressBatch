

describe('Verify the File uplode functionality',()=>{

    it('Fileuplode',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let file = 'Navbar.json'
        cy.get('#fileUpload').attachFile(file)
        cy.get('span[class="filename"]').should('contain','Navbar')
    })

    it('Fileuplode Two ',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let file = 'Capture.JPG'
        cy.get('#fileUpload').attachFile(file)
        cy.get('span[class="filename"]').should('contain.text','Capture')
    })

    it('Fileuplode Two ',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let file = 'Capture.JPG'
        cy.get('#file').attachFile(file)
        cy.get('div[class="box__success"]').should('contain.text','Done')
    })

    it('Varify multiple file uplode',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file = ['Capture.JPG','Navbar.json','UpdateUser.json']
        cy.get('#filesToUpload').attachFile(file)
        cy.get('#fileList').children().should('have.length',3)
    })

    it.only('Varify multiple file uplode',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file = 'Capture.JPG'
        cy.get('#filesToUpload').attachFile({filePath:file,fileName:'MyImage'})
        cy.get('#fileList').children().should('have.length',1)
        cy.get('#fileList').children().first().should('contain','MyImage')
    })
})