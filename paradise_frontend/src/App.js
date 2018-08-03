import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/FilterForm'
import Header from './Components/Header'
import Flights from './Components/Flights'
import './Components/App.css'
import LoginForm from './Components/LoginForm';
import axios from 'axios'


class App extends Component {

  mainSearchForm = (city, deptureDate, returnDate, budget) => {
    axios.post('/search', {
      city,
      deptureDate,
      returnDate,
      budget
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  saveLogin = (name, password) => {
    axios.post('/login', {
      name,
      password
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    console.log(this.props.flights)
    return (
      <div className="App">
<<<<<<< HEAD
        <Header />
        <Link to='/'>Home</Link>
        <Link to='/flights'>FLIGHTS</Link>
        <Link to='/form'>Form</Link>
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          } />
          <Route path='/login' render={() =>
            <LoginForm saveLogin={this.saveLogin} />
          } />
          <Route path='/form' render={() =>
            <Form mainSearchForm={this.mainSearchForm}/>
          } />
          <Route path='/flights' render={() =>
            <Flights flights={this.props.flights} />
          } />
        </Switch>
=======
      <Header />
            
      <Link to='/'>Home</Link>
      <Link to='/flights'>FLIGHTS</Link>
      <Link to='/form'>Form</Link>
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
              <Route path='/flights' render={()=>
                <Flights flights={this.props.flights}/>
              }/>
            </Switch>
>>>>>>> 3884ee853fa66818ffd7dc2fabd63e84ac2a12c6
      </div>
    );
  }
}

export default App;
