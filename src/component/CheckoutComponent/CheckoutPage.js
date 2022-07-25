import React from "react";
import CheckoutHeader from "../CheckoutHeaderComponent/CheckoutHeader";
import PricingSummary from "../PricingSummaryComponent/PricingSummary";
import OrderProduct from "../OrderProductComponent/OrderProduct";
import OrderButton from './../OrderButtonComponent/OrderButton';
import './checkout.scss';


class CheckoutPage extends React.Component{
    render(){
        return(
            <section className="checkout-section">
                <div className="checkout-header">
                    <CheckoutHeader />
                </div>
                <div className="guest-checkout-section">
                    <h4>Guest Checkout</h4>
                </div>
                <div class="checkout_grid-section">
                    <div>
                       
                        <OrderProduct />
                        <OrderButton />
                    </div>
                    <div>
                        <PricingSummary />
                    </div>
                </div>
                    
           </section>

        )
    }
}

export default CheckoutPage;