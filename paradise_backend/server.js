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

let IATAto, IATAfrom, departYear, departMonth, departDay, returnYear, returnMonth, returnDay = ''
let IATAList = []

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/search', (req, res) => {
    axios.get(`https://api.flightstats.com/flex/airports/rest/v1/json/active?appId=${flightAppId}&appKey=${flightApiKey}`)
        .then((response)=>{
          IATAList = response.data.airports
          console.log(response.data.airports)
          res.send('hi')
        })
        .catch((err) => {
          console.log(err)
        })
})

app.post('/search', (req, res) => {
    const { from, to, departureDate, returnDate, restaurantBudget } = req.body
    let priceStr = null
    if (restaurantBudget.length > 1)
        priceStr = restaurantBudget.slice(0, -1).join(',') + "," + restaurantBudget[restaurantBudget.length - 1]
    else priceStr = restaurantBudget[0]
    console.log(departureDate)
    console.log(returnDate)
    console.log(restaurantBudget)
    departYear = departureDate.slice(0,4)
    departMonth = departureDate.slice(5,7)
    departDay = departureDate.slice(8,10)
    returnYear = returnDate.slice(0,4)
    returnMonth = returnDate.slice(5,7)
    returnDay = returnDate.slice(8,10)

    for (let i = 0 ; i < IATAList.length ; i++){
        if (from.toLowerCase() === IATAList[i].city.toLowerCase()){
            IATAfrom = IATAList[i].fs
            break;
        }
    }

    for (let i = 0 ; i < IATAList.length ; i++){
        if (to.toLowerCase() === IATAList[i].city.toLowerCase()){
            IATAto = IATAList[i].fs
            break;
        }
    }
    
    axios.all([
            axios.get(`https://api.yelp.com/v3/businesses/search?location=${to}&term=restaurants&price=${priceStr}&limit=50`),
            axios.get(`https://api.flightstats.com/flex/connections/rest/v2/json/firstflightin/YVR/to/LAX/arriving_before/${departYear}/${departMonth}/${departDay}/00/00?appId=${flightAppId}&appKey=${flightApiKey}&numHours=6&maxConnections=1&includeSurface=false&payloadType=passenger&includeCodeshares=true&includeMultipleCarriers=true`),
            axios.get(`https://api.flightstats.com/flex/connections/rest/v2/json/lastflightin/LAX/to/YVR/arriving_before/${returnYear}/${returnMonth}/${returnDay}/00/00?appId=${flightAppId}&appKey=${flightApiKey}&numHours=6&maxConnections=1&includeSurface=false&payloadType=passenger&includeCodeshares=true&includeMultipleCarriers=true`)
        ]).then(axios.spread(function (restaurantResponse, flightDepartureResponse, flightReturningResponse){
            res.send([restaurantResponse.data, flightDepartureResponse.data, flightReturningResponse.data])
            console.log('Restaurant', restaurantResponse.data);
            console.log('Flight Departure', flightDepartureResponse.data);
            console.log('Flight Returning', flightReturningResponse.data);
          }))
          .catch((err) => {
            console.log(err)
          });
})

app.post('/login', (req, res) => {
    console.log(req.body.name + " " + req.body.password)
    res.json(req.body)
})