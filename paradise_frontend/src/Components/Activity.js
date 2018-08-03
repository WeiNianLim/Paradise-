import React from 'react';

const Activity = (props) => {
    return ( 
        <div>
        <h3>{props.name}</h3>
        <h5>Location: {props.location}</h5>
        <h6>Contact: {props.contact}</h6>
        </div>
     );
}
 
export default Activity;