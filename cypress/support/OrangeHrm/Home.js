export class homepage{
    elements ={
        UserName:"input[id='txtUsername']",
        PassWord:'input[id="txtPassword"',
        LoginBtn:'input[class="button"]',
        Logo:'#divLogo > img',
        ForgotPass:'a[href="/index.php/auth/requestPasswordResetCode"]',
        SocialIcons:'div[id="social-icons"]'
    }

    Login(UserName,Password){
        cy.get(this.elements.UserName).type(UserName)
        cy.get(this.elements.PassWord).type(Password)
        cy.get(this.elements.LoginBtn).click()
    }

    Logo(){
        cy.get(this.elements.Logo).should('be.visible')
    }


    ForgotPassword(){
        cy.get(this.elements.ForgotPass).click()
        cy.url().should('contain','requestPasswordResetCode')
        cy.title().should('eq','OrangeHRM')
    }

    
    SocialMediaIcons(){
        cy.get(this.elements.SocialIcons).children().should('have.length',4)
    }
}


