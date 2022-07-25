import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './product.scss';


const ProductComponent = () => {
    const [likeProductArray, updateLikeArray] = useState([]);

    const onClick = (id) => {
      let wishlist = [];
      if (likeProductArray.includes(id)) { 
        wishlist = likeProductArray.filter((itemId)=> itemId !== id);
      } else {
        wishlist = [...likeProductArray, id];
      }
  
      updateLikeArray(wishlist);
    };
   
    const products = useSelector((state) => state.allProducts.products);
    const renderProductList = products.map((product) => {
    const { id, title, image, price, category } = product;

       return (
            <div className="productList-section">
                <div className="productList-grid1">
                    <div className="productList-items">
                        <Link to={`/product/${id}`}>
                            <div key={id} className="productList-image-section">
                                <img src={image} className="productListImage" alt={title} />
                            </div>
                        </Link>
                        <div className="productList-name-section">
                            <label>{title}</label>
                            <div className="productList-price">
                                <label>{price}</label>
                            </div>
                            {/* <img src={like_icon} className="" alt="Like Icon" /> */}
                            <svg onClick={() => onClick(product.id)} name={product.id} className="like" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                            transform="translate(-0.549 -1.998)" fill={likeProductArray?.includes(product.id) ? "#e26a2c" : "none"}
                            stroke={likeProductArray?.includes(product.id) ? "#e26a2c" : "#172026"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>

                        </div>
                    </div>

                </div>

            </div>
        );
    });
    return <div className="productList-grid">{renderProductList}

    </div>;


};

export default ProductComponent;


