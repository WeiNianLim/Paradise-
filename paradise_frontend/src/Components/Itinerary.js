import React, { Component } from "react";

import Activity from "./Activity";
import "./Itinerary.css"

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  printWindow = () => {
      window.print()
  }

  render() {
      const flightsMapped = this.props.flightsBooked.map((flight)=> {
          return(
              <div className="media flightCard2">
                        <img className="mr-3 flightsImage" src="http://104.236.16.159/wp-content/uploads/2013/03/Screen-shot-2013-03-17-at-11.27.43-PM.png" alt="Generic placeholder image"/>
                        <div className="media-body text-left">
                            <h5 className="mt-0">{flight.scheduledFlight[0].brand} Flight No: {flight.scheduledFlight[0].flightNumber}</h5>
                            <span>Departure:   {flight.scheduledFlight[0].departureTime}</span><br/>
                            <span>Arrival:  {flight.scheduledFlight[0].arrivalTime}</span>
                        </div>
                        <div className='mediaBody'>
                            
                        </div>
                    </div>
          )
      })
    return (
      <div>
          <div className='col-6 offset-3'>
        <div className='flightsBooked'>
            { this.props.flightsBooked.length > 0 ? <div> {flightsMapped} </div> : <h1>You have no flights selected</h1> }
        </div>

        </div>
          <button className='btn btn-success' onClick={()=> this.printWindow()}>Create PDF</button>
        <h1>August 10,2018</h1>
        {this.props.restaurants.map((item, index) => {
          return (
              <div className="ItineraryItem">
              {this.props.restaurants.length > 1 
               ?     <Activity
                    name={item.name}
                    contact={item.display_phone}
                    location={item.location.address1 +
                        " " + 
                        item.location.display_address[1]
                    }
                    item={this.props.restaurants[index]}
                    removeItem={this.props.removeItem}
                    refreshItem={this.props.refreshItem}
                    />
                : <h1>Loading</h1>}
            </div>
          );
        })}
        
            {console.log(this.props.restaurants)}
      </div>
    );
  }
}

export default Itinerary;
