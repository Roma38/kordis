import React from 'react';
import {trs} from "../../../../translations";

function LegalEntityInvoice() {

    return (
        <div className="legal-entity-invoice-form invoice-details-form">
            <h3>{trs("LEGAL_ENTITY_INFO")}</h3>
            <div className="form-group">
                <label>{trs("COMPANY_NAME")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("COMPANY_ID")}</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("TAX_IDENTIFICATION_NUM")}</label>
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
                <label>E-mail</label>
                <input type="text"/>
            </div>
            <div className="form-group">
                <label>{trs("CONTACT_PHONE")}</label>
                <div className="phone-number-wrapper">
                    <input type="text" className="code"/>
                    <input type="text"/>
                </div>
            </div>
            <div className="form-group">
                <label>{trs("NOTE")}</label>
                <textarea></textarea>
            </div>
        </div>
    );
}

export default LegalEntityInvoice;