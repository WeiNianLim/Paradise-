import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/FilterForm'
import Header from './Components/Header'
import './Components/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <Home />
            <Form />

      </div>
    );
  }
}

export default App;
