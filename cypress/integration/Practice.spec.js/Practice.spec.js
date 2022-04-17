describe('Practice', () => {
    let arr =[]
    let obj ={}
    it('Count the boxes in each header', () => {
        cy.visit('https://way2automation.com/demo.html')
        cy.get('div[class="linkbox margin-bottom-20"]').each((el)=>{
            let objText =el.find('h1').text()
            let objLength=(el.find('ul').children().length)
            obj[objText]=objLength
        }).then(()=>{
            cy.log(obj)
        })
    })

    it('Sort the elements',()=>{
        cy.visit('https://way2automation.com/demo.html')
        cy.get('div[class="container main-nav"]>ul >li>a').each((el)=>{
            cy.log(el.text())
            arr.push(el.text())
        }).then(()=>{
            cy.log(arr.sort()).should('have.length',7)
        })
    })

    it('Print the pattern',()=>{
        // for(let i=1;i<=5;i++){
        //     cy.log('* '.repeat(i))
        // }

        // cy.log('___________________________________')

        // for(let i=5;i>=1;i--){
        //     cy.log('* '.repeat(i))
        // }

        // let num=[2,4,8,16,32]
        // for(let i=0;i<=num.length;i++){
        //     cy.log('* '.repeat(num[i]))
        //     console.log('* '.repeat(num[i]))
        // }
let str = "Hello my name is swapnali naikwadi what is your name"
let countOfa = 0
let countOfe = 0
let countOfi = 0
let countOfo = 0
let countOfu = 0

let ArrayStr = str.split("");
for (let i = 0; i <= ArrayStr.length - 1; i++) {
    let XX = ArrayStr[i]
    switch (XX) {
        case 'a':
            countOfa++;
            break;

        case 'e':
            countOfe++;
            break;

        case 'i':
            countOfi++;
            break;

        case 'o':
            countOfo++;
            break;

        case 'u':
            countOfu++;
            break;

    }
}

console.log('countOf a =', countOfa)
console.log('countOf e =', countOfe)
console.log('countOf i =', countOfi)
console.log('countOf o =', countOfo)
console.log('countOf u =', countOfu)
    })
})