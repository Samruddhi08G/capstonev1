import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, addProductReducer,removeProductReducer } from "./productsReducer";
import {ShippingReducer } from './shippingInfoReducer';
import { shippingMethodReducer } from "./shippingMethodReducer";
import { paymentInformationReducer } from "./paymentMethodReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addCart :addProductReducer,
  shippingInfo : ShippingReducer,
  shippingMethod: shippingMethodReducer,
  paymentMethod : paymentInformationReducer,
  delCart: removeProductReducer,

});
export default reducers;
