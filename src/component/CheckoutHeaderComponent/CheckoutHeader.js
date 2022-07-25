import React from "react";
import './checkoutheader.scss';
import checkout_horizontal_image from './../../asset/max-width_header.png';

class CheckoutHeader extends React.Component{
    render(){
        return(
            <div>
                <label className="checkout-header-name">Checkout</label>
                <div className="image-checkout">
                    <img src={checkout_horizontal_image} className="checkout-image" alt="Checkout-image" />
                </div>
            </div>
        )
    }
}
export default CheckoutHeader;