import React from 'react';
import {trs} from "../../../../translations";

function BillingAdressForm() {

    return (
        <div className="billing-address-form invoice-details-form">
            <div className="billing-address-check-wrapper">
                <label className="container">
                    {trs("DIFFERENT_BILLING_ADDRESS")}
                    <input type="checkbox"/>
                        <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-group">
                <label>{trs("COMPANY_NAME")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("NAME_SURNAME")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("ADDRESS")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("CITY")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("POSTAL_CODE")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("STATE")}</label>
                <select>
                    <option>Česká republika</option>
                </select>
            </div>
            <div className="form-group">
                <label>{trs("CONTACT_EMAIL")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("CONTACT_PHONE")}</label>
                <div className="phone-number-wrapper">
                    <input type="text" className="code"/>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
}

export default BillingAdressForm;