import React from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import {trs} from "../../../translations";
import BillingAddressForm from "../../../Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceComponents/BillingAddressForm";
import LegalEntityInvoice from "../../../Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceComponents/LegalEntityInvoice";
import IndividualInvoice from "../../../Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceComponents/IndividualInvoice";
import {useSelector} from "react-redux";

import "./ShopInvoiceDetails.css";
import {useHistory} from "react-router-dom";

function ShopInvoiceDetails(page) {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const locale = language === "cz" ? "cs-CZ" : "en-US";
    const history = useHistory();

    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")},
                    {to: '/e-shop/cart', label: trs("YOUR_CART")},  {to: '#', label: trs("ENTER_BILLING_SHIPPING_INFO")}]}/>
                <h1 className="page-header">{trs("ENTER_BILLING_SHIPPING_INFO")}</h1>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-invoice-details-wrapper">
                        <div className="forms-wrapper">
                            <div className="form-wrapper">
                                <label htmlFor="individual">{trs("PHYSICAL_PERSON")}</label>
                                <input type="radio" name="invoice_type" id="individual" checked={true} readOnly={true}/>
                                <IndividualInvoice/>
                            </div>
                            <div className="form-wrapper">
                                <label htmlFor="legal-entity">{trs("LEGAL_PERSON")}</label>
                                <input type="radio" name="invoice_type" id="legal-entity"/>
                                <LegalEntityInvoice/>
                            </div>
                        </div>
                        <div>
                            <BillingAddressForm/>
                        </div>
                        <div className="buttons-wrapper">
                            <button className="button-back" onClick= { () => { history.push( "/e-shop/cart/"); }}>{trs("TO_PREVIOUS_STEP")}</button>
                            <button className="button-continue" onClick= { () => { history.push( "/e-shop/summary/"); }}>{trs("CONTINUE_RECAP_ORDER")}</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShopInvoiceDetails;