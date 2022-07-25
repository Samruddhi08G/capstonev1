import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../../redux/actions/productsActions";
import ProductComponent from "./../ProductComponent/Product";




const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const getProductList = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProductList();
  }, []);

  console.log("Products :", products);
  return (
    <div>
        <div className="">
            <ProductComponent />
        </div>
        
    </div>
  );
};

export default ProductList;



