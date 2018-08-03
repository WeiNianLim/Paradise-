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
    },{
      "id": "BKu4VGO2bW3nw8kc_ryumw",
      "alias": "bck-kitchen-and-cocktail-adventures-houston-2",
      "name": "BCK Kitchen & Cocktail Adventures",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/1wvGKj9ZsutogHLFOyDf7w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/bck-kitchen-and-cocktail-adventures-houston-2?adjust_creative=LmtVKn677FTz6Fl_j3D5gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LmtVKn677FTz6Fl_j3D5gA",
      "review_count": 243,
      "categories": [
        {
          "alias": "comfortfood",
          "title": "Comfort Food"
        },
        {
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "cocktailbars",
          "title": "Cocktail Bars"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 29.7887995448524,
        "longitude": -95.388083953373
      },
      "transactions": [
        "restaurant_reservation"
      ],
      "price": "$$",
      "location": {
        "address1": "933 Studewood St",
        "address2": "",
        "address3": null,
        "city": "Houston",
        "zip_code": "77008",
        "country": "US",
        "state": "TX",
        "display_address": [
          "933 Studewood St",
          "Houston, TX 77008"
        ]
      },
      "phone": "+18328317155",
      "display_phone": "(832) 831-7155",
      "distance": 3947.653192634301
    }, {
      "id": "yXUWJt41Dqg--ATSvfEuaA",
      "alias": "the-houston-club-houston",
      "name": "The Houston Club",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/U-Bax4wZjd4Pzy1AQT22gA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-houston-club-houston?adjust_creative=LmtVKn677FTz6Fl_j3D5gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LmtVKn677FTz6Fl_j3D5gA",
      "review_count": 19,
      "categories": [
        {
          "alias": "venues",
          "title": "Venues & Event Spaces"
        },
        {
          "alias": "newamerican",
          "title": "American (New)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 29.7588592,
        "longitude": -95.3674515
      },
      "transactions": [
        
      ],
      "price": "$$$",
      "location": {
        "address1": "910 Louisiana St",
        "address2": "Ste 4900",
        "address3": "",
        "city": "Houston",
        "zip_code": "77002",
        "country": "US",
        "state": "TX",
        "display_address": [
          "910 Louisiana St",
          "Ste 4900",
          "Houston, TX 77002"
        ]
      },
      "phone": "+17132253257",
      "display_phone": "(713) 225-3257",
      "distance": 861.7226752236731
    },
{
      "id": "I5XqZRCCCbNjW66I88SIzA",
      "alias": "kulture-houston",
      "name": "Kulture",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/vDqrAk-9Xobffcs65bye8w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/kulture-houston?adjust_creative=LmtVKn677FTz6Fl_j3D5gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LmtVKn677FTz6Fl_j3D5gA",
      "review_count": 117,
      "categories": [
        {
          "alias": "southern",
          "title": "Southern"
        },
        {
          "alias": "comfortfood",
          "title": "Comfort Food"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 29.7545999989511,
        "longitude": -95.3567959944427
      },
      "transactions": [
        
      ],
      "price": "$$",
      "location": {
        "address1": "701 Avenida De Las Americas",
        "address2": "Ste A",
        "address3": null,
        "city": "Houston",
        "zip_code": "77010",
        "country": "US",
        "state": "TX",
        "display_address": [
          "701 Avenida De Las Americas",
          "Ste A",
          "Houston, TX 77010"
        ]
      },
      "phone": "+17133579697",
      "display_phone": "(713) 357-9697",
      "distance": 985.2638705695078
    },
{
      "id": "I1VlZBW80UL3E3NvahlqXg",
      "alias": "oporto-fooding-house-and-wine-houston",
      "name": "Oporto Fooding House & Wine",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RhrtiLC1ynBCh6ICcU33_w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/oporto-fooding-house-and-wine-houston?adjust_creative=LmtVKn677FTz6Fl_j3D5gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=LmtVKn677FTz6Fl_j3D5gA",
      "review_count": 689,
      "categories": [
        {
          "alias": "tapasmallplates",
          "title": "Tapas/Small Plates"
        },
        {
          "alias": "portuguese",
          "title": "Portuguese"
        },
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 29.7531384239378,
        "longitude": -95.3802139853275
      },
      "transactions": [
        "pickup",
        "restaurant_reservation"
      ],
      "price": "$$",
      "location": {
        "address1": "125 W Gray Ave",
        "address2": "Ste 500",
        "address3": "",
        "city": "Houston",
        "zip_code": "77019",
        "country": "US",
        "state": "TX",
        "display_address": [
          "125 W Gray Ave",
          "Ste 500",
          "Houston, TX 77019"
        ]
      },
      "phone": "+17135280115",
      "display_phone": "(713) 528-0115",
      "distance": 2243.4905689654634
    }]
}`);

console.log(restaurants.businesses)

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
        <App 
        flights={flights} 
        restaurants={restaurants.businesses}/>
    </Router>
), document.getElementById('root'));

