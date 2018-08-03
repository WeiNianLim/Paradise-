import React, { Component } from "react";
import { Redirect } from 'react-router'

class Form extends Component {

  state = {
    loggedOn: false
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={ (e) => {
            e.preventDefault()
            const {City, DepartDate, ReturnDate, Budget } = e.target
            this.props.mainSearchForm(City.value, DepartDate.value, ReturnDate.value, Budget.value )
            this.setState({
              loggedOn: true
          })}} className='searchForm' autoComplete="off">

            <div className='row text-left'>
              <div className='col-2 offset-4'>
                City:<br />
                <input type="text" name="City" required />
                <br />
                Departure Date:<br />
                <input type="text" name="DepartDate" required />
                <br />
              </div>
              <div className='col-2'>
                Budget:<br />
                <input type="text" name="Budget" required />
                <br />
                Return Date:<br />
                <input type="text" name="ReturnDate" required />
                <br />
              </div>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
          {this.state.loggedOn && <Redirect to='/login' />}
        </div>
      </div>
    );
  };
}

export default Form;
