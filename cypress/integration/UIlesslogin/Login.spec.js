describe('Validate the functionality of UI less login', () => {
    let Mail = "mahesh.aher1999@gmail.com"
    let Pass = 'Sonu@3232'

    beforeEach(function () {
        cy.getAndSetToken(Mail, Pass)
    })

    it('Using custom command', () => {
        cy.visit('https://react-redux.realworld.io/');
        cy.contains('Mahesh').should('be.visible');
    })



    it.only('UI less login', () => {
        cy.request({
            method: "POST",
            url: "https://api.realworld.io/api/users/login",
            body: {
                user: {
                    email: "mahesh.aher1999@gmail.com",
                    password: "Sonu@3232"
                }
            }
        }).then(function (res) {
            cy.log(res)
            let token = res.body.user.token
            localStorage.setItem('jwt', token)
            cy.visit('https://react-redux.realworld.io/');
            cy.contains('Mahesh').should('be.visible');

        })
    })
})