import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          Logo
        </a>
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
            <button type="button" className="btn btn-outline-info" wfd-id="569">
              Log In
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
