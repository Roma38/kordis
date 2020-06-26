import React from 'react';
import { trs } from "../../../translations";

import visa_electron_icon from "../../../assets/visa_electron_icon.png"
import visa_icon from "../../../assets/Visa_icon.png"
import maestro_icon from "../../../assets/maestro_icon.png"
import mastercard_icon from "../../../assets/mastercard_icon.png"

function Payment() {
  return (
    <section className="accordion__body">
      <form className="payment-card-form">
        <div className="flex-wrapper card-icons-group">
          <img src={mastercard_icon} alt="card icon" />
          <img src={maestro_icon} alt="card icon" />
          <img src={visa_icon} alt="card icon" />
          <img src={visa_electron_icon} alt="card icon" />
        </div>

        <div className="input-group">
          <label className="col-30">{trs("NUMBER_OF_CARD")}</label>
          <input className="input-field col-70" placeholder="XXXX - XXXX - XXXX - XXXX" />
        </div>

        <div className="input-group divided-date-selects">
          <label className="col-30">{trs("VALIDITY_CARD_TO")}</label>
          <select className="input-field col-30">
            <option>01</option>
          </select>
          <div className="date-divider"></div>
          <select className="input-field col-30">
            <option>20</option>
          </select>
        </div>

        <div className="input-group">
          <label className="col-30">{trs("VERIFICATION_CODE")}</label>
          <input className="input-field col-30-sm" />
          <div className="question-mark-badge">?</div>
        </div>

        <div className="flex-column">
          <div>
            <input type="checkbox" />
            <a href="https://www.idsjmk.cz/cenik/SPP.pdf" target="_blank" >
              <label className="success-text">{trs("I_AGREE_TO_TERMS_AND_CONDITIONS_OF_CARRIAGE")}</label>
            </a>
          </div>

          <label className="success-text">
            <input type="checkbox" /> {trs("SAVE_CREDIT_CARD")}
          </label>

          <label className="warning-text">
            <input type="checkbox" /> {trs("I_WANT_TO_AUTOMATICALLY_RENEW_MY_")}
          </label>
        </div>


        <button className="app-button app-button--primary full-width">{trs("PAY")}  699,00 KČ</button>
      </form>
    </section>
  );
}

export default Payment;