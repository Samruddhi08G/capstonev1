import React, {useState, useEffect} from "react";
import './pricingsummary.scss';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

    const PricingSummary =() =>{
        const ValuePercentage = (discount, price) => {


            const discountedValue = price - (price * (discount / 100));
    
            return discountedValue < 0 ? discountedValue : discountedValue;
    
        }
    
        const [subTotal, setSubTotal] = useState(0);
    
        const [coupon, setCoupon] = useState(0);
    
        const [giftCard, setGiftCardValue] = useState(0);
    
        const [estimatedTax, setEstimatedTax] = useState(0);
    
        const [isshippingFree, setisshippingFree] = useState(true);
        const item_cart = useSelector(store => store.addCart);
 
        useEffect(() => {
    
            let total = 0;
    
            item_cart.forEach(item => {
                total = total + (item.price * item.qty);
    
            });
    console.log(total,'product total');
            setSubTotal(total);
    
            setCoupon(total - ValuePercentage(20, total));
    
            setGiftCardValue(total > 150 ? 100 : 0);
    
            setEstimatedTax(total - ValuePercentage(5, total));
    
            setisshippingFree(total > 500);
        }, [item_cart]);
    
        const getEstimatedTotal = () => {
    
            const es = isshippingFree ? 0 : 50;
    
            return subTotal - coupon - giftCard + estimatedTax + es;
    
        }
        console.log(subTotal,'temp');
    
        let navigate = useNavigate()
    
        // const navigateTOCheckout = () => {
        //     navigate("/contact")
        // }
        return(
            <div className="pricing-summary_section">
                
                <div className="pricing-summary_details">
                    <h3>Pricing Summary</h3>
                    <div className="pricing-details">
                        <label>Subtotal</label>
                        <label>$ {subTotal.toFixed(2)}</label>
                    </div>
                    <div className="pricing-details">
                        <label>Coupon</label>
                        <label>$ {coupon.toFixed(2)}</label>
                    </div>
                    <div className="pricing-details">
                        <label>Gift Card</label>
                        <label>$ {giftCard}</label>
                    </div>
                    <div className="pricing-details">
                        <label>Tax</label>
                        <label>$ {estimatedTax.toFixed(2)}</label>
                    </div>
                    <div className="pricing-details">
                        <label>Estimated Shipping</label>
                        <label>$ {getEstimatedTotal().toFixed(2)}</label>
                    </div>
                    <div className="pricing-details">
                        <label><b>Estimated Total</b></label>
                        <label><b>$ {getEstimatedTotal().toFixed(2)}</b></label>
                    </div>
                </div>
            </div>
        )
    }
       
  

export default PricingSummary;