import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-image">
        <div className="header-text">
          <h1>PlayStation Time Counter</h1>
          <p className="header-subtext">Record how much time you waste on gaming</p>
          <div>
            <button className="header-button">Register</button>
            <button className="header-button">login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
