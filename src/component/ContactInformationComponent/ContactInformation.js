import React, { useState } from "react";
import PricingSummary from "../PricingSummaryComponent/PricingSummary";
import SignIn from './../SignInComponent/SignIn';
import CheckoutHeader from './../CheckoutHeaderComponent/CheckoutHeader';
import './contactInformation.scss';
import { useForm } from 'react-hook-form';
import edit_image from './../../asset/edit-2.png';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setshippingInfoData } from "../../redux/actions/shippingInformation";
import Shipping from "../ShippingComponent/Shipping";
import PaymentInfo from "./../PaymentInformationComponent/PaymentInfo";
import OrderButton from "../OrderButtonComponent/OrderButton";
import OrderProduct from "../OrderProductComponent/OrderProduct";


const ContactInformation = () => {

    const shippinginfodata_store = useSelector((state) => state.shippingInfo.shippinginfodata);
    const { pathname } = useLocation();
    const [ShippingInformation_state, Set_ShippingInformation_state] = useState(shippinginfodata_store);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all", defaultValues: ShippingInformation_state });



    const [isEditMode, toggleEditMode] = useState(true);


    let dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        toggleEditMode(false);
        Set_ShippingInformation_state(
            (pre) => {
                return { ...data };
            }
        );
        dispatch(setshippingInfoData(data))
    }
    const onEdit = () => {
        toggleEditMode(true);
    }



    return (
        <section className="contact-information_section">
            {pathname === "/contact" ? <div>
                <CheckoutHeader />
            </div> : ""}
            <div className="contact-information_grid-columns">
                <div className="contact-information_guest-checkout-column">
                    {pathname === "/contact" ? <div className="contact-information_details">
                        <h4><b>Guest Checkout</b></h4>
                        <h4 className="contact-information_heading"> Contact Information</h4>
                        <p className="contact-information">We’ll use these details to keep you informed on your delivery.</p>
                    </div> : ""}
                    <div className="contact-information_forms">
                        <div>
                            {isEditMode && pathname === "/contact" ? <form name="contact-info_form" className="" action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="contact-info_form shipping-details_form">
                                    <div>
                                        <label className="form-labels">Email</label><br />
                                        <input type="text" name="email" className="input-textbox" placeholder="abc@xyz.com"
                                            {...register('email', {

                                                required: 'Email id is required',

                                                pattern: {

                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                                                    message: 'Enter Valid Email ID',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.email?.message}</p>
                                    </div>
                                    <div>
                                        <label className="form-labels">Phone Number</label><br />
                                        <input type="number" name="phonenumber" className="input-textbox" placeholder="[222] 222 2222"
                                            {...register('phonenumber', {

                                                required: 'Phone number is required',

                                                pattern: {

                                                    value: /^[6-9]\d{9}$/,

                                                    message: 'Enter Valid Phone Number',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.phonenumber?.message}</p>
                                    </div>

                                    <div className="shipping-details_form">
                                        <h4><b>1. Shipping Information</b></h4>
                                    </div>
                                    <div></div>
                                    <div>
                                        <label className="form-labels">Country</label><br />
                                        <select name="countryname" id="countryname" className="input-textbox"
                                            {...register('countryname', {

                                                required: 'Country name is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Select Country Name',

                                                },

                                            })}>
                                            <option value="United States">India</option>
                                            <option value="United Kingdom">Belgium</option>
                                            <option value="Asia">Germany</option>
                                            <option value="Europe">Europe</option>
                                        </select><br />
                                        <p style={{ color: "red" }}>{errors?.countryname?.message}</p>
                                    </div>
                                    <div></div>

                                    <div>
                                        <label className="form-labels">First Name</label><br />
                                        <input type="text" name="firstname" className="input-textbox"
                                            {...register('firstname', {

                                                required: 'First name is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Enter First Name',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.firstname?.message}</p>
                                    </div>
                                    <div>
                                        <label className="form-labels">Last Name</label><br />
                                        <input type="text" name="lastname" className="input-textbox"
                                            {...register('lastname', {

                                                required: 'Last name is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Enter Last Name',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.lastname?.message}</p>
                                    </div>
                                    <div>
                                        <label className="form-labels">Street Address</label><br />
                                        <input type="text" name="streetaddress" className="input-textbox"
                                            {...register('streetaddress', {

                                                required: 'Street address is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Enter Street Address',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.streetaddress?.message}</p>
                                    </div>
                                    <div>
                                        <label className="form-labels">Street Address 2</label><br />
                                        <input type="text" name="streetaddress2" className="input-textbox"
                                            {...register('streetaddress2', {

                                                required: 'Street address2 is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Enter Street Address2',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.streetaddress2?.message}</p>
                                    </div>
                                    <div>
                                        <label className="form-labels">City</label><br />
                                        <input type="text" name="cityname" className="input-textbox"
                                            {...register('cityname', {

                                                required: 'City name is required',

                                                pattern: {

                                                    value: /^[A-Za-z ]+$/,

                                                    message: 'Enter City Name',

                                                },

                                            })} /><br />
                                        <p style={{ color: "red" }}>{errors?.cityname?.message}</p>
                                    </div>
                                    <div className="contact-information_state-details">
                                        <div>
                                            <label className="form-labels">State</label><br />
                                            <select name="statename" id="state-name"
                                                {...register('statename', {

                                                    required: 'State name is required',

                                                    pattern: {

                                                        value: /^[A-Za-z ]+$/,

                                                        message: 'Enter State Name',

                                                    },

                                                })}>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="HP">Himachal Pradesh</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="JK">Jammu Kashmir</option>
                                            </select><br />
                                            <p style={{ color: "red" }}>{errors?.statename?.message}</p>
                                        </div>
                                        <div>
                                            <label className="form-labels">Zip Code</label><br />
                                            <input type="number" name="zipcode" className="zipcode-input-textbox"
                                                {...register('zipcode', {

                                                    required: 'Zip Code is required',

                                                    pattern: {

                                                        value: /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/,

                                                        message: 'Enter Zipcode',

                                                    },

                                                })} /><br />
                                            <p style={{ color: "red" }}>{errors?.zipcode?.message}</p>
                                        </div>
                                    </div>

                                </div>
                                <button className="form-btn contiue-form-btn">CONTINUE</button>

                            </form> :
                            <div className="contact-information_list">
                            <div className="guest-checkout_details">
                                <div className="shipping-info">
                                    <h3>Shipping Information</h3>
                                    {pathname === "/contact" ? <div className="edit-details">
                                        <img src={edit_image} className="edit-image" alt="edit-image" onClick={() => onEdit()} />
                                        <label className="edit-label edit-line">Edit</label>
                                    </div> : ""}
                                </div>
                                <div className="shipping_contact-details">
                                    <p>

                                        {ShippingInformation_state.email}<br />{ShippingInformation_state.phonenumber}
                                    </p>
                                    <p>
                                        {ShippingInformation_state.countryname} <br />
                                        <b>{ShippingInformation_state.firstname}</b>&nbsp;&nbsp;<b>{ShippingInformation_state.lastname}</b><br />
                                        {ShippingInformation_state.streetaddress}&nbsp;&nbsp;{ShippingInformation_state.cityname}<br />
                                        {ShippingInformation_state.statename}&nbsp;&nbsp;{ShippingInformation_state.zipcode}
                                    </p>
                                </div>
                            </div>
                          
                        </div>}
                        </div>

                        <div>
                            <div className="order-shipping-section">
                                <Shipping />
                            </div>
                            <PaymentInfo />
                            <OrderProduct />
                        </div>
                        {/* <div>
                            <PaymentInfo />
                            
                        </div>
                        <div>
                            <OrderProduct />
                        </div> */}


                        <div className="contact-information_list"></div>
                    </div>
                    {pathname === "/contact" ?
                        <>
                            <OrderButton />
                        </>: ""}
                </div>
                {pathname === "/contact" ?<div className="contact-information_pricing-summary-column">
                    <SignIn />
                    <PricingSummary />
                </div>: ""}
            </div>
        </section>
    )

    // }

};
export default ContactInformation;