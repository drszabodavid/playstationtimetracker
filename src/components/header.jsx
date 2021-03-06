import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./css/header.css";

class Header extends Component {

    render() {
        return (
            <div className="header-image">
                <div className="header-text">
                    <h1>
                        PlayStation Time Tracker</h1>
                    <p className="header-subtext">
                        Record how much time you waste on gaming
                    </p>
                    {this.props.user && (
                        <div>
                            <Link to="/" role="button" className="header-button">
                                <button className="header-button">Search</button>
                            </Link>
                            <Link to="/games" role="button" className="header-button">
                                <button>My games</button>
                            </Link>
                            <Link to="/logout" role="button" className="header-button">
                                <button style={{marginLeft: 10}}>Logout</button>
                            </Link>
                        </div>
                    )}
                    {!this.props.user && (
                        <div>
                            <Link to="/register" role="button" className="header-button">
                                <button className="header-button">Register</button>
                            </Link>
                            <Link to="/login" role="button" className="header-button">
                                <button>Login</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
