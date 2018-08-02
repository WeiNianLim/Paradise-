import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className='col-4 offset-4 homeButton'>
                    <button className='btn btn-lg btn-light'>Take me to</button>
                </div>
                <div className='col-4 offset-4 homeTitle'>
                    <h1>Paradise</h1>
                </div>
            </div>
            
        )
    }
}

export default Home