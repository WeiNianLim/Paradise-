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
          <form onSubmit={(e) => {
            e.preventDefault()
            const { From, To, DepartDate, ReturnDate, $, $$, $$$, $$$$ } = e.target
            let tempBudget = [$,$$,$$$,$$$$].filter((item) => item.checked)
            let restaurantBudget = tempBudget.map((item) => item.value)

            this.props.mainSearchForm(From.value, To.value, DepartDate.value, ReturnDate.value, restaurantBudget)
            this.setState({
              loggedOn: true
            })
          }} className='searchForm' autoComplete="off">

            <div className='row text-left'>
              <div className='col-2 offset-4'>
                Leaving From:<br />
                <input type="text" name="From" required />
                Going to:<br />
                <input type="text" name="To" required />
                <br />
                Departure Date:<br />
                <input type="date" id='today'  name="DepartDate" required />
                <br />
                Return Date:<br />
                <input type="date" name="ReturnDate" required />
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
          {this.state.loggedOn && <Redirect to='/login' />}
        </div>
      </div>
    );
  };
}

export default Form;
