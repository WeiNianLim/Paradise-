import React, {Component} from "react";

class Form extends Component {
  render(){
  return (
    <div>
      <div>
        <form method="post" action="/search" className='searchForm' autocomplete="off">
          <div className='row text-left'>
            <div className='col-2 offset-4'>
                  City:<br />
                  <input type="text" name="City" required />
                  <br />
                  Departure Date:<br />
                  <input type="date" name="DepartDate" required/>
                  <br />
              </div>
              <div className='col-2'>
                  Budget:<br />
                  <input type="text" name="Budget" required/>
                  <br />
                  Return Date:<br />
                  <input type="date" name="ReturnDate" required />
                  <br />
              </div>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};}

export default Form;
