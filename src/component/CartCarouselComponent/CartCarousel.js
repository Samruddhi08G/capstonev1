import React from "react";
import './cc.scss';
import image1 from "./../../asset/cc_image1.jpg";
import image2 from "./../../asset/cc_image2.jpg";
import image3 from "./../../asset/cc_image3.jpg";
import image4 from "./../../asset/cc_image4.jpg";



const CartCarousel =()=>{
    return(
        <> 
        <section className="cart-carousel-section">
            <div className="cc-header">
                <h2 className="recent-view-heading">Recently View</h2>
            </div>
               

            <div className="cc-grid-section">
             
                <div className="cc-gridcolumn1">
                <div className="cc-img-row">
                <img src={image1} alt="Carousel-Image1" className="cc-img" />
                <h4><b>Laptop Bag</b></h4><br/>
                <h4><b>$92.84</b></h4><br/>
                </div>
              
                </div>
                <div className="cc-gridcolumn1">
                <div className="cc-img-row">
                <img src={image2} alt="Carousel-Image2" className="cc-img" />
                <h4><b>Mens Casual Slim Fit</b></h4><br/>
                <h4><b>$22.08</b></h4><br/>
                </div>
                
                </div>
                <div className="cc-gridcolumn1">
                <div className="cc-img-row">
                <img src={image3} alt="Carousel-Image3" className="cc-img" />
                <h4><b>Women's Snowboard Jacket</b></h4><br/>
                <h4><b>$110.67</b></h4><br/>
                </div>
               
                </div>
                <div className="cc-gridcolumn1">
                <div className="cc-img-row">
                <img src={image4} alt="Carousel-Image4" className="cc-img" />
                <h4><b>Rain Jacket Women</b></h4><br/>
                <h4><b>$34.00</b></h4><br/>
                </div>
                </div>
               
            </div>
             

        </section>
        </>
    )
}

export default CartCarousel;





