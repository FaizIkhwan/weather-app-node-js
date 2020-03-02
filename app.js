const request = require('request')

const url = 'https://api.darksky.net/forecast/49322f6afe96a4c8340860bc83a5a7d6/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
