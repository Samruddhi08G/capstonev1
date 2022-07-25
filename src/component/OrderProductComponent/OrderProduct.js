import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, addProductsToCheckout } from "../../redux/actions/productsActions";
import './orderproduct.scss';




const OrderProduct =() =>{
    const items = useSelector(state=> state.addCart);
    const renderProductList = items.map((product) => {
    const {  id, title, image, price, category, description } = product;


    return(
        <section className="order-product_section" key={id} id={id}>
            <div className="guest-checkout_details shipping-method">
                <div className="shipping-info">
                    <label> Items in your order</label>
                   
                </div>
                <div className="order-product_details">
                    <div className="order-product_grid">
                        <p>
                          
                           <img src={image} className="order-image" alt="order-image" />
                        </p>
                        <p className="image-details">
                           <b>{title}</b><br />
                           <b> Price:</b>  {price} <br />
                           <b>Category:</b>  {category} <br />
                          
                        </p>
                    </div>
                    
                   
                </div>
               
             
            </div>
        </section>
    )
    });
    return <div className="cart-section">{renderProductList}</div>
  }


export default OrderProduct;