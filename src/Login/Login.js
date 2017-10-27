import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    componentWillMount() {
        this.props.changeAppPage("login");
    }

    render() {

        return (
        
            <div className="container login"> 
                <div className="container login-container">
                    <div className="row">
                        
                        {/* Row and Column system */}
                        <div className="col"></div>
                        
                        {/*} Column to hold left card for Login Details information. */}
                        
                        <div className="col-5">
                        <div className="card login-cards login-leftcard">
                            <div className="card-block login-heading">
                                    Login
                                
                                <div className="login-details-container">
                                
                                    <input className="login-field" type="email" class="form-control" id="loginUsername" placeholder="Username"></input>
                                    
                                    <input className="login-field" type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password"></input>
                                    </div>
                                
                                <div className="form-check form-check-container">
                                    <label className="form-check-label keep-signedin-label">
                                        <input className="form-check-input keep-signedin-checkbox" type="checkbox"></input>Keep me signed in
                                    </label>
                                </div>
                                
                                <button type="button" className="btn btn-success login-button">LOG IN</button>
                            </div>
                            </div>
                        
                        </div>
                        
                        {/*} Column to hold right card with options to create account if user if not already registered. */}
                        <div className="col-5">
                        <div className="card login-cards login-rightcard">
                            <div className="card-block create-account-mesg">
                                    If you don't already have an account click the button below to create your account.
                                
                                <button type="button" className="btn btn-success create-account-btn">CREATE ACCOUNT</button>
                                OR
                                <button type="button" className="btn btn-success facebook-login-btn">CONTINUE WITH facebook</button>         
                                <button type="button" className="btn btn-success google-login-btn">CONTINUE WITH google</button>
                                
                            </div>
                            
                            </div>
                        
                        </div>
                        <div className="col"></div>
                    
                    </div>
                    
                    {/* Row and column system to hold the bottom card to hold 'Forgot your password?' link. */}
                    <div className="row">
                    
                        <div className="col"></div>
                        <div className="col-10">
                        <div className="card login-bottomcard">
                            <div className="card-block forgetpass-text">
                                    So you can't get in to your account? Did you <Link className="password-forget" to="" >forget your password</Link> ?
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

export default Login;