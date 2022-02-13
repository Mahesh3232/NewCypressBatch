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


export class Dashboard{
    elements={
        QuickLaunch:'table[class="quickLaungeContainer"]',
        MenuTab:'ul[id="mainMenuFirstLevelUnorderedList"]',
        Legend:'table[style="font-size:smaller;color:#545454"]',
        Logo:'#branding > a:nth-child(1) > img'
    }

    VerifyMenuTab(){
        cy.get(this.elements.MenuTab).children().should('have.length',11)
    }

    VerifyQuickLaunch(){
        cy.get(this.elements.QuickLaunch).find('tbody').find('tr').children().should('have.lenght',6)
    }
}