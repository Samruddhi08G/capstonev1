import React from "react";
import './landingPageThirdBanner.scss';
import { useNavigate } from "react-router-dom";
import landingPage_third_banner from './../../asset/banner-image3.jpg';
import map_pin from './../../asset/mappin.png';
import checkout_horizontal_image from './../../asset/max-width_header.png';


const LandingPageThirdBanner = () =>{
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `/product`; 
      navigate(path);
   
  
    }

    return(
        <div className="landingpage-thirdbanner">
            <div className="landing-page-third-banner_image">
                <img src={landingPage_third_banner } className="third-banner-landingpage" alt="Landing Page Third Banner Image" /> 
            </div>
            
            <div className="landingpage_text-details">
                <div className="landingpage-thirdbanner-heading">
                    <h2>Conquer your next adventure </h2>
                    <p>Lorem Ipsum Dolor Temper</p>
                    <button class="shop-device-btn" onClick={routeChange}>SHOP DEVICES</button>
                   
                    
                </div>
                 
            </div>
            <div className="map-pin-image_section">
                <img src={map_pin } className="map-pin" alt="Locator" />
            </div>
            <div className="underline-section">
                <img src={checkout_horizontal_image} className="checkout-image" alt="Checkout-image" />
            </div>

        </div>
        
    )

};


export default LandingPageThirdBanner;