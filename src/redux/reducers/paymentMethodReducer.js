
 const paymentIntialState ={
  paymentInformation: {
     cardholdername: "",
     cardnumber:"",
     cvv: "",
 }
  
 };

export const paymentInformationReducer = (state = paymentIntialState, { type, payload }) => {
  
  switch (type) {
    case "SET_PAYMENT_INFORMATION":
      return { ...state, paymentInformation: payload };
   
    default:
      return state;
  }
};