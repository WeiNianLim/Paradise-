import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

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

