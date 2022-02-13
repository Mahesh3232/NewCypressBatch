export class Dashboard {

    elements = {
        QuickLaunch: 'table[class="quickLaungeContainer"]',
        MenuTab: 'ul[id="mainMenuFirstLevelUnorderedList"]',
        Legend: 'table[style="font-size:smaller;color:#545454"]',
        Logo: '#branding > a:nth-child(1) > img',
        Admin: 'li[class="main-menu-first-level-list-item"]',
        PIM: 'li[class="main-menu-first-level-list-item"]',
        Leave: 'li[class="main-menu-first-level-list-item"]',
        Time: 'li[class="main-menu-first-level-list-item"]',
        Recruitment: 'li[class="main-menu-first-level-list-item"]',
        performance: 'li[class="main-menu-first-level-list-item"]',
        maintainess: 'li[class="main-menu-first-level-list-item"]',
        AsignLeave: 'a[href="/index.php/leave/assignLeave"]',//last
        LeaveList: 'a[href="/index.php/leave/viewLeaveList"]',
        Timesheet: 'a[href="/index.php/time/viewEmployeeTimesheet"]',//last
        ApplyLeave: 'a[href="/index.php/leave/applyLeave"]',//last
        MyLeave: 'a[href="/index.php/leave/viewMyLeaveList"]',
        Mytimesheet: 'a[href="/index.php/time/viewMyTimesheet"]',
        QuickLaunch1: '.quickLaunge >a > span',
        Logout:'div[id="welcome-menu"] > ul '
    }

    VerifyMenuTab() {
        cy.get(this.elements.MenuTab).children().should('have.length', 11)
    }

    VerifyQuickLaunch() {
        cy.get(this.elements.QuickLaunch).find('tbody').find('tr').children().should('have.length', 6)
    }

    VerifyLegendTable() {
        cy.get(this.elements.Legend).find('tbody').children().should('have.length', 7)
    }

    VerifyLogo() {
        cy.get(this.elements.Logo).should('be.visible')
    }

    VerifyAdmin() {
        cy.get(this.elements.Admin).first().find('ul:first').children().should('have.length', 7)
    }

    VerifyPIM() {
        cy.get(this.elements.PIM).eq(1).find('ul:first').children().should('have.length', 4)
    }

    VerifyLeave() {
        cy.get(this.elements.Leave).eq(2).find('ul:first').children().should('have.length', 7)
    }

    VerifyTime() {
        cy.get(this.elements.Time).eq(3).find('ul:first').children().should('have.length', 4)
    }

    VerifyRecruitment() {
        cy.get(this.elements.Recruitment).eq(4).find('ul:first').children().should('have.length', 2)
    }

    VerifyPerformance() {
        cy.get(this.elements.PIM).eq(6).find('ul:first').children().should('have.length', 4)
    }

    Verifymaintainess() {
        cy.get(this.elements.performance).eq(8).find('ul:first').children().should('have.length', 2)
    }

    VeridyEachElementinQuick() {
        let EleText = ['Assign Leave', 'Leave List', 'Timesheets', 'Apply Leave', 'My Leave', 'My Timesheet']
        cy.get(this.elements.QuickLaunch1).each(function (el, index) {
            cy.wrap(el).should('have.text', EleText[index])
        })
    }

    VerifyAdminElText(){
        let text = ['User Management','Job','Organization','Qualifications','Nationalities','Corporate Branding','Configuration']
        cy.get(this.elements.Admin).first().find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyPIMElText() {
        let text = ['Configuration','Employee List','Add Employee','Reports']
        cy.get(this.elements.PIM).eq(1).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyLeaveElText() {
        let text=['Apply','My Leave','Entitlements','Reports','Configure','Leave List','Assign Leave']
        cy.get(this.elements.Leave).eq(2).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyTimeElText() {
        let text=['Timesheets','Attendance','Reports','Project Info']
        cy.get(this.elements.Time).eq(3).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyRecruitmentElText() {
        let text=['Candidates','Vacancies']
        cy.get(this.elements.Recruitment).eq(4).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyPerformanceEleText() {
        let text=['Configure','Manage Reviews','My Trackers','Employee Trackers']
        cy.get(this.elements.PIM).eq(6).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    Verifymaintainess() {
        let text=['Purge Records','Access Records']
        cy.get(this.elements.performance).eq(8).find('ul:first').children().each(function(el,index){
            cy.wrap(el).find('a:first').should('have.text',text[index])
        })
    }

    VerifyLegendTableElText() {
        let text =['Not assigned to Subunits','Administration','Client Services','Engineering','Finance','Human Resources','Sales & Marketing']
        cy.get(this.elements.Legend).find('tbody').children().each(function(el,index){
            cy.wrap(el).find('td:last').should('have.text',text[index])
        })
    }

    VerifyLogout() {
        cy.get(this.elements.Logout).children().last().find('a').click({force: true})
    }
}
