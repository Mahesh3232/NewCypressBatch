describe('Verify the date picker functionality', () => {

    it('Verify the datepicker', () => {
        // let date = new Date()
        // //date.getDate()
        // //cy.log(date)
        // let year = date.getFullYear()
        // cy.log(year)
        // //let month = date.toLocaleString('default', { month: "long" })
        // let month = date.getMonth()
        // cy.log(month + 1)
        // let dat = date.getDate()//todays date
        // cy.log(dat)
        // var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth() + 1;
        // var yyyy = today.getFullYear();
        // if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm } today =`${yyyy}-${mm}-${dd}`
        // document.write(today);

        // // today = yyyy + '-' + mm + '-' + dd;
        // // today =`${yyyy}-${mm}-${dd}`

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = Date(mm + '-' + dd + '-' + yyyy);
        document.write(today);

        cy.log(today)

        //cy.log(da)
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        // cy.get('#datepicker').click()
        // function SelectMonthYear() {

        //     cy.get('.datepicker-switch').first().then((el) => {
        //         if (!el.text().includes(year)) {
        //             cy.get('.next').first().click()
        //             SelectMonthYear()
        //         }
        //     }).then(() => {
        //         cy.get('.datepicker-switch').first().then((el) => {

        //             if (!el.text().includes(month)) {
        //                 cy.get('.next').first().click()
        //                 SelectMonthYear()
        //             }
        //         })
        //     })
        // } function SelectDate() {
        //     cy.get('.day').contains(dat).click()
        // }
        // SelectMonthYear()
        //SelectDate()
    })
})



