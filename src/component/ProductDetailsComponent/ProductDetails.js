import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct,addProductsToCart} from "../../redux/actions/productsActions";
import './productdetails.scss';
import like_icon from './../../asset/heart.png';
import share_icon from './../../asset/share-2.png';
import img_loader from './../../asset/loader.webp';
import ProductDescription from './../ProductDescription/ProductDescription';
import { useNavigate } from "react-router-dom";



const ProductDetails = () => {
  const [likeProductArray, updateLikeArray] = useState([]);
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/cart`; 
    navigate(path);
    let p = { ...product };
        p.qty = quantity;
    dispatch(addProductsToCart(product))
    
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

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);

        }
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
        }
    }
  return (
    <section className="productDetails-section">
      <div className="wrapper">
      {Object.keys(product).length === 0 ? (
        <div>
          <img src={img_loader} className="loader" alt="Loader" />
        </div>
      ) : ( 
            <div className="productDetails">
              <div>
              <div class="prodcutDetails-grid">
                <div className="productDetails-column1">
                    <div className="column1-image">
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                    </div>
                </div>
                <div className="productDetails-column2">
                  <img src={image} className="image2" alt="Image2" />
                </div>
                <div className="productDetails-column3">
                  <div className="product-info">
                      <label className="productdetails-breadcrumb">Clothing/ Women's/ outerwear</label>
                      <h3>{title}</h3>
                      <h3>${price}</h3>
                      <div className="dummy-text">{description}</div>
                   </div>
                  
                   <div className="quantity-info">
                      <h4>Quantity</h4>
                      <div className="quantity-section-product-details">
                        <div className="minus-quantity"  onClick={handleDecrement} >-</div>                                    
                          <div className="number-block">{quantity}</div>
                          <div className="add-quantity" onClick={handleIncrement}>+</div>
                      </div>
                  </div>
                  <div class="buttons-icon-section">
                    
                      <button class="shop-btn" onClick={routeChange}>Add to Cart</button>
                    
                    <div className="like-icon-section">
                        {/* <img src={like_icon} className="icon" alt="Like Icon" /> */}
                        <svg onClick={() => onClick(product.id)} name={product.id} className="like" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                            transform="translate(-0.549 -1.998)" fill={likeProductArray?.includes(product.id) ? "#e26a2c" : "none"}
                            stroke={likeProductArray?.includes(product.id) ? "#e26a2c" : "#172026"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <label className="icons">Save</label>
                        <img src={share_icon} className="icon" alt="Share Icon" />
                        <label className="icons">Share</label>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            </div>
          )}
          <div>
            <ProductDescription />
          </div>
      </div>
       
    </section>
    
  );
};

export default ProductDetails;




































