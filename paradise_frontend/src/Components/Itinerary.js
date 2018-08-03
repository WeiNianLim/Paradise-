import React, { Component } from "react";
import Activity from "./Activity";
import "./Itinerary.css"

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeItemHandler=(index)=>{

  }

  render() {
    return (
      <div>
        <h1>August 10,2018</h1>
        
        {this.props.restaurants.map((item, index) => {
          console.log(item.name);
          return (
              <div className="ItineraryItem">
            <Activity
              name={item.name}
              contact={item.display_phone}
              location={item.location.address1 +
                 " " + 
                 item.location.display_address[1]
              }
            />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Itinerary;
