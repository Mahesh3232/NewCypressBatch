import { Dashboard } from '../../support/OrangeHrm/Dashboard'
import { homepage } from '../../support/OrangeHrm/Home'


describe('Validate Dashboard of the OrangeHrm', () => {
    let Dash = new Dashboard()
    let login = new homepage()

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        login.Login('Admin', 'admin123')
        cy.url().should('contain', 'dashboard')
    })

    it('Verify the Mainmenu of dashboard', () => {
        Dash.VerifyMenuTab()
    })

    it('Verify the Quick launch table', () => {
        Dash.VerifyQuickLaunch()
    })
    it('Verify the Lengen Table', () => {
        Dash.VerifyLegendTable()
    })

    it('Verify the dashboard page Logo', () => {
        Dash.VerifyLogo()
    })

    it('Varify the Admin tab', () => {
        Dash.VerifyAdmin()
    })

    it('Varify the PIM tab', () => {
        Dash.VerifyPIM()
    })

    it('Varify the Leave tab', () => {
        Dash.VerifyLeave()
    })

    it('Varify the Recruitment tab', () => {
        Dash.VerifyRecruitment()
    })

    it('Varify the Performance tab', () => {
        Dash.VerifyPerformance()
    })

    it('Varify the maintainess tab', () => {
        Dash.Verifymaintainess()
    })

    it('Varify the QuichLaunch tab Text', () => {
        Dash.VeridyEachElementinQuick()
    })

    it('Varify the Admin tab all elements Text', () => {
        Dash.VerifyAdminElText()
    })

    it('Varify the PIM tab all element Text', () => {
        Dash.VerifyPIMElText()
    })

    it('Varify the Leave tab elements Text', () => {
        Dash.VerifyLeaveElText()
    })

    it('Varify the Time tab elements Text', () => {
        Dash.VerifyTimeElText()
    })

    it('Varify the Recruitment tab elements Text', () => {
        Dash.VerifyRecruitmentElText()
    })

    it('Varify the PerformanceEleText tab elements Text', () => {
        Dash.VerifyPerformanceEleText()
    })

    it('Varify the maintainess tab elements Text', () => {
        Dash.Verifymaintainess()
    })

    it('Varify the Legend tab elements Text', () => {
        Dash.VerifyLegendTableElText()
    })

    it('Varify the Logout functionality', () => {
        Dash.VerifyLogout()
        login.Logo()
    })
})