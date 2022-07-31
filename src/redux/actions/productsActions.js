import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addProductsToCart = (p) => {

  return {

      type: ActionTypes.ADD_PRODUCTS_TO_CART,

      playload: p,

  };

};
//for remove item from cart
export const removeFromCart = (p) => {
  return {
      type: ActionTypes.DELETE_FROM_CART,
      playload: p,
  };
};

// export const removeSelectedProduct = (payload) => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//     payload
//   };
// };


// export const setFilter = (filter) => {
//   return {
//     type: ActionTypes.SET_FILTER,
//     payload: filter,
//   };
// };


// export const setWishlist = (id) => {
//   return {
//     type: ActionTypes.SET_WISHLIST,
//     payload: id,
//   };
// };


