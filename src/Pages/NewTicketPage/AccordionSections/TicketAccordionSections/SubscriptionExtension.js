import React from 'react';
import { trs } from "../../../../translations";
import calendarIcon from "../../../../assets/icons8-calendar-48_(2).svg";


function SubscriptionExtension() {
  return (
    <section className="accordion--secondary__body ">
      <form className="flex-wrapper subscription-extension-form">
        <div className="col-50">
          <h2>ANTONÍN VONDRUŠKA</h2>
          <div className="input-group">
            <label className="col-40">{trs("NAME")}</label>
            <div className="col-60 regular-text">Měsíční jízdenka - platnost 30 dní</div>
          </div>

          <div className="input-group date-input">
            <label className="col-40">{trs("VALID_SINCE")}</label>
            <input className="input-field date-input-field" type="date" />
            <img src={calendarIcon} alt="calendar icon"/>
          </div>
          <div className="input-group">
            <label className="col-40">{trs("ZONE_VALIDITY")}</label>
            <div className="col-60 regular-text">Zóna 1, Zóna 2, Zóna 3</div>
          </div>
        </div>

        <div className="col-50">
          <div className="input-group">
            <label className="col-40">{trs("DATE_OF_BIRTH")}</label>
            <div className="col-60 regular-text">23. 9. 1980</div>
          </div>

          <div className="input-group">
            <label className="col-40">{trs("DISCOUNT_CATEGORY")}</label>
            <select className="input-field col-60">
              <option>Junior (18 - 25 let)</option>
            </select>
          </div>

          <div className="input-group">
            <label className="col-40">{trs("VALID_TILL")}</label>
            <div className="col-60 regular-text">7. 2. 2020</div>
          </div>
        </div>
      </form>

      <p className="regular-text">
        <span className="warning-text">{trs("NOTICE")}</span> {trs("YOU_ARE_NO_LONGER_ELIGIBLE_FOR_THE_")}
      </p>

      <p className="regular-text">
        <span className="success-text">Tip!</span> {trs("IF_YOU_WANT_TO_EXTEND_YOUR_TICKET_")}
      </p>

      <button className="app-button">{trs("SHOW_MORE")}</button>
    </section>
  );
}

export default SubscriptionExtension;