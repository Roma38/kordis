import React from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import {trs} from "../../../translations";
import {useSelector} from "react-redux";

import "./ShopPaymentResult.css";
import {useHistory} from "react-router-dom";

function ShopPaymentResultSuccess( params ) {
    return (
        <>
            <h1>{trs("THANKS_FOR_ORDER")}</h1>
            <p>{trs("THANKS_HINT")}</p>
            <button onClick= { () => { params.history.push( "/e-shop/"); }}>{trs("BACK_TO_PURCHASE")}</button>
        </>
    );
}

function ShopPaymentResultError( params ) {
    return (
        <>
            <h1>{trs("SHOP_PAYMENT_RESULT_ERROR")}</h1>
            <p>{trs("SHOP_PAYMENT_RESULT_HINT")}</p>
            <button onClick= { () => { params.history.push( "/e-shop/"); }}>{trs("BACK_TO_PURCHASE")}</button>
        </>
    );
}

function ShopPaymentResult( page ) {
    const status = page.location.pathname.split( "/" ).slice(-1)[0];
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const history = useHistory();

    const message =
        status === "success"
            ? <ShopPaymentResultSuccess history={ history }/>
            : <ShopPaymentResultError history={ history }/>;

    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper shop-transport-payment layout-main">
                <Breadcrumb
                    items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")},
                        {to: '/e-shop/cart', label: trs("YOUR_CART")},  {to: '/e-shop/invoice-details', label: trs("ENTER_BILLING_SHIPPING_INFO")},
                        {to: '/e-shop/summary', label: trs("ORDER_SUMMARY")},  {to: '#', label: trs("PAYMENT")}]}/>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-thanks-wrapper">
                        <div className="shop-thanks-info-wrapper">
                           { message }
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShopPaymentResult;