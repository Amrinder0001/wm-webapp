import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../assets/Logo-Footer.svg'

class Footer extends Component {
    
    render() {
        return (
            
            <nav className="nav-bottom navbar navbar-toggleable-md navbar-light footer-nav">
                {/*  The footer is a static navbar */}
                
                
                {/* Add unordered list items to nav bar as links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    
                    <div className="row row-bottom">
                        <div className="col-4 bottom-cols wm-info-container">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                
                            <a className="navbar-brand" href="/">
                                <img src={footerlogo} alt=""></img>
                            </a>
                            
                            <div className="wm-info-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            
                            <div className="wm-copyrights-text">
                            &#169; 2017 WashMix, Inc. All Rights Reserved
                            </div>
                        </div>
                        
                        <div className="col-8 bottom-cols">
                            <div className="row row-bottom">
                            
                                <div className="col-4 bottom-cols">
                                    <div className="footer-wm-heading">
                                            WASHMIX
                                    </div>
                                    
                                    <div className="footer-links-container">
                                         <Link className="link-format" to="">How It Works</Link>
                                        
                                         <Link className="link-format" to="">Prices</Link>
                                    </div>
                                </div>
                                
                                <div className="col-4 bottom-cols">
                                    <div className="footer-wm-heading">
                                            ABOUT
                                    </div>
                                    
                                    <div className="footer-links-container">
                                    
                                        <Link className="link-format" to="">Our Story</Link>
                                        
                                        <Link className="link-format" to="">Meet the Team</Link>
                                        
                                        <Link className="link-format" to="">Terms of Service</Link>
                                        
                                        <Link className="link-format" to="">Privacy Policy</Link>
                                    </div>
                                </div>
                                
                                <div className="col-4 bottom-cols contact-container">
                                    <div className="footer-wm-heading">
                                            CONTACT US
                                    </div>
                                    
                                    
                                    
                                    <div className="footer-contact-info address-info">
                                    4949 Market St. San Francisco CA 94132
                                    </div>
                                    
                                    <div className="footer-contact-info cell-number">
                                    (408) 288 - 5555  
                                    </div>
                                    
                                    <div className="footer-contact-info">
                                    info@washmix.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Footer;