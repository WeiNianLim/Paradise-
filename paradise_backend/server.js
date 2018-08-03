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
let IATAList = [
    {
        "fs": "YVR",
        "iata": "YVR",
        "icao": "CYVR",
        "name": "Vancouver International Airport",
        "street1": "",
        "street2": "",
        "city": "Vancouver",
        "cityCode": "YVR",
        "stateCode": "BC",
        "postalCode": "V7B 1Y7",
        "countryCode": "CA",
        "countryName": "Canada",
        "regionName": "North America",
        "timeZoneRegionName": "America/Vancouver",
        "localTime": "2018-08-03T13:28:50.162",
        "utcOffsetHours": -7,
        "latitude": 49.194697,
        "longitude": -123.179191,
        "elevationFeet": 14,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/YVR?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/YVR?codeType=fs"
    },{
        "fs": "LAX",
        "iata": "LAX",
        "icao": "KLAX",
        "faa": "LAX",
        "name": "Los Angeles International Airport",
        "street1": "One World Way",
        "street2": "",
        "city": "Los Angeles",
        "cityCode": "LAX",
        "stateCode": "CA",
        "postalCode": "90045-5803",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/Los_Angeles",
        "weatherZone": "CAZ041",
        "localTime": "2018-08-03T13:29:37.253",
        "utcOffsetHours": -7,
        "latitude": 33.943399,
        "longitude": -118.408279,
        "elevationFeet": 126,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LAX?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LAX?codeType=fs"
    },{
        "fs": "SEA",
        "iata": "SEA",
        "icao": "KSEA",
        "faa": "SEA",
        "name": "Seattle-Tacoma International Airport",
        "city": "Seattle",
        "cityCode": "SEA",
        "stateCode": "WA",
        "postalCode": "98158",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/Los_Angeles",
        "weatherZone": "WAZ001",
        "localTime": "2018-08-03T13:31:43.908",
        "utcOffsetHours": -7,
        "latitude": 47.443839,
        "longitude": -122.301732,
        "elevationFeet": 429,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SEA?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SEA?codeType=fs"
    },{
        "fs": "JFK",
        "iata": "JFK",
        "icao": "KJFK",
        "faa": "JFK",
        "name": "John F. Kennedy International Airport",
        "street1": "JFK Airport",
        "city": "New York",
        "cityCode": "NYC",
        "stateCode": "NY",
        "postalCode": "11430",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/New_York",
        "weatherZone": "NYZ178",
        "localTime": "2018-08-03T16:33:02.052",
        "utcOffsetHours": -4,
        "latitude": 40.642335,
        "longitude": -73.78817,
        "elevationFeet": 13,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/JFK?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/JFK?codeType=fs"
    },{
        "fs": "BKK",
        "iata": "BKK",
        "icao": "VTBS",
        "name": "Suvarnabhumi Airport",
        "city": "Bangkok",
        "cityCode": "BKK",
        "countryCode": "TH",
        "countryName": "Thailand",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Bangkok",
        "localTime": "2018-08-04T03:34:09.787",
        "utcOffsetHours": 7,
        "latitude": 13.693062,
        "longitude": 100.752044,
        "elevationFeet": 9,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BKK?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BKK?codeType=fs"
    },{
        "fs": "ICN",
        "iata": "ICN",
        "icao": "RKSI",
        "name": "Incheon International Airport",
        "city": "Seoul",
        "cityCode": "SEL",
        "countryCode": "KR",
        "countryName": "Republic of Korea",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Seoul",
        "localTime": "2018-08-04T06:57:17.834",
        "utcOffsetHours": 9,
        "latitude": 37.448526,
        "longitude": 126.451234,
        "elevationFeet": 20,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ICN?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ICN?codeType=fs"
    },{
        "fs": "GMP",
        "iata": "GMP",
        "icao": "RKSS",
        "name": "Gimpo International Airport",
        "city": "Seoul",
        "cityCode": "SEL",
        "countryCode": "KR",
        "countryName": "Republic of Korea",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Seoul",
        "localTime": "2018-08-04T06:58:29.133",
        "utcOffsetHours": 9,
        "latitude": 37.559287,
        "longitude": 126.803512,
        "elevationFeet": 58,
        "classification": 2,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/GMP?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/GMP?codeType=fs"
    },{
        "fs": "NRT",
        "iata": "NRT",
        "icao": "RJAA",
        "name": "Narita International Airport",
        "street1": "成田空港第2PTB(バス), Narita",
        "street2": "Chiba Prefecture",
        "city": "Tokyo",
        "cityCode": "TYO",
        "countryCode": "JP",
        "countryName": "Japan",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Tokyo",
        "localTime": "2018-08-04T06:59:30.305",
        "utcOffsetHours": 9,
        "latitude": 35.773213,
        "longitude": 140.387443,
        "elevationFeet": 135,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/NRT?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/NRT?codeType=fs"
      
    },{
        "fs": "HND",
        "iata": "HND",
        "icao": "RJTT",
        "name": "Haneda Airport",
        "street1": "3丁目 Hanedakuko, Ota",
        "city": "Tokyo",
        "cityCode": "TYO",
        "countryCode": "JP",
        "countryName": "Japan",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Tokyo",
        "localTime": "2018-08-04T06:59:58.843",
        "utcOffsetHours": 9,
        "latitude": 35.549069,
        "longitude": 139.784524,
        "elevationFeet": 21,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HND?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HND?codeType=fs"
    
    }]
       


app.get('/', (req, res) => {
    res.send('hello')
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
        if (from.toLowerCase() === IATAList[i].city.toLowerCase() || from.toLowerCase() === IATAList[i].countryName.toLowerCase()){
            IATAfrom = IATAList[i].iata
            break;
        }
    }

    for (let i = 0 ; i < IATAList.length ; i++){
        if (to.toLowerCase() === IATAList[i].city.toLowerCase() || to.toLowerCase() === IATAList[i].countryName.toLowerCase()){
            IATAto = IATAList[i].iata
            break;
        }
    }
    
    axios.all([
            axios.get(`https://api.yelp.com/v3/businesses/search?location=${to}&term=restaurants&price=${priceStr}&limit=50`),
            axios.get(`https://api.flightstats.com/flex/connections/rest/v2/json/firstflightin/${IATAfrom}/to/${IATAto}/arriving_before/${departYear}/${departMonth}/${departDay}/00/00?appId=${flightAppId}&appKey=${flightApiKey}&numHours=6&maxConnections=1&includeSurface=false&payloadType=passenger&includeCodeshares=true&includeMultipleCarriers=true`),
            axios.get(`https://api.flightstats.com/flex/connections/rest/v2/json/lastflightin/${IATAto}/to/${IATAfrom}/arriving_before/${returnYear}/${returnMonth}/${returnDay}/00/00?appId=${flightAppId}&appKey=${flightApiKey}&numHours=6&maxConnections=1&includeSurface=false&payloadType=passenger&includeCodeshares=true&includeMultipleCarriers=true`)
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