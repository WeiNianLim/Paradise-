import React from 'react';

const Activity = (props) => {
    return ( 
        <div>
            <div>
                <img className='foodImage' src={props.image} alt='img'/>
            </div>

        <h3>{props.name}</h3>
        <h5>Location: {props.location}</h5>
        <h6>Contact: {props.contact}</h6>
        <button onClick={()=>props.removeItem(props.item.id)}>Delete</button>
        <button onClick={()=>props.refreshItem(props.item.id)}>Refresh</button>
        </div>
     );
}
 
export default Activity;