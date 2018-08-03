const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser');
const port = process.argv[2] || 8080

const yelpApiKey = '-IxP22jhNAIYesa0OK8lZvKWJLjOLVfXiseq4JgfBVzGlr3QbKRjlVErQ_OhkQ2bAgtUkevXXwnZf2H_CM2n_gyg21zlZ9ut8BJRgtz-eZH9XYW7jiOUFty9LHVjW3Yx';
const flightApiKey = '00f6adb5ce9f6d83e36433d20d683190'
const flightAppId = 'de84c57a'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + yelpApiKey;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let departYear, departMonth, departDay, returnYear, returnMonth, returnDay = ''

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/search', (req, res) => {
    const { city, departureDate, returnDate, budget} = req.body
    departYear = departureDate.slice(0,4)
    departMonth = departureDate.slice(5,7)
    departDay = departureDate.slice(8,10)
    console.log(departDay)
    axios.all([
            axios.get(`https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants`),
            axios.get(`https://api.flightstats.com/flex/connections/rest/v2/json/firstflightin/YVR/to/LAX/arriving_before/${departYear}/${departMonth}/${departDay}/00/00?appId=${flightAppId}&appKey=${flightApiKey}&numHours=6&maxConnections=1&includeSurface=false&payloadType=passenger&includeCodeshares=true&includeMultipleCarriers=true`)
        ]).then(axios.spread(function (restaurantResponse, flightResponse) {
            res.send([restaurantResponse.data, flightResponse.data])
            console.log('Restaurant', restaurantResponse.data);
            console.log('Flight', flightResponse.data);
          }));
})

app.post('/login', (req, res) => {
    console.log(req.body.name + " " + req.body.password)
    res.json(req.body)
})