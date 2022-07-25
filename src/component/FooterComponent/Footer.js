import React from "react";
import './footer.scss';
import instalogo from './../../asset/instagram.png';
import fblogo from './../../asset/facebook.png';
import twitterlogo from './../../asset/twitter.png';
import logo from './../../asset/Venia-Logo.png';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                
                <div className="footer-content">
                   <div className="footer-content-grid">
                        <div className="">
                            <ul>
                                <li className="footer-header">Account</li>
                                <li>Sign In</li>
                                <li>Register</li>
                                <li>Order Status</li>
                                
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="footer-header">About Us</li>
                                <li>Our story</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="footer-header">Help</li>
                                <li>Contact Us</li>
                                <li>Order Status</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="footer-header">Follow us!</li>
                                <li>
                                    Lorem ipsum dolwe sit amet consecture
                                        adipiscing elit, sed to emtempred 
                                        incideunet ut labor et dolor.
                                    
                                </li>
                                <li className="social-icons">
                                    <img src={instalogo} className="insta-logo" alt="Instagram" />
                                    <img src={fblogo} className="fb-logo" alt="Facebook" />
                                    <img src={twitterlogo} className="twitter-logo" alt="Twitter" />
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                    
                </div>

                <div className="footer-bottom">
                    <img src={logo} className="footer-App-logo" alt="VeniaLogo" />
                    
                    <div className="footer-middle-menu">
                        <p>&copy;Company Name Address Ave, City Name, State ZP</p>
                    </div>
                    <div className="footer-menu">
                        <ul className="f-menu">
                             <li><a href="">Terms of use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer