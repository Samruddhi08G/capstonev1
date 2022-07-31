import React from "react";
import './signin.scss';

class SignIn extends React.Component{
    render(){
        return(
            <div className="sign-in_section">
                <div class="sign-in_details">
                  <h5>Sign in for express checkout</h5>
                  <button className="form-btn-sign-in">SIGN IN</button>
                </div>
            </div>
        )
    }
}
export default SignIn;