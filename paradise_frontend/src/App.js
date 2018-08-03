import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/FilterForm'
import Header from './Components/Header'
import Flights from './Components/Flights'
import './Components/App.css'
import LoginForm from './Components/LoginForm';
import axios from 'axios'


class App extends Component {

  saveLogin = (name, password) => {
    axios.post('/login', {
      name,
      password
    })
    .then( (response) => {
      console.log(response.data)
    })
    .catch( (error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <div className="App">
            <Switch>
              <Route exact path='/' render={()=>
              <Home />
              }/>
              <Route path='/login' render={()=> 
                <LoginForm saveLogin={this.saveLogin}/>
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
