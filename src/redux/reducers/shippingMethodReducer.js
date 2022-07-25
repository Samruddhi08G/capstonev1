// const shippingMethodInitialState={
//     checkoutShippingMethod:{
//         radio_btn_method:"",
//     }
// };

// export const ShippingMethodReducer = (state = shippingMethodInitialState, { type, payload }) => {
//     switch (type) {
//         case "SET_CHECKOUT_SHIPPING_METHOD":
//             state = {checkoutShippingMethod:payload}
//             return state;
//         default:
//             return state;

//     }
// };

const shippingMethodInitialState={

    shippingMethod:{

        radiobtn:"",

    }

};



export const shippingMethodReducer = (state = shippingMethodInitialState, { type, payload }) => {

    switch (type) {

        case "SET_SHIPPING_METHOD":

            state = {shippingMethod:payload}

            return state;

        default:

            return state;



    }

};