import{homepage} from '../../support/OrangeHrm/Home'
describe('Validata the Login page',()=>{
    let home = new homepage()
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })
    it('Validate the login functionality with valid cardentials',()=>{
        home.Login('Admin','admin123')
        cy.url().should('contain','dashboard')
        cy.title().should('eq','OrangeHRM')
    })

    it('Validate the login functionality with invalid cardentials',()=>{
        home.Login('Admin','admin12344')
        cy.get('span[id="spanMessage"]').should('be.visible')
    })

    it('Verify the logo of the homepage',()=>{
        home.Logo()
    })

    it('Verify the forgotpassword link',()=>{
        home.ForgotPassword()
    })

    it('Verify the social media icons',()=>{
        home.SocialMediaIcons()
    })
})