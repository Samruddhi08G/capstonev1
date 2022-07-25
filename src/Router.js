import React from 'react';
import App from './App';
import Home from './component/HomeComponent/Home';
import ProductDetails from './component/ProductDetailsComponent/ProductDetails';
import Cart from './component/CartComponent/Cart';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import LandingPage from './component/LandingPageComponent/LandingPage';
import ContactInformation from './component/ContactInformationComponent/ContactInformation';
import Shipping from './component/ShippingComponent/Shipping';
import PaymentInformation from './component/PaymentInformationComponent/PaymentInfo';
import Checkout from './component/CheckoutComponent/CheckoutPage';
import OrderSummary from './component/OrderSummaryComponent/OrderSummary';

const Router = () =>(

    <BrowserRouter>
        <App>
            <Routes>
                <Route path="capstonev1" element={
                    <LandingPage />
                    // <Home />
                } />
                 <Route path="/product" element={
                    <Home />
                } />
                <Route path="/product/:productId" element={
                    <ProductDetails />
                } />
                <Route path="/cart" element={
                    <Cart />
                } />
                <Route path="/contact" element={
                    <ContactInformation />
                } />
                <Route path="/shipping" element={
                    <Shipping />
                } />
                <Route path="/payment" element={
                    <PaymentInformation />
                } />
                <Route path="/checkout" element={
                    <Checkout />
                } />
                <Route path="/order" element={
                    <OrderSummary />
                } />
                
            </Routes>
        </App>
    </BrowserRouter>
    
);
export default Router;