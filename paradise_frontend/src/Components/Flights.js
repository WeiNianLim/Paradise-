import React, {Component} from 'react'

class Flights extends Component {
    
    render(){
        const {flightsReturn, flightsDeparture} = this.props
        let returnFlightsMapped, departFlightsMapped = []
        if (flightsDeparture !== 0){
            departFlightsMapped = this.props.flightsDeparture.map((flight) => {
                return(
                    <div className="media flightCard">
                        <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">{flight.scheduledFlight[0].departureAirportFsCode} -> {flight.scheduledFlight[0].arrivalAirportFsCode} </h5>
                            <h6>{flight.scheduledFlight[0].brand} Flight No: {flight.scheduledFlight[0].flightNumber}</h6>
                            <span>Departure:   {flight.scheduledFlight[0].departureTime}</span><br/>
                            <span>Arrival:  {flight.scheduledFlight[0].arrivalTime}</span>
                        </div>
                        <div className='mediaBody'>
                        <button className='btn btn-md btn-outline-secondary' onClick={()=> this.props.addFlight(flight)}>Select flight</button>
                        </div>
                    </div>
                    )
                })
        }

        if (flightsReturn !== 0){
            returnFlightsMapped = this.props.flightsReturn.map((flight)=>{
                return(
                    <div className="media flightCard">
                        <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">{flight.scheduledFlight[0].departureAirportFsCode} -> {flight.scheduledFlight[0].arrivalAirportFsCode} </h5>
                            <h6>{flight.scheduledFlight[0].brand} Flight No: {flight.scheduledFlight[0].flightNumber}</h6>
                            <span>Departure:   {flight.scheduledFlight[0].departureTime}</span><br/>
                            <span>Arrival:  {flight.scheduledFlight[0].arrivalTime}</span>
                        </div>
                        <div className='mediaBody'>
                        <button className='btn btn-md btn-outline-secondary' onClick={()=> this.props.addFlight(flight)}>Select flight</button>
                        </div>
                    </div>
                )
            })
        }
        
        return(
            <div> 
                <div className='flightsList'>
                    {departFlightsMapped.length > 0
                     ? <h1 className='flightsTitle'>Departing flights from {this.props.flightsDeparture[0].scheduledFlight[0].departureAirportFsCode}</h1> 
                     : <h1>Please be patient</h1>}
                    {departFlightsMapped.length > 0  ? departFlightsMapped : <h1>Your flights are being loaded</h1>}
                </div>
                <div>
                    {/* <button className='btn btn-success' onClick={()=> this.props.getDepFlights}>Refresh</button> */}
                </div>
                <div className='flightsList'>
                    {returnFlightsMapped.length > 0
                        ? <h1 className='flightsTitle'>Returning Flights from {this.props.flightsReturn[0].scheduledFlight[0].departureAirportFsCode}</h1> 
                        : <h1>Loading...</h1>}
                    {returnFlightsMapped.length > 0 ? returnFlightsMapped : <h1>....</h1>}
                </div>
                <div>
                    {/* <button className='btn btn-success' onClick={()=> this.props.getRetFlights}>Refresh</button> */}
                </div>
            </div>
        )
    }
}

export default Flights