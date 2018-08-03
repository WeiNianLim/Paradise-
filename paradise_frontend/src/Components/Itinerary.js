import React, { Component } from 'react';
import Activity from "./Activity"

class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>August 10,2018</h1>
            <Activity 
            name={this.props.restaurants}

            />
            {console.log(this.props.restaurants[0].name)}
            </div>
         );
    }
}
 
export default Itinerary;
