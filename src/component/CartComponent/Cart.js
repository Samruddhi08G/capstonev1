import React, { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, addProductsToCart } from "../../redux/actions/productsActions";
import './cart.scss';
import like_icon from './../../asset/like.png';
import edit_icon from './../../asset/edit-2.png';
import delete_icon from './../../asset/trash-2.png';
import button_image from './../../asset/PP_BTN.png';
import CartCarousel from './../CartCarouselComponent/CartCarousel';
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";



const Cart = () => {
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
     let path = `/contact`; 
     navigate(path);
}
const [likeProductArray, updateLikeArray] = useState([]);
const [quantity, setQuantity] = useState(1);
 const items = useSelector(state=> state.addCart);
 const renderProductList = items.map((product) => {
 const {  title, image, price, category, description } = product;

 
 const handleDecrement = () => {
     if (quantity > 1) {
         setQuantity(prevCount => prevCount - 1); // decrement quantity

     }
 }

 const handleIncrement = () => {
     if (quantity < 10) {
         setQuantity(prevCount => prevCount + 1); // increment quantity
     }
 }



    const onClick = (id) => {
      let wishlist = [];
      if (likeProductArray.includes(id)) { 
        wishlist = likeProductArray.filter((itemId)=> itemId !== id);
      } else {
        wishlist = [...likeProductArray, id];
      }
  
      updateLikeArray(wishlist);
    };

 return (

    <section className="cart-section">
      <div className="wrapper">
       
        <div className="cart-details">
          <h2>Your Shopping Bag</h2>
          <div className="cart-page-grid">
            <div className="cart-product-detail-section">
              <div className="cart-product-image-section">
                <img src={image} className="cart-image" alt="Cart-Image" />
              </div>
              <div className="product-details-section">
                <label className="name">{title}</label>
                <label className="size">Size:</label>
                <label className="color">Color:</label>
                <div>{price}</div>
              </div>
            </div>
            <div className="cart-product-quantity-section">
              <div className="quantity-info">
                <div className="quantity-section">
                  <div className="minus-quantity" >-</div>
                  <div className="number-block">{quantity}</div>
                  <div className="add-quantity">+</div>
                </div>
              </div>
            </div>
            <div className="edit-details-section">
              <div className="edit">
              <Link to={`/product/${product.id}`} ><img src={edit_icon} className="icon" alt="Edit Icon" /></Link>
                <label className="icon-name">Edit</label>
              </div>
              <div className="remove">
                <img src={delete_icon} className="icon" alt="Delete Icon" />
                <label className="icon-name">Delete</label>
              </div>
              <div className="saveForLater">
                {/* <img src={like_icon} className="icon" alt="Like Icon" /> */}
                <svg  onClick={() => onClick(product.id)} name={product.id} className="icon" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                            transform="translate(-0.549 -1.998)" fill={likeProductArray?.includes(product.id) ? "#e26a2c" : "none"}
                            stroke={likeProductArray?.includes(product.id) ? "#e26a2c" : "#e26a2c"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <label className="icon-name">Save for later</label>
              </div>
            </div>
            <div className="pricing-section">
              <div className="price-summary">
                <div className="price-header">Pricing Summary</div>
                <div className="price-details">
                  <div className="">Subtotal</div>
                  <div className="">$388.00</div>
                </div>
                <div className="price-details">
                  <div className="">Coupon</div>
                  <div className="">-$77.00</div>
                </div>
                <div className="price-details">
                  <div className="">Gift Card</div>
                  <div className="">-$100</div>
                </div>
                <div className="price-details">
                  <div className="">Estimated Tax</div>
                  <div className="">-$23.28</div>
                </div>
                <div className="price-details">
                  <div className="">Estimated Shipping</div>
                  <div className="">FREE</div>
                </div>
                <div className="price-details">
                  <div className="">Estimated Total</div>
                  <div className="">$233.68</div>
                </div>
                <div className="">
                  <div className="">
                    <button class="shop-btn" onClick={routeChange}>Checkout</button>
                  </div>
                  <div className="">
                    <img src={button_image} className="button-image" alt="Paypal-Image" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="estimation-block">
            <div className="estimated-values-section">
              <div className="est-flex">
                <label>Estimate your shipping</label>
                <label>Shipping to 911006</label>
              </div>
              <div className="est-flex">
                <label>Enter a Coupon Code</label>
                <label>20% discount applied</label>
              </div>
              <div className="est-flex">
                <label>Apply a Gift Card</label>
                <label></label>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      
        <div>
           <CartCarousel /> 
        </div>
      </div>

    </section>

  );
});
  return <div className="cart-section">{renderProductList}</div>
}


export default Cart;