import React, { Component } from 'react';

class Registration extends Component {

    componentDidMount() {
        this.props.changeAppPage("registration");
    }

    render() {

        return (
        
            <div className="container signup"> 
                <div className="container signup-container">
                    <div className="row">
                    
                        <div className="col"></div>
                        <div className="col-5 signup-column">
                        <div className="card signup-cards signup-leftcard">
                            <div className="card-block signup-heading">
                                    Register
                                
                                <div className="signup-details-container">
                                
                                    <input className="form-control signup-field" type="name" id="firstname" placeholder="First Name"></input>
                                    
                                    <input className="form-control signup-field" type="name" id="lastname" placeholder="Last Name"></input>
                                    
                                    <input className="form-control signup-field" type="phonenumber" id="phonenumber" placeholder="Phone Number"></input>

                                    <input className="form-control login-field" type="email" id="emailID" placeholder="Email Address"></input>
                                    
                                    <input className="form-control signup-field" type="password" id="formGroupExampleInput2" placeholder="Password"></input>
                                    </div>
                                
                                <button type="button" className="btn btn-success register-button">REGISTER</button>
                            </div>
                            </div>
                        
                        </div>
                        <div className="col-5 signup-column">
                        <div className="card signup-cards login-rightcard">
                            <div className="card-block already-account-mesg">
                                    If you already have an account click the button below to sign in.
                                
                                <button type="button" className="btn btn-success create-account-btn">LOGIN</button>
                                
                                <div className="text-OR">OR</div>
                                
                                <button type="button" className="btn btn-success facebook-login-btn">CONTINUE WITH facebook</button>
                                
                                <button type="button" className="btn btn-success google-login-btn">CONTINUE WITH google</button>
                                
                            </div>
                            
                            </div>
                        
                        </div>
                        <div className="col"></div>
                    
                    </div>
                    
                    
                
                </div>
            </div>
        );
    }
}

export default Registration;
