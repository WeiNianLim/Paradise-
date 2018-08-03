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

  mainSearchForm = (city, departureDate, returnDate, budget) => {
    axios.post('/search', {
      city,
      departureDate,
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
  render() {
    console.log(this.props.flights);
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
          
          <Route path="/form" render={() => <Form mainSearchForm={this.mainSearchForm}/>} />
          <Route
            path="/flights"
            render={() => <Flights flights={this.props.flights} />}
          />
          <Route
            path="/itinerary"
            render={() => <Itinerary restaurants={this.props.restaurants} />}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
