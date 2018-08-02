import React, {Component} from "react";

class Form extends Component {
  render(){
  return (
    <div>

      <div>
      <form className='searchForm'>
        <div className='row text-left'>
          <div className='col-2 offset-4'>
                City:<br />
                <input type="text" name="firstname" />
                <br />
                Departure Date:<br />
                <input type="text" name="DepartDate" />
                <br />
            </div>
            <div className='col-2'>
                Budget:<br />
                <input type="text" name="Budget" />
                <br />
                Return Date:<br />
                <input type="text" name="ReturnDate" />
                <br />
            </div>
          </div>
      </form>
      </div>
    </div>
  );
};}

export default Form;
