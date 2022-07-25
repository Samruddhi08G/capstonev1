import React, { useEffect, useState }  from'react';
import './pd.scss';
import breathable from "./../../asset/breathable.png";
import sweat from "./../../asset/sweat.png";
import feather from "./../../asset/feather.png";
import material from "./../../asset/materials.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct,} from "../../redux/actions/productsActions";


const ProductDescription = () => {
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
  
    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [productId]);
    return (

          <section className="product-description-section">
                <div>
                 {Object.keys(product).length === 0 ? (
        <div>
          
        </div>
      ) : ( 
                <div className="product-description-grid">
                <h3>{title}</h3>
                    <div className="description-setion">
                        <div className="pd-info">
                        <h4>Description</h4>
                            <p className="des-font-details">{description}
                            </p>
                        </div>
                   
                    <div className="details-grid">
                        <div>
                        <h4>Details</h4>
                        </div>
                        <div></div>
                        <div className="sweat-wicking">
                        <label></label>
                            <img src={sweat} className="details-page-icons" alt="Sweat" /> 
                            <label>Sweat Wicking</label>
                        </div>
                        <div className="sweat-wicking">
                        
                            <img src={breathable} className="details-page-icons" alt="Breathable" /> 
                            <label>Breathable</label>
                        </div>
                        <div className="sweat-wicking">
                        
                             <img src={feather} className="details-page-icons" alt="feather" /> 
                            <label>Lightweight Fabric</label>
                        </div>
                        <div className="sweat-wicking">
                           
                             <img src={material} className="details-page-icons" alt="material" />  
                            <label>69% nylon, 31% lycra </label>
                        </div>
                        
                    </div>
                    </div>
                </div>
                 )}
                 </div>
            </section>
        )
    }

export default ProductDescription;