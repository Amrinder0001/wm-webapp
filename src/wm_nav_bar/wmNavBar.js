import React, { Component } from 'react';

import logo from '../assets/Logo-Nav.svg';
import { Link } from 'react-router-dom';

class WmNavBar extends Component {
    
    
    render() {

        return (
            
            <nav className="my-navbar navbar navbar-toggleable">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     {/* Main Nav bar which is named as WashMixNavBar short WmNavBar, 
                 this component is created separately to be used inside the 
                 main screen.
            */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="navbar-brand" href="/">
                        <img src={logo} alt=""></img>
                </a>
                
                {/* Unordered list container for the main navbar */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto ul-list">
                        <li className="list-item-left">
                            <Link className="left-link" to="/">Pricing</Link>
                        </li>

                        { this.props.currentAppPage !== "registration" &&

                        <li className="list-item-left">
                            <Link className="left-link" to="login">How It Works</Link>
                        </li>
                        }

                        { this.props.currentAppPage !== "registration" &&
                        <li className="list-item-left">
                            <Link  className="left-link" to="login">Contact Us</Link>
                        </li>

                        }
                    </ul>
                    <ul className="nav navbar-nav navbar-right upper-nav-right">
                        <li className="list-item-right signups">
                            <Link className="right-link" to="registration">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default WmNavBar;