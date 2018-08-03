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
    restaurants: [],
    displayRestaurants: [],
    flightsReturn: [],
    flightsDeparture: [],
    flightsBooked: []
  };

  removeItemHandler = id => {
    let itineraryArray = [...this.state.displayRestaurants];
    console.log(itineraryArray);
    let index = itineraryArray.findIndex(res => res.id === id);
    console.log(index);
    itineraryArray.splice(index, 1);
    console.log(itineraryArray);
    this.setState({ displayRestaurants: itineraryArray });
  };

  refreshItemHandler = id => {
    let itineraryArray = [...this.state.displayRestaurants];
    let restaurantsCopy = [...this.state.restaurants];
    let displayIndex = itineraryArray.findIndex(res => res.id === id);
    let restaurantsIndex = Math.floor(
      Math.random() * (this.state.restaurants.length - 1)
    );
    itineraryArray.splice(
      displayIndex,
      1,
      this.state.restaurants[restaurantsIndex]
    );
    //removes from restaurants so there are no repeats
    //restaurantsCopy.splice(restaurantsIndex, 1);
    console.log(restaurantsCopy);
    this.setState({
      displayRestaurants: itineraryArray,
      restaurants: restaurantsCopy
    });
  };

  componentDidMount() {
    axios
      .get("/search")
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  mainSearchForm = (from, to, departureDate, returnDate, restaurantBudget) => {
    axios
      .post("/search", {
        from,
        to,
        departureDate,
        returnDate,
        restaurantBudget
      })

      .then(response => {
        let displayRestaurants;
        this.setState({
          restaurants: response.data[0].businesses.slice(
            3,
            response.data[0].businesses.length
          ),
          displayRestaurants: response.data[0].businesses.slice(0, 3)
        });
        this.setState({
          flightsDeparture: response.data[1].connections,
          flightsReturn: response.data[2].connections
        });
        console.log(response.data[1].connections);
        console.log(response.data[2].connections);
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

  addFlight = (flight) => {
    console.log(this.state.flightsBooked)
    this.setState({
      flightsBooked: this.state.flightsBooked.concat(flight)
    },()=> {console.log(this.state.flightsBooked)})
  }

  //-----flights page refresh function ----//
  // getDepFlights = () => {
  //   this.setState({
  //     flightsInfo: this.state.flightsInfo()
  //   })
  // }

  // getRetFlights = () => {
    
  // }
  
  

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
            render={() => <Flights flightsReturn={this.state.flightsReturn} 
                                  flightsDeparture={this.state.flightsDeparture}
                                  addFlight={this.addFlight}
                                   />}
          />
          <Route
            path="/itinerary"
            render={() => (
              <Itinerary
                removeItem={this.removeItemHandler}
                restaurants={this.state.displayRestaurants}
                refreshItem={this.refreshItemHandler}
                flightsBooked={this.state.flightsBooked}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
