import React from 'react';
import { Link } from "react-router-dom";

import avatar from "../../assets/beautiful-2150881_640.png";
import { trs } from "../../translations";



function TopSection() {
  return (
    <div className="my-tickets-page__sections__wrapper">
      <section className="col-50">
        <h3 className="form-section-header">{trs("EXPECTED_PAYMENST")}</h3>
        <div className="my-tickets-page__row">
          <div className="my-tickets-page__row__left-col regular-text">
            <div>{trs("MONTHLY_TICKET_VALID_WITHIN_30_DAYS")}</div>
            <strong>699,- Kč</strong>
          </div>
          <button className="app-button">DETAIL</button>
        </div>

        <h3 className="form-section-header">{trs("ACCOUNT")} POSEIDON</h3>
        <div className="my-tickets-page__row">
          <div className="my-tickets-page__row__left-col">{trs("YOUR_CURRENT_ACCOUNT_BALANCE")}</div>
          <div className="regular-text my-tickets-page__row__right-col">{trs("NOT_CONNECTED")}</div>
        </div>

        <h3 className="form-section-header">{trs("CONNECTION_ACCOUNTS")}</h3>
        <div className="user-info-row">
          <div className="user-info-row__text">
            <img className="user-info-row__avatar" src={avatar} alt="avatar" />
            Jana Vondrušková <span>(j.vondruskova@email.cz)</span>
          </div>
          <button className="app-button">{trs("SWITCH_TO_YOUR_ACCOUNT")}</button>
        </div>

        <div className="user-info-row">
          <div className="user-info-row__text">
            <img className="user-info-row__avatar" src={avatar} alt="avatar" />
            Jan Vondruška <span>(vondrusak01@email.cz)</span>
          </div>
          <button className="app-button">{trs("SWITCH_TO_YOUR_ACCOUNT")}</button>
        </div>

        <h3 className="form-section-header">{trs("CONNECTION_REQUESTS")}</h3>
        <div className="user-info-row">
          <div className="user-info-row__text">
            <img className="user-info-row__avatar" src={avatar} alt="avatar" />
            Marie Dohnalová <span>(dohnalka@seznam.cz)</span>
          </div>
          <button className="app-button">{trs("CONNECT")}</button>
        </div>
      </section>

      <section className="col-50">
        <div className="flex-wrapper my-tickets-page__first-header">
          <h2 className="page-section-header">{trs("MY_MESSAGES")}</h2>
          <Link className="app-button" to={"/dashboard/messages"}>{trs("MORE")}</Link>
        </div>
        <table className="my-tickets-page__table">
          <tbody>
            <tr>
              <th>6. 1. 2020</th>
              <th>Nedostavil jste se k ověření totožnosti nebo slevy.</th>
            </tr>
            <tr className="regular-text">
              <td>8. 12. 2019</td>
              <td>Nedostavil jste se k ověření totožnosti nebo slevy.</td>
            </tr>
            <tr className="regular-text">
              <td>8. 12. 2019</td>
              <td>Nedostavil jste se k ověření totožnosti nebo slevy.</td>
            </tr>
            <tr className="regular-text">
              <td>10. 10. 2019</td>
              <td>Nedostavil jste se k ověření totožnosti nebo slevy.</td>
            </tr>
            <tr className="regular-text">
              <td>9. 9. 2019</td>
              <td>Nedostavil jste se k ověření totožnosti nebo slevy.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TopSection;
