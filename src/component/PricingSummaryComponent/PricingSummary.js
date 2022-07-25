import React from "react";
import './pricingsummary.scss';

class PricingSummary extends React.Component{
    render(){
        return(
            <div className="pricing-summary_section">
                
                <div className="pricing-summary_details">
                    <h3>Pricing Summary</h3>
                    <div className="pricing-details">
                        <label>Subtotal</label>
                        <label>$388.00</label>
                    </div>
                    <div className="pricing-details">
                        <label>Coupon</label>
                        <label>-$77.60</label>
                    </div>
                    <div className="pricing-details">
                        <label>Gift Card</label>
                        <label>-$100.00</label>
                    </div>
                    <div className="pricing-details">
                        <label>Tax</label>
                        <label>$23.28</label>
                    </div>
                    <div className="pricing-details">
                        <label>Estimated Shipping</label>
                        <label>FREE</label>
                    </div>
                    <div className="pricing-details">
                        <label><b>Estimated Total</b></label>
                        <label><b>$233.68</b></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingSummary;