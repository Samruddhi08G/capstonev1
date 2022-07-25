import React, { Component } from "react";
import './banner.scss';
import banner_image from './../../asset/bannerImage.jpg';

class Banner extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="banner-container">
                    <div className="banner-block">
                        <h2>Women's</h2>
                        <h2>Outerwear</h2>
                    </div>
                    <div className="banner-image">
                        <img src={banner_image} className="Banner-image" alt="Banner" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
