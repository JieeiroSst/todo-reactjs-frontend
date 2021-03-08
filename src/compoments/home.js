import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top"
            id="mainNav"
          >
            <div className="container">
              <NavLink className="navbar-brand js-scroll-trigger" to="/">
                keikibook-blog
              </NavLink>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <NavLink
                    className="nav-item"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    to="/login"
                  >
                    Login
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;
                  <NavLink
                    className="nav-item"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
      </BrowserRouter>
    );
  }
}

export default Home;