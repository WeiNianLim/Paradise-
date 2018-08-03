import React, { Component } from "react";

import Activity from "./Activity";
import "./Itinerary.css";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  printWindow = () => {
    window.print();
  };

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={() => this.printWindow()}>
          Create PDF
        </button>
        <h1>August 10,2018</h1>
        {this.props.restaurants.length > 0 ? (
          this.props.restaurants.map((item, index) => {
            return (
              <div className="ItineraryItem">
                <Activity
                  name={item.name}
                  contact={item.display_phone}
                  location={
                    item.location.address1 +
                    " " +
                    item.location.display_address[1]
                  }
                  item={this.props.restaurants[index]}
                  removeItem={this.props.removeItem}
                  refreshItem={this.props.refreshItem}
                />
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default Itinerary;
