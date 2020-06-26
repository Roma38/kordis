import React from 'react';
import { trs } from "../../../translations";

function CardSelection() {
  return (
    <section className="accordion-body">
      <p className="regular-text">{trs("IN_ORDER_TO_BUY_TICKET_YOU_MUST_FIRST_")}</p>
      <h3 className="form-section-header">{trs("YOU_CAN_CURRENTLY_USE_THIS_YOUR_BANK_CARDS")}:</h3>
      <div className="new-ticket-page__card-group">
        <div className="new-ticket-page__card-group__item">
          <div className="air-bank card-form" />
          <button className="app-button">{trs("SHOW_TOKEN")}</button>
          <h4 className="new-ticket-page__card-group__item__header">{trs("CURRENTLY_VALID_ONE_TIME_TICKETS_FOR_THE_GIVEN_CARD")}</h4>

          <div className=" flex-wrapper">
            <div>{trs("MONTHLY_DISCOUNT__VALID_FOR_30_DAYS")}</div>
            <div className="regular-text">6. 1. 2020 - 2. 2. 2020</div>
          </div>
          <p className="regular-text">{trs("ZONE_VALIDITY")}: 100, 101</p>

          <div className=" flex-wrapper">
            <div>{trs("WEEKLY_DISCOUNTED__VALID_FOR_7_DAYS")}</div>
            <div className="regular-text">6. 1. 2020 - 2. 2. 2020</div>
          </div>
          <p className="regular-text">{trs("ZONE_VALIDITY")}: 356, 345, 321</p>

          <button className="app-button app-button--primary">{trs("USE_CARD")}</button>
        </div>

        <div className="new-ticket-page__card-group__item">
          <div className="moneta-bank card-form" />
          <button className="app-button">{trs("SHOW_TOKEN")}</button>
          <h4 className="new-ticket-page__card-group__item__header">{trs("CURRENTLY_VALID_ONE_TIME_TICKETS_FOR_THE_GIVEN_CARD")}</h4>
          <p className="regular-text">{trs("THERE_ARE_NO_VALID_TICKETS_CONNECTED_TO_THIS_CARD")}</p>
          <button className="app-button app-button--primary">{trs("USE_CARD")}</button>
        </div>

        <div className="new-ticket-page__card-group__item">
          <h3 className="form-section-header">{trs("ENTER_NEW_CARD")}</h3>
          <form className="new-card-form">
            <div className="input-group">
              <label className="col-20 regular-text">{trs("NICKNAME")}</label>
              <input className="input-field col-80" type="text" />
            </div>
            <div className="input-group">
              <input className="input-field full-width" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
            </div>
            <div className="input-group">
              <label className="col-30-sm regular-text">{trs("VALID_UNTIL")}</label>
              <select className="input-field col-30-sm"></select>
              <div className="date-divider" />
              <select className="input-field col-30-sm"></select>
            </div>
          </form>
          <button className="app-button app-button--primary">{trs("USE_CARD")}</button>
        </div>
      </div>
    </section>
  );
}

export default CardSelection;