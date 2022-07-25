import React from "react";
import './landingPageSecondaryBanner.scss';
import landingPage_secondaryBanner_image from './../../asset/image.jpg';
import { useNavigate } from "react-router-dom";
import checkout_horizontal_image from './../../asset/max-width_header.png';

const LandingPageSecondaryBanner = () => {

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `/product`; 
      navigate(path);
    }

    return(
        <div className="landingPage-secondary-banner">
            <div className="landingpage-secondary-banner-alldetails">
                <h2>Take off in the new</h2>
                <h2>Signature Legging</h2>
                <h6>Lorem Ipsum Dolor Temper</h6>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="landingpage-secondarybanner_buttonsection">
                    <button className="shop-btn-secondarybanner shop-collection" onClick={routeChange}>SHOP COLLECTION</button>
                    <button className="shop-btn-secondarybanner shop-new" onClick={routeChange}>SHOP NEW</button>
                </div>
                <div className="underline_section">
                    <img src={checkout_horizontal_image} className="checkout-image" alt="Checkout-image" />
                </div>
            </div>
            <div className="landingpage-secondarybanner_image-section">
                <img src={landingPage_secondaryBanner_image} className="secondary-banner_landingpage" alt="Landing Page Secondary Banner Image" /> 
            </div>
        </div>
    )
};

export default LandingPageSecondaryBanner;