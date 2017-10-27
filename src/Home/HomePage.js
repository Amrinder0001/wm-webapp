import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    componentWillMount() {
        this.props.changeAppPage("home");
    }

    render() {

        return (
            <div className="container homepage-container">
                {/* Home Page main container */}
                {/* Row and column system to contain the Title information. */}
                <div className="row homeStart">
                    <div className="col"></div>
                    <div className="col-6 brandPurpose">
                        Laundry & Dry Cleaning</div>
                    <div className="col"></div>
                </div>
                
                {/* Row and Column system to contain ZIP Code and Start Your Order Button */} 
                <div className="row">
                    <div className="col"></div>
                    <div className="col-3 zip-code"> 
                        <input className="zip-code-form form-control form-control-lg" type="text" placeholder="City or Zip Code"></input>
                    </div>
                    <div className="col-3">  
                        <Link className="order-link" to="registration">START YOUR ORDER</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default HomePage;