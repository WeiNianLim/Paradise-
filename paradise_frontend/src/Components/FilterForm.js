import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        City:<br />
        <input type="text" name="firstname" />
        <br />
        Departure Date:<br />
        <input type="text" name="DepartDate" />
        <br />
        Return Date:<br />
        <input type="text" name="ReturnDate" />
        <br />
        Budget:<br />
        <input type="text" name="Budget" />
        <br />
      </form>
    </div>
  );
};

export default Form;
