import React from "react";

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
      <img  href="/" src="../Logo.png" style={{width:"75px"}} />        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          wfd-id="588"
        >
          <span class="navbar-toggler-icon" wfd-id="439" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03" wfd-id="431">
          <ul className="navbar-nav mr-auto" wfd-id="433" />
          <form className="form-inline my-2 my-lg-0" wfd-id="432">
            <Link to='/login'>
              <button type="button" className="btn btn-outline-info" wfd-id="569">
                Log In
            </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
