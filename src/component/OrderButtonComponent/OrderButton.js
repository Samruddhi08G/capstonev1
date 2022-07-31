import React, {useState} from "react";
import './orderbutton.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const OrderButton = () =>{
    const shippingMethod_Store = useSelector((state) => state.shippingMethod.shippingMethod);
    const paymentInformation_Store = useSelector((state) => state.paymentMethod.paymentInformation);
    const shippinginfodata_store = useSelector((state) => state.shippingInfo.shippinginfodata);
    const [placeorderbtnflag, Set_placeorderbtnflag] = useState({ ...shippinginfodata_store, ...shippingMethod_Store, ...paymentInformation_Store });
    useEffect(() => {
        Set_placeorderbtnflag(()=>{
            return {
                ...shippinginfodata_store, ...shippingMethod_Store, ...paymentInformation_Store
            }
              });
      
        console.log(placeorderbtnflag)
    }, [shippinginfodata_store, shippingMethod_Store, paymentInformation_Store])

    const toggle = () => {
        let flag = false;
        for (let key in placeorderbtnflag) {
            if (key !== 'streetaddress2' && !placeorderbtnflag[key]) {
                flag = true;
                break;

            }
        }
        
        return flag;

    }
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `/order`; 
      navigate(path);
   
    }

    return(
        <div className="continue-btn">
            <button className="form-btn" disabled={toggle()} onClick={() => routeChange('/order')}>PLACE ORDER</button>
        </div>
    )
}

export default OrderButton;