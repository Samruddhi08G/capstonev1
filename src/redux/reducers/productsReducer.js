import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// add product to cart
export const addProductReducer = (state = [], { type, playload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS_TO_CART:
       return [...state, ...[playload]]
        default:
        return state;

  }

};
//remove product from detail page
export const removeProductReducer = (state = [], { type, playload }) => {
  switch (type) {
      case ActionTypes.DELETE_FROM_CART:            
          return {};
      default:
          return state;
  }
};

//remove product from cart
// export const removeProductToCart = (state = [], { type, playload }) => {
//   switch (type) {
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//        return [...state, ...[playload]]
//         default:
//         return state;

//   }

// };


// export const wishlistReducer = (state = wishlistState, action) => {
  
//   switch (action.type) {
//     case ActionTypes.SET_WISHLIST:
//       let itemIds = cloneDeep(state.wishlist);
//       if(itemIds.includes(action.payload)){
//         itemIds = itemIds.filter(id=>id != action.payload)
//       }else{
//         itemIds = [...itemIds, action.payload]; 
//       }
//       return { ...state, wishlist: itemIds };
//     default:
//       return state;
//   }
// };

