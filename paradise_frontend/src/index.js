import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

const restaurants = JSON.parse(`{
    "businesses": [{
        "id": "5MG_McXD1URWSryfn9sCdw",
        "alias": "hearsay-gastro-lounge-houston",
        "name": "Hearsay Market Square",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/VzTROQULnbAomGTJbK0f_w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/hearsay-gastro-lounge-houston?adjust_creative=LmtVKn677FTz6Fl_j3D5gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LmtVKn677FTz6Fl_j3D5gA",
        "review_count": 1407,
        "categories": [{
            "alias": "newamerican",
            "title": "American (New)"
        },
        {
            "alias": "gastropubs",
            "title": "Gastropubs"
        },
        {
            "alias": "cocktailbars",
            "title": "Cocktail Bars"
        }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 29.763046,
            "longitude": -95.3615717
        },
        "transactions": [
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "218 Travis St",
            "address2": "",
            "address3": "",
            "city": "Houston",
            "zip_code": "77002",
            "country": "US",
            "state": "TX",
            "display_address": [
                "218 Travis St",
                "Houston, TX 77002"
            ]
        },
        "phone": "+17132258079",
        "display_phone": "(713) 225-8079",
        "distance": 156.08700574818153
    }]
}`)

console.log(restaurants)

const flights = [{
     carrierFsCode: "QK",
     flightNumber: "8125",
     brand: "Air Canada Express",
     departureAirportFsCode: "YVR",
     arrivalAirportFsCode: "PDX",
     stops: 0,
     departureTime: "2018-10-10T13:35:00.000",
     arrivalTime: "2018-10-10T14:47:00.000",
     flightEquipmentIataCode: "DH4",
     isCodeshare: false,
     isWetlease: true,
     serviceType: "J",
     trafficRestrictions: [],
     codeshares: []
},
{
     carrierFsCode: "QK",
     flightNumber: "8125",
     brand: "Air Canada Express",
     departureAirportFsCode: "YVR",
     arrivalAirportFsCode: "PDX",
     stops: 0,
     departureTime: "2018-10-10T13:35:00.000",
     arrivalTime: "2018-10-10T14:47:00.000",
     flightEquipmentIataCode: "DH4",
     isCodeshare: false,
     isWetlease: true,
     serviceType: "J",
     trafficRestrictions: [],
     codeshares: []
},
{
     carrierFsCode: "QK",
     flightNumber: "8125",
     brand: "Air Canada Express",
     departureAirportFsCode: "YVR",
     arrivalAirportFsCode: "PDX",
     stops: 0,
     departureTime: "2018-10-10T13:35:00.000",
     arrivalTime: "2018-10-10T14:47:00.000",
     flightEquipmentIataCode: "DH4",
     isCodeshare: false,
     isWetlease: true,
     serviceType: "J",
     trafficRestrictions: [],
     codeshares: []
},]

  

ReactDOM.render((
    <Router>
        <App flights={flights}/>
    </Router>
), document.getElementById('root'));

