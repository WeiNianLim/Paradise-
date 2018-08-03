import React, {Component} from 'react'

class Flights extends Component {
    
    render(){
        console.log(this.props.flights)
        const {flights} = this.props
        const {returnFlights} = this.props
        let returnFlightsMapped = []
        let departFlightsMapped = []
        if (flights !== 0){
            departFlightsMapped = this.props.flights.map((flight) => {
                return(
                    <div className="media flightCard">
                        <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">{flight.scheduledFlight[0].brand} Flight No: {flight.scheduledFlight[0].flightNumber}</h5>
                            <span>Departure:   {flight.scheduledFlight[0].departureTime}</span><br/>
                            <span>Arrival:  {flight.scheduledFlight[0].arrivalTime}</span>
                        </div>
                        <div className='mediaBody'>
                        <button className='btn btn-md btn-outline-secondary'>Select flight</button>
                        </div>
                    </div>
                    )
                })
        }

        if (returnFlights !== 0){
            returnFlightsMapped = this.props.retrunFlights.map((flight)=>{
                return(
                    <div className="media flightCard">
                        <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">{flight.scheduledFlight[0].brand} Flight No: {flight.scheduledFlight[0].flightNumber}</h5>
                            <span>Departure:   {flight.scheduledFlight[0].departureTime}</span><br/>
                            <span>Arrival:  {flight.scheduledFlight[0].arrivalTime}</span>
                        </div>
                        <div className='mediaBody'>
                        <button className='btn btn-md btn-outline-secondary'>Select flight</button>
                        </div>
                    </div>
                )
            })
        }
        
        return(
            <div> 
                <div className='flightsList'>
                    {/* <h1 className='flightsTitle'>Flights departing from {this.props.flights[0].arrivalAirportFsCode}</h1> */}
                    {departFlightsMapped.length > 0 ? departFlightsMapped : <h1>Departure flights Loading....</h1>}
                </div>
                <div className='flightsList'>
                    {/* <h1 className='flightsTitle'>Flights returning from {this.props.flights[0].departureAirportFsCode}</h1> */}
                    {returnFlightsMapped.length > 0 ? returnFlightsMapped : <h1>Return flights Loading...</h1>}
                </div>
            </div>
        )
    }
}

export default Flights