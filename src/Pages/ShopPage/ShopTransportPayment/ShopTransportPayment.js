import React, {useState} from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import {trs} from "../../../translations";
import {useSelector} from "react-redux";

import "./ShopTransportPayment.css";

import transport_icon_1 from "../../../assets/shop/balik-do-ruky.png";
import transport_icon_3 from "../../../assets/shop/balik-na-postu.png";
import transport_icon_4 from "../../../assets/shop/balik-balikovna.png";
import payment_icon_1 from "../../../assets/shop/gopay.png";
import payment_icon_2 from "../../../assets/shop/dobirka.png";
import {useHistory} from "react-router-dom";

function ShopTransportPayment(page) {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const locale = language === "cz" ? "cs-CZ" : "en-US";
    const history = useHistory();
    const data = useSelector(state => state.shoppingCart.cart);
    const [postage, setPostage] = useState(0);
    const [payment, setPayment] = useState(0);

    let summary = 0;
    data.map((row) => {
        const count = row.quantity;
        const price = row.price;
        summary += count * price;
    });
    let summaryWithoutVat = Math.round(summary * 0.79);
    let postagePacking = Math.round(postage + payment);
    let finalSummary = (summary + postage + payment);
    localStorage.setItem("finalSummary", finalSummary);
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
                    <section className="shop-transport-payment-wrapper">
                        <div className="choose-transport">
                            <div className="header">
                                {trs("CHOOSE_TRANSPORT")}
                            </div>
                            <div className="choose-transport-row">
                                <input type="radio" name="transport" checked={postage === 120} onChange={() => setPostage(120)}/>
                                <img src={transport_icon_1} alt="transport type"/>
                                <div className="transport-type">
                                    <h3>{trs("TRANSPORT_TYPE_1")}</h3>
                                    <p>{trs("TRANSPORT_TYPE_HINT_1")}</p>
                                </div>
                                <div className="price">
                                    120,- Kč
                                </div>
                            </div>
                            <div className="choose-transport-row">
                                <input type="radio" name="transport" checked={postage === 120} onChange={() => setPostage(120)}/>
                                <img src={transport_icon_1} alt="transport type"/>
                                <div className="transport-type">
                                    <h3>{trs("TRANSPORT_TYPE_2")}</h3>
                                    <p>{trs("TRANSPORT_TYPE_HINT_2")}</p>
                                </div>
                                <div className="price">
                                    120,- Kč
                                </div>
                            </div>
                            <div className="choose-transport-row">
                                <input type="radio" name="transport" checked={postage === 120} onChange={() => setPostage(120)}/>
                                <img src={transport_icon_3} alt="transport type"/>
                                <div className="transport-type">
                                    <h3>{trs("TRANSPORT_TYPE_3")}</h3>
                                    <p>{trs("TRANSPORT_TYPE_HINT_3")}</p>
                                </div>
                                <div className="price">
                                    120,- Kč
                                </div>
                            </div>
                            <div className="choose-transport-row">
                                <input type="radio" name="transport" checked={postage === 120} onChange={() => setPostage(120)}/>
                                <img src={transport_icon_4} alt="transport type"/>
                                <div className="transport-type">
                                    <h3>{trs("TRANSPORT_TYPE_4")}</h3>
                                    <p>{trs("TRANSPORT_TYPE_HINT_4")}</p>
                                </div>
                                <div className="price">
                                    120,- Kč
                                </div>
                            </div>
                        </div>
                        <div className="choose-payment">
                            <div className="header">
                                {trs("CHOOSE_PAYMENT")}
                            </div>
                            <div className="choose-payment-row">
                                <input type="radio" name="payment" checked={payment === 0} onChange={() => setPayment(0)}/>
                                <img src={payment_icon_1} alt="payment type"/>
                                <div className="payment-type">
                                    <h3>{trs("PAYMENT_TYPE_1")}</h3>
                                    <p>{trs("PAYMENT_TYPE_HINT_1")}</p>
                                </div>
                                <div className="price">
                                    ZDARMA
                                </div>
                            </div>
                            <div className="choose-payment-row">
                                <input type="radio" name="payment" checked={payment === 29} onChange={() => setPayment(29)}/>
                                <img src={payment_icon_2} alt="payment type"/>
                                <div className="payment-type">
                                    <h3>{trs("PAYMENT_TYPE_2")}</h3>
                                    <p>{trs("PAYMENT_TYPE_HINT_2")}</p>
                                </div>
                                <div className="price">
                                    29,- Kč
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="shop-cart-summary-wrapper">
                        <div className="shop-cart-summary-row">
                            <span>{trs("SUMMARY_WITHOUT_VAT")}</span>
                            <span>{summaryWithoutVat},- Kč</span>
                        </div>
                        <div className="shop-cart-summary-row">
                            <span>{trs("SUMMARY_WITH_VAT")}</span>
                            <span>{summary},- Kč</span>
                        </div>
                        <div className="shop-cart-summary-row">
                            <span>{trs("POSTAGE_PACKING")}</span>
                            <span>{postagePacking},- Kč</span>
                        </div>
                        <div className="shop-cart-summary-row summary">
                            <span>{trs("SUMMARY")}</span>
                            <span>{finalSummary},- Kč</span>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <button className="button-back" onClick= { () => { history.push( "/e-shop/summary/"); }}>{trs("TO_PREVIOUS_STEP")}</button>
                        <button className="button-continue" onClick= { () => { history.push( "/e-shop/payment/"); }}>{trs("CONTINUE_FOR_PAYMENT")}</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ShopTransportPayment;