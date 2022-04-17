describe('Arrange the Headers As per alphabitical order', () => {
    
    it.only('Sort the element', () => {
        let text = ['Home', 'Interaction', 'Widget', 'Frames and Windows', 'Dynamic Elements', 'Registration', 'Alert']
        let Elements = []
        cy.visit('https://way2automation.com/demo.html')
        cy.get('div[class="container main-nav"] > ul >li >a').each((ele, index) => {
            //cy.log(ele.text())
            cy.wrap(ele).should('have.text', text[index])
            Elements.push(ele.text())
        }).then(() => {
            cy.log(Elements.sort())
        })
    })
    let obj = {}
    let arr = []
    it.only("Sort (a to z) navigation panel text and count boxes with respect to its parent (seperately)", () => {
        cy.visit("https://way2automation.com/demo.html");
        cy.get("#toggleNav >li >a").each((el) => {
            arr.push(el.text());
        }).then(() => {
            arr.sort()
            //cy.log(arr)
            //console.log(arr)
        })
        cy.get(".linkbox.margin-bottom-20").each((el) => {
            let objKey = el.find("h1").text()
            let objVal = (el.find('ul').children().length)
            obj[objKey] = objVal
        }).then(() => {
            cy.log(obj)
        })
    })

    it('Print the Pattern',()=>{
        for(let i =1;i<=5;i++){
            cy.log('* '.repeat(i))
        }

        // cy.log('***********Reverse***********')

        // for(let i =5;i>=1;i--){
        //     cy.log('* '.repeat(i))
        // }

        // for(let i=1;i<=5;i++){
        //     cy.log('* * * * *')
        // }
    })
})

// .children().find("a:first")