import React, { useEffect, useState } from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import {trs} from "../../../translations";
import {useSelector} from "react-redux";
import axios from "axios";

import "./ShopPayment.css";
import goPayIcon from "../../../assets/shop/gopay_large.png";

import {useHistory} from "react-router-dom";
import { API_HOST } from '../../../constants';

// TODO - To be globally declared
const apiInstance = axios.create({
    baseURL: `${API_HOST}/api`,
});

function ShopTransportPayment() {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const data = useSelector(state => state.shoppingCart.cart);
    let summary = Math.round(data.reduce((total, obj) => obj.price + total,0) + 120); //+ postage 120 czech crowns
    const [ paymentButtonDisabled, setPaymentButtonDisabled ] = useState( false );
    if (localStorage.getItem("finalSummary") !== null) {
        summary = JSON.parse(localStorage.getItem('finalSummary'));
    }
    let user;

    // TODO - To be obtained from active session
    useEffect( () => {
        apiInstance.post( '/auth/login', {
            email: "p.mikulenka@altairgroup.eu",
            password: "1234"
        })
            .then( resp => {
                if ( resp.status === 200 && resp.data.success === true ) {
                    user = resp.data.user;
                    apiInstance.defaults.headers.common['Authorization'] = resp.data.token;
                }
            })
            .catch( err => {
                console.error( err );
            })
    });

    const createPayment = ( amount ) => {
        if ( user ) {
            apiInstance.post( '/finapi/payment', {
                    email: user.email,
                    phone: "",
                    amount: amount * 100,
                    currency: "CZK"
                })
                .then( resp => {
                    if ( resp.data.success === true && resp.data.link ) {
                        window.location.href = resp.data.link;
                    } else {
                        console.error( resp );
                        alert( "An error has occurred" );
                    }
                })
                .catch ( err => {
                    console.error( err );
                    alert( "An error has occurred" );
                })
        } else {
            alert( "Failed to fetch the user data" );
        }
    };

    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper shop-transport-payment layout-main">
                <Breadcrumb
                    items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")},
                        {to: '/e-shop/cart', label: trs("YOUR_CART")},  {to: '/e-shop/invoice-details', label: trs("ENTER_BILLING_SHIPPING_INFO")},
                        {to: '/e-shop/summary', label: trs("ORDER_SUMMARY")},  {to: '#', label: trs("PAYMENT")}]}/>
                <h1 className="page-header">{trs("PAYMENT")}</h1>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-payment-wrapper">
                        <div className="payment-wrapper">
                            <div className="card-payment-images-wrapper">
                                <img src={goPayIcon} alt="GoPay" />
                            </div>
                            <button
                                className = "card-payment-pay"
                                onClick = { () => {
                                    createPayment( summary );
                                    setPaymentButtonDisabled( true );
                                } }
                                disabled = { paymentButtonDisabled }
                            >{ trs( "PAY" ) } { summary },- Kč</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShopTransportPayment;