describe('Check weather Information', () => {

    // it('get the wheather information for Cities', () => {
    //     cy.request({
    //         method: "GET",
    //         url: "https://www.metaweather.com/api/location/search/?query=san"

    //     }).then((res) => {
    //         const Title = res.body[0].title
    //         return Title
    //     }).then((Title) => {
    //         cy.request({
    //             method: "GET",
    //             url: "https://www.metaweather.com/api/location/search/?query=" + Title
    //         }).then((res) => {
    //             expect(res.status).eq(200)
    //             expect(res.body[0]).to.have.property('title', Title)
    //         })
    //     })
    // })

    //   let Cities 

    //     it.only('Get the wheather information for all cities', () => {
    //         cy.request({
    //             method: "GET",
    //             url: "https://www.metaweather.com/api/location/search/?query=Am"
    //         }).then((res)=>{
    //             //cy.log(res)
    //             //cy.log(JSON.stringify(res))
    //              Cities = res.body
    //             //return Cities
    //         }).then(() => {
    //             //cy.log(Cities)
    //             for (let i = 0; i < Cities.lenght; i++) {
    //                 //cy.log(Cities[i].title)
    //                 cy.request({
    //                     method: "GET",
    //                     url: "https://www.metaweather.com/api/location/search/?query=" + Cities[i].title
    //                 }).then((res) => {
    //                     expect(res.status).eq(200)
    //                     expect(res.body[0]).to.have.property('title', Cities[i].title)
    //                 })
    //             }

    //         })
    //     })


    it.only('Get the wheather information for all cities', () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=Am"
        }).then((res) => {
            const Cities = res.body
            return Cities
        }).then((Cities) => {
            let k = Array.from(Cities).length
            for (let i = 0; i < k; i++) {
                cy.request({
                    method: "GET",
                    url: "https://www.metaweather.com/api/location/search/?query=" + Cities[i].title
                }).then((res) => {
                    expect(res.status).eq(200)
                    expect(res.body[0]).to.have.property('title', Cities[i].title)
                })
            }
        })
    })
})
