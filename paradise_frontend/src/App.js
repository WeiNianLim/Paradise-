import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/FilterForm'
import Header from './Components/Header'
import Flights from './Components/Flights'
import './Components/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
            <Switch>
              <Route exact path='/' render={()=>
              <Home />
              }/>
              <Route path='/form' render={()=> 
                <Form />
              }/>
              {/* <Route path='/flights' render={()=>{
                <Flights flights={this.props.flights}/>
              }}/> */}
            </Switch>
      </div>
    );
  }
}

export default App;
