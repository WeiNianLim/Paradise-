import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Form from "./Components/FilterForm";
import Header from "./Components/Header";
import Flights from "./Components/Flights";
import "./Components/App.css";
import LoginForm from "./Components/LoginForm";
import Itinerary from "./Components/Itinerary";
import axios from "axios";

class App extends Component {
  state = {
    restaurants: this.props.restaurants,
          flightsReturn: [],
    flightsDeparture: []
  };

  removeItemHandler = (id) => {
    let itineraryArray = [...this.state.restaurants];
    let index = itineraryArray.findIndex(res => res.id === id);
    itineraryArray.splice(index, 1);
    this.setState({
      restaurants: itineraryArray
    });
  };

  refreshItemHandler = id => {
    let itineraryArray = [...this.state.restaurants];
    let index = itineraryArray.findIndex(res => res.id === id);
    itineraryArray.splice(index, 1,
      itineraryArray[Math.floor(Math.random() * itineraryArray.length - 1)]
    );
    console.log(itineraryArray);
    this.setState({
      restaurants: itineraryArray
    });
  };

  componentDidMount(){
    axios.get('/search')
        .then((response)=>{
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  mainSearchForm = (from, to, departureDate, returnDate, restaurantBudget) => {
    axios.post('/search', {
      from,
      to,
      departureDate,
      returnDate,
      restaurantBudget
    })
    
    .then((response) => {
      this.setState({
        restaurants: response.data[0].businesses
      })
        this.setState({
          flightsDeparture : response.data[1].connections,
          flightsReturn : response.data[2].connections,
        })
        console.log(response.data[1].connections)
        console.log(response.data[2].connections)
      })
      .catch(error => {
        console.log(error);
      });
  };

  saveLogin = (name, password) => {
    axios
      .post("/login", {
        name,
        password
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //-----flights page refresh function ----//
  getDepFlights = () => {
    
  }

  getRetFlights = () => {

  }

  render() {
    return (
      <div className="App">
     
        <Header />

        <Link to="/">Home</Link>
        <Link to="/flights">FLIGHTS</Link>
        <Link to="/form">Form</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/login"
            render={() => <LoginForm saveLogin={this.saveLogin} />}
          />

          <Route
            path="/form"
            render={() => <Form mainSearchForm={this.mainSearchForm} />}
          />
          <Route
            path="/flights"
            render={() => <Flights flightsReturn={this.state.flightsReturn} flightsDeparture={this.state.flightsDeparture} />}
          />
          <Route
            path="/itinerary"
            render={() => (
              <Itinerary
                removeItem={this.removeItemHandler}
                restaurants={this.state.restaurants}
                refreshItem={this.refreshItemHandler}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
