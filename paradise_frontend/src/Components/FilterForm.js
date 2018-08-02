import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        Where would you like to go?:<br />
        <input type="text" name="firstname" />
        <br />
        Departure Date:<br/>
        <input type="date" name="departdate" />
        <br />
        Return Date:<br />
        <input type="date" name="departdate" />
        <br />
        Budgeted amount:<br />
        <input type="text" name="Budget" />
        <br />
      </form>
    </div>
  );
};

export default Form;
