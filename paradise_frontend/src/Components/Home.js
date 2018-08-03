import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className='col-4 offset-4 homeButton'>
                    <h4>Take me to</h4>
                </div>
                <div className='col-4 offset-4'>
                <Link to='/form'><button className='btn bnpmtn-lg btn-outline-dark'><h1 className='homeTitle'>Paradise</h1></button></Link>
                    
                </div>
            </div>
            
        )
    }
}

export default Home