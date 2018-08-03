import React, { Component } from "react";
import Activity from "./Activity";
import styles from "./Itinerary.css"

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>August 10,2018</h1>
        
        {this.props.restaurants.map((item, index) => {
          console.log(item.name);
          return (
              <div className={styles.itineraryItem}>
            <Activity
              name={item.name}
              contact={item.display_phone}
              location={
                item.location.address1 + 
                " " + 
                item.location.display_address[1]
              }
            />
            <button>Delete</button>
            <button>Refresh</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Itinerary;
