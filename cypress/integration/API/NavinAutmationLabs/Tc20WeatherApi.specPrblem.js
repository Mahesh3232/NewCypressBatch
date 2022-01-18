describe('Check weather Information', () => {
    it('get thr wheather information for Cities', () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=san"

        }).then((res) => {
            const Title = res.body[0].title
            return Title
        }).then((Title) => {
            cy.request({
                method: "GET",
                url: "https://www.metaweather.com/api/location/search/?query=" + Title
            }).then((res) => {
                expect(res.status).eq(200)
                expect(res.body[0]).to.have.property('title', Title)
            })
        })
    })



    // it.only('Get the wheather information for all cities', () => {
    //     cy.request({
    //         method: "GET",
    //         url: "https://www.metaweather.com/api/location/search/?query=Am"
    //     }).then((res) => {
    //         cy.log(res)
    //         cy.log(JSON.stringify(res))
    //         const Cities = res.body
    //         return  res.body
    //     }).then((Cities) => {
    //         for (let i = 0; i < Cities.lenght; i++) {
    //             cy.request({
    //                 method: "GET",
    //                 url: "https://www.metaweather.com/api/location/search/?query="+Cities[i].title
    //             }).then((res) => {
    //                  expect(res.status).eq(200)
    //                 expect(res.body[0]).to.have.property('title', Cities[i].title)
    //             })
    //         }

    //     })
    // })


    it.only('Get the wheather information for all cities', () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=Am"
        }).then((res) => {
            // cy.log(res)
    //         // cy.log(JSON.stringify(res))
            const Cities = res.body
            return Cities

        }).then((City) => {
        //cy.log(City)
        //cy.log(City[0].title)
            for (let i = 0; i < City.lenght-1; i++) {
                cy.log(City[i].title)
                cy.request({
                    method: "GET",
                    url: `https://www.metaweather.com/api/location/search/?query=${City[i].title}`
                }).then((res) => {
                     expect(res.status).eq(200)
                    expect(res.body[0]).to.have.property('title', City[i].title)
                })
            }

       })
     })
})