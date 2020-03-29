const request = require('request')

const url = 'https://api.darksky.net/forecast/49322f6afe96a4c8340860bc83a5a7d6/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(response.body)
    }    
})
