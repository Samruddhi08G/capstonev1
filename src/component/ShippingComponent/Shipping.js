import React, { useState } from "react";
import './shipping.scss';
import edit_image from './../../asset/edit-2.png';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { setshippingMethod } from "./../../redux/actions/shippingMethod";



const Shipping = () => {
    const { pathname } = useLocation();
    const [isEditMode, toggleEditMode] = useState(false);
    const { handleSubmit } = useForm({ shouldUnregister: false });
    const shippingMethod_Store = useSelector((state) => state.shippingMethod.shippingMethod);
    const [ShippingMethod_state, Set_ShippingMethod_state] = useState(shippingMethod_Store);
    let dispatch = useDispatch();
    const onSubmit = (data) => {
        toggleEditMode(!isEditMode);

        dispatch(setshippingMethod(ShippingMethod_state));
    }
    const onEdit = () => {
        toggleEditMode(!isEditMode);
    }



    const onchangeshippingMethod = (ev) => {
        let { value, name } = ev.target;
        Set_ShippingMethod_state(
            (pre) => {
                return {
                    ...pre,
                    [name]: value,
                }
            }
        )



    }
    return (
        <>        <div className="shipping-section">
            <div className="shipping-page">

                <div className="shipping_grid-section">
                    <div className="shipping_grid-details">

                        {isEditMode && pathname === "/contact" ? <form name="shipping-method-form" action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="shipping-selection">
                                <h3>2. Shipping Method</h3>
                                <div className="shipping-details">
                                    <div className="shipping_selection-row">
                                        <input type="radio" id="standard-shipping" name="radiobtn"
                                            checked={ShippingMethod_state.radiobtn === "Standard Shipping (4-8 business days via USPS) FREE"} value="Standard Shipping (4-8 business days via USPS) FREE" onChange={onchangeshippingMethod} />
                                        <label for="standard-shipping" className="shipping_labels">Standard Shipping (4-8 business days via USPS) FREE</label><br></br>
                                    </div>
                                    <div className="shipping_selection-row">
                                        <input type="radio" id="shipping_express-delivery" name="radiobtn"
                                            checked={ShippingMethod_state.radiobtn === "Express Delivery (2-5 business days via USPS) $17.95"} value="Express Delivery (2-5 business days via USPS) $17.95" onChange={onchangeshippingMethod} />
                                        <label for="shipping_express-delivery" className="shipping_labels">Express Delivery (2-5 business days via USPS) $17.95</label><br></br>
                                    </div>
                                    <div className="shipping_selection-row">
                                        <input type="radio" id="shipping_next-day-delivery" name="radiobtn"
                                            checked={ShippingMethod_state.radiobtn === "Next Day Delivery (Next business days via FedEx) $53.61"} value="Next Day Delivery (Next business days via FedEx) $53.61" onChange={onchangeshippingMethod} />
                                        <label for="shipping_next-day-delivery" className="shipping_labels">Next Day Delivery (Next business days via FedEx) $53.61</label><br></br>
                                    </div>
                                </div>
                                <div className="continue-btn continue-form-btn">
                                    <button className="form-btn">CONTINUE</button>
                                </div>
                            </div>
                        </form> : 
                        <div>
                        <section className="shipping-method_section">
                            <div className="guest-checkout_details shipping-method">
                                <div className="shipping-info">
                                    <h3>Shipping Method</h3>
                                    <div className="edit-details">
                                        <img src={edit_image} className="edit-image" alt="edit-image" onClick={() => onEdit()} />
                                        <label className="edit-label">Edit</label>
                                    </div>
                                </div>
                                <div className="payment-shipping_contact-details">
                                    <p className="">
                                        {shippingMethod_Store.radiobtn}
                                    </p>
    
                                </div>
                            </div>
                        </section>
                    </div>}

                    </div>

                   
                </div>
                

            </div>
        </div>
        </>


    )
};


export default Shipping;