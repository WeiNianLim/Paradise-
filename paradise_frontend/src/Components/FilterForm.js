import React, { Component } from "react";
import { Redirect } from 'react-router'

class Form extends Component {
  state = {
    showFlights: false
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault()
            const { From, To, DepartDate, ReturnDate, $, $$, $$$, $$$$ } = e.target
            let tempBudget = [$,$$,$$$,$$$$].filter((item) => item.checked)
            let restaurantBudget = tempBudget.map((item) => item.value)

            this.props.mainSearchForm(From.value, To.value, DepartDate.value, ReturnDate.value, restaurantBudget)

            this.setState({
              showFlights: true
            })
          }} className='searchForm' autoComplete="off">

            <div className='row text-left'>
              <div className='col-2 offset-4'>
                Leaving From:<br />
                <input type="text" name="From" placeholder="City or Country" required />
                Going to:<br />
                <input type="text" name="To" placeholder="City or Country" required />
                <br />
                Departure Date:<br />
                <input type="date" id='today' name="DepartDate" min="2018-08-03"required />
                <br />
                Return Date:<br />
                <input type="date" min="2018-08-03" name="ReturnDate" required />
                <br />
              </div>
              <div className='col-2'>
                <fieldset>
                  Per Meal Budget:
                  <div>
                    <input type="checkbox" id="$" name="$"
                      value="1" />
                    <label htmlFor="$">$1-$10</label>
                  </div>

                  <div>
                    <input type="checkbox" id="$$" name="$$"
                      value="2" />
                    <label htmlFor="$$">$11-$30</label>
                  </div>

                  <div>
                    <input type="checkbox" id="$$$" name="$$$"
                      value="3" />
                    <label htmlFor="$$$">$31-$60</label>
                  </div>
                  <div>
                    <input type="checkbox" id="$$$$" name="$$$$"
                      value="4" />
                    <label htmlFor="$$$$">$61+</label>
                  </div>
                </fieldset>
               
              </div>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
        {this.state.showFlights? <Redirect to='/flights' /> : ''}
      </div>
    );
  };
}

export default Form;
