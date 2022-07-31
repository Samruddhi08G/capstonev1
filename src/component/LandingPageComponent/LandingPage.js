import React from 'react';
import './landingPage.scss';
import hero_banner from './../../asset/hero-image-mobile.png';
import product_image_women from './../../asset/product-woman-image.jpeg';
import product_image_men from './../../asset/product-image-men.jpg';
import product_image_jewellery from './../../asset/product-image-jewellery.jpg';
import product_image_electronic_device from './../../asset/product-image-electronic-device.jpg';
import LandingPageSecondaryBanner from '../LandingPageSecondaryBannerComponent/LandingPageSecondaryBanner';
import LandingPageThirdBanner from './../LandingPageThirdBannerComponent/LandingPageThirdBanner';
import product_underline from './../../asset/max-width_header.png';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `/product`; 
      navigate(path);
}

    return (
        <section className="landing-page">
            <article>
                <div className="landing-page-banner_section">
                    <div className="landingpage_all-details">
                        <div className="landing-page-banner_heading">
                            <h2>Shop the New </h2>
                            <h2>Signature Collection</h2>
                        </div>
                        <div className="landing-page-banner_details">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="banner-button">
                            <button className="shop-btn" onClick={routeChange}>SHOP NOW</button>
                        </div>

                    </div>
                    <div className="landing-page-banner_image">
                        <img src={hero_banner} className="homepage-banner" alt="HomePage Banner Image" />
                    </div>
                </div>
                <div className="landing-page_product-section">
                    <div className="landing-page_product-details">
                        <div className="landing-page_product-image">
                            <img src={product_image_women} className="product-image" alt="Product Image" />
                            <div class="product-description">
                                <h3>Shop Women</h3>
                                <p>Lorem ipsum Dolor sit amet</p>
                                <img src={product_underline} className="product-underline" alt="product-underline"/>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page_product-details">
                        <div className="landing-page_product-image">
                            <img src={product_image_men} className="product-images" alt="Product Image" />
                            <div class="product-description">
                                <h3>Shop Men</h3>
                                <p>Lorem ipsum Dolor sit amet</p>
                                <img src={product_underline} className="product-underline" alt="product-underline"/>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page_product-details">
                        <div className="landing-page_product-image">
                            <img src={product_image_jewellery} className="product-images" alt="Product Image" />
                            <div class="product-description">
                                <h3>Jewellery</h3>
                                <p>Lorem ipsum Dolor sit amet</p>
                                <img src={product_underline} className="product-underline" alt="product-underline"/>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page_product-details">
                        <div className="landing-page_product-image">
                            <img src={product_image_electronic_device} className="product-images" alt="Product Image" />
                            <div class="product-description">
                                <h3>Electronics</h3>
                                <p>Lorem ipsum Dolor sit amet</p>
                                <img src={product_underline} className="product-underline" alt="product-underline"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-page_secondbanner-section">
                    <LandingPageSecondaryBanner />
                    <LandingPageThirdBanner />
                </div>

            </article>

        </section>
    )
};


export default LandingPage;