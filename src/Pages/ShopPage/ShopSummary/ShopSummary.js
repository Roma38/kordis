import React, {useState} from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import {trs} from "../../../translations";
import CartItems from "../../../Pages/ShopPage/ShoppingCart/ShopCartItems/ShopCartItems";
import IndividualInvoice from "../../../Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceComponents/IndividualInvoice";
import BillingAddressForm from "../../../Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceComponents/BillingAddressForm";
import {useSelector} from "react-redux";

import "./ShopSummary.css";
import {useHistory} from "react-router-dom";

import terms_conditions_pdf from "../../../assets/shop/shop_terms_conditions.pdf";

function ShopSummary(page) {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const locale = language === "cz" ? "cs-CZ" : "en-US";
    const history = useHistory();
    const [termsConditions, setTermsConditions] = useState(false);
    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")},
                    {to: '/e-shop/cart', label: trs("YOUR_CART")}, {
                        to: '/e-shop/invoice-details',
                        label: trs("ENTER_BILLING_SHIPPING_INFO")
                    },
                    {to: '#', label: trs("ORDER_SUMMARY")}]}/>
                <h1 className="page-header">{trs("ORDER_SUMMARY")}</h1>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-summary-wrapper">
                        <div className="shopping-cart-wrapper">
                            <CartItems/>
                        </div>
                        <p className="form-type">{trs("PHYSICAL_PERSON")}</p>
                        <div className="shop-forms-wrapper">
                            <IndividualInvoice/>
                            <BillingAddressForm/>
                        </div>
                        <div className="form-section-header shop-summary">
                            <label className="switch-checkbox">   <input type="checkbox"
                                                                         id="terms_conditions"
                                                                         checked={termsConditions}
                                                                         onChange={() => setTermsConditions(!termsConditions)}
                            />
                                <span className="switch-slider"></span></label>
                            <label htmlFor="terms_conditions" onClick={() => {window.open(terms_conditions_pdf)}} className="form-section-header label-link"> Souhlasím s obchodními podmínkami KORDIS a.s.</label>
                        </div>
                        <div className="buttons-wrapper">
                            <button className="button-back" onClick={() => {
                                history.push("/e-shop/invoice-details/");
                            }}>{trs("TO_PREVIOUS_STEP")}</button>
                            <button className="button-continue" onClick={() => {
                              termsConditions ?  history.push("/e-shop/transport-payment/") : alert("Je nutné souhlasit s obchodními podmínkami")
                            }}>{trs("CONTINUE_FOR_PAYMENT")}</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
);
}

export default ShopSummary;