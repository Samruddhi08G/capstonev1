import React from "react";
import './ordersummary.scss';
import ContactInformation from "../ContactInformationComponent/ContactInformation";
import OrderProduct from "../OrderProductComponent/OrderProduct";
import facebook_icon from './../../asset/facebook.png';
import insta_icon from './../../asset/instagram.png';
import twitter_icon from './../../asset/twitter.png';
import checkout_horizontal_image from './../../asset/max-width_header.png';


const OrderSummary =() =>{

    return(
        <section className="order-summary_section">
            <div className="order-summary_header">
                <label className="order-header-name">Order Successful</label>
                <div className="order-header-image">
                    <img src={checkout_horizontal_image} className="checkout-image" alt="Checkout-image" />
                </div>
            </div>
            <h4 className="order-number">Order Number #1700834</h4>
            <div className="order-summary_details">
                <div className="">

                    <div className="order-summary_grid">

                        <div className="">
                            <ContactInformation />
                            <OrderProduct />

                        </div>
                    </div>
                    <div className="order-summary_order-product-details">

                    </div>
                    <div className="order-des">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                <div className="order-summary_offer">
                    <p>
                        <h2>
                            Give us a follow<br />
                            to SAVE 20% <br />
                            on your next
                        </h2>
                        <div className="order-summary_social-icons">
                        <img src={facebook_icon} className="social-icons" alt="Facebook" />
                        <img src={insta_icon} className="social-icons" alt="Instagram" />
                        <img src={twitter_icon} className="social-icons" alt="Twitter" />
                        </div>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default OrderSummary;