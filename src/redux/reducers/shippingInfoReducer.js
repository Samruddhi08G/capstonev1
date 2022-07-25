const shippingInitialState={
    shippinginfodata:{
        email:"",

        phonenumber:"",

        countryname:"",

        firstname: "",

        lastname:"",

        streetaddress:"",

        streetaddress2:"",

        cityname:"",

        statename:"",

        zipcode:"",
    }
}

export const ShippingReducer = (state = shippingInitialState, { type, payload }) => {
    switch (type) {
        case "SET_SHIPPING_INFO_DATA":
            state = {shippinginfodata:payload}
            return state;
        default:
            return state;

    }
};