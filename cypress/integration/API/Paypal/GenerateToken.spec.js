
describe('Validate the Paypal Api', () => {
    let AcessToken = ""
    it('Validate the Ganarate Token Api', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QWZUOFdRX2I3bjR6ZGQ2YWtVYnhkY1g3TVpSSkFfTzJ2QVZhMW1XdGRlSF9uSTFtOUozdGdBelhaOHh3N3BGaXpleTdkUFhoU3RMYkIzMS06RUltZ19SWWZJbUdLV0hycjZXSU42Y19DenVDczFvQW5hd1hSaFJGRkhKaWxYMy1tRG9ZZndkdzN3TG5ZS2hVTmpXY2U0bFZTQmRRYk1oY18="
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true
        }).then((res) => {
            expect(res.status).to.eq(200)
            AcessToken = res.body.access_token
        })
    })

    it('Validate Create Order APi', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${AcessToken}`
            },
            body: {
                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ]
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
        })
    })
})