import React, {Component} from 'react'

class Flights extends Component {
    
    render(){
        console.log(this.props.flights)
        const departFlightsMapped = this.props.flights.map((flight)=> {
        return(
            <div className="media flightCard">
                <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                <div className="media-body text-left">
                    <h5 className="mt-0 flightInfo">{flight.brand} Flight No: {flight.flightNumber}</h5>
                    <span>Departure:   {flight.departureTime}</span><br/>
                    <span>Arrival:  {flight.arrivalTime}</span>
                </div>
                <div className='mediaBody'>
                <button className='btn btn-md btn-outline-secondary'>Select flight</button>
                </div>
            </div>
        )
    })
        return(
        <div>
            <div className='flightsList'>
            <h1 className='flightsTitle'>Flights departing from {this.props.flights[0].arrivalAirportFsCode}</h1>
            {departFlightsMapped}
            </div>
            <div className='flightsList'>
                <h1 className='flightsTitle'>Flights returning from {this.props.flights[0].departureAirportFsCode}</h1>
                {departFlightsMapped}
            </div>
        </div>
        )
    }
}

export default Flights