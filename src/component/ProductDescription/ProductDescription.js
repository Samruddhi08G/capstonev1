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
                <h4>{title}</h4>
                    <div className="description-setion">
                        <div className="pd-info">
                        <h5>Description</h5>
                            <p className="des-font-details">{description}
                            </p>
                        </div>
                   
                    <div className="details-grid">
                        <div>
                        <h5>Details</h5>
                        </div>
                        <div></div>
                        <div className="sweat-wicking">
                        <label></label>
                            <img src={sweat} className="details-page-icons" alt="Sweat" /> 
                            <label className='label-text'>Sweat Wicking</label>
                        </div>
                        <div className="sweat-wicking">
                        
                            <img src={breathable} className="details-page-icons" alt="Breathable" /> 
                            <label className='label-text'>Breathable</label>
                        </div>
                        <div className="sweat-wicking">
                        
                             <img src={feather} className="details-page-icons" alt="feather" /> 
                            <label className='label-text'>Lightweight Fabric</label>
                        </div>
                        <div className="sweat-wicking">
                           
                             <img src={material} className="details-page-icons" alt="material" />  
                            <label className='label-text'>69% nylon, 31% lycra </label>
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