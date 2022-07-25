import React, { useState } from "react";
import edit_image from './../../asset/edit-2.png';
import './paymentInfo.scss';
import { useForm } from 'react-hook-form';
import { setpaymentInformation } from './../../redux/actions/paymentMethod';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const PaymentInfo = () => {
    let dispatch = useDispatch();
    const paymentInformation_Store = useSelector((state) => state.paymentMethod.paymentInformation);
    const [PaymentInformation_state, Set_PaymentInformation_state] = useState(paymentInformation_Store);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all", defaultValues: PaymentInformation_state });

    const [isEditMode, toggleEditMode] = useState(false);

    const { pathname } = useLocation();

    const onSubmit = (data) => {
        toggleEditMode(!isEditMode);
        Set_PaymentInformation_state((p) => {
            return { ...data }
        })
        dispatch(setpaymentInformation(data))

        console.log("a", data);
    }

    const onEdit = () => {
        toggleEditMode(!isEditMode);
    }

    return (
        <>
            <div className="payment-information_section">
                <div className="payment-info_grid-section">
                    <div className="payment-info_grid-details">

                        <section className="payment-info">
                        {isEditMode && pathname === "/contact" ?  <form name="payment-form" action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="payment-information">
                                    <h3>3. Payment Information</h3>
                                    <div className="payment-information-Form-Section">
                                        <div name="payment-information-Form" className="payment-information-Form">
                                            <div className="payment-selection-row">
                                                <input type="radio" id="credit-payment" name="credit-payment"
                                                    value="credit-payment"
                                                />
                                                <label for="credit-payment" className="payment-info-Labels">Credit</label><br></br>
                                            </div>
                                            <div>
                                                <label className="form-labels">Name on Card</label><br />
                                                <input type="text" name="cardholdername" className="input-textbox"
                                                    {...register('cardholdername', {

                                                        required: 'Card holder name is required',

                                                        pattern: {

                                                            value: /^[A-Za-z ]+$/,

                                                            message: 'Enter Card Holder Name',

                                                        },

                                                    })} /><br />
                                                <p style={{ color: "red" }}>{errors?.cardholdername?.message}</p>
                                            </div>
                                            <div>
                                                <label className="form-labels">Credit Card Number</label><br />
                                                <input type="number" name="cardnumber" className="input-textbox"
                                                    {...register('cardnumber', {

                                                        required: 'Card number is required',

                                                        pattern: {

                                                            value: /^\d{16}$/,

                                                            message: 'Enter Valid Credit Card Number',

                                                        },

                                                    })} /><br />
                                                <p style={{ color: "red" }}>{errors?.cardnumber?.message}</p>
                                            </div>
                                            <div className="card-details">
                                                <label className="form-labels">Expiration Date</label><br />
                                                <label className="form-labels cvv-label">CVV</label><br />
                                            </div>
                                            <div className="card-details">
                                                <input type="date" name="expdate" className="input-textbox" /><br />
                                                <div>
                                                    <input type="text" name="cvv" className="cvv-input-textbox"
                                                        {...register('cvv', {

                                                            required: 'CVV is required',

                                                            pattern: {

                                                                value: /^\d{3}$/,

                                                                message: 'Enter Valid CVV',

                                                            },

                                                        })} /><br />
                                                    <p style={{ color: "red" }}>{errors?.cvv?.message}</p>
                                                </div>
                                            </div>
                                            <div className="payment-selection-row billing-address">
                                                <input type="checkbox" id="billing-address" name="billing-address" value="Bill Address" />
                                                <label for="billing-address" className="payment-info-Labels">Billing adress same as shipping address</label><br></br>
                                            </div>
                                        </div>
                                        <div className="checkout-shipping_payment-method"></div>
                                        <div className="payment-info_paypal">
                                            <input type="radio" id="credit-payment" name="paypal-payment"
                                                value="paypal-payment" />
                                            <label for="paypal-payment" className="payment-info-Labels">Paypal</label><br></br>

                                        </div>
                                        <div className="checkout-shipping_payment-method"></div>
                                        <div className="continue-btn">
                                            <button className="form-btn payment-info_continue-btn">CONTINUE</button>
                                        </div>
                                    </div>
                                </div>
                            </form>: 
                            <section className="payment-selection-details_section">
                            <div className="guest-checkout_details shipping-method">
                                <div className="shipping-info">
                                    <h3>Payment Infomation</h3>
                                    <div className="edit-details">
                                      <img src={edit_image} className="edit-image" alt="edit-image" onClick={() => onEdit()} /> 
                                        <label className="edit-label">Edit</label>
                                    </div>
                                </div>
                                <div className="payment-shipping_contact-details">
                                    <p>
                                        {PaymentInformation_state.cardholdername} <br />{PaymentInformation_state.cvv}
                                    </p>

                                </div>
                            </div>
                        </section>}
                        </section>  
                        
                    </div>


                </div>

            </div>
        </>
    )

};
export default PaymentInfo;