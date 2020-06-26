import React from 'react';
import { trs } from "../../translations";

import avatar from "../../assets/avatar.png";

function MyValidTicketItem(params) {
  return (
    <div className="valid-ticket">
      <div className="valid-ticket-zone-header">{trs("YOUR_NEW_TICKET")}</div>
      <div className="valid-ticket-info-wrapper">
        <div className="valid-ticket-user-info-wrapper">
          <div className="valid-ticket-user-image">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="valid-ticket-user-info">
            <h2>ANTONÍN VONDRUŠKA</h2>
            <div className="valid-ticket-user-date">
              <span>{trs("BIRTH_DATE")}</span>
              <span>23. 9. 1980</span>
            </div>
          </div>
        </div>
        <div className="valid-ticket-info flex-column">
          <div className="valid-ticket-info-row">
            <span>{trs("CARRIER")}</span>
            <a className="carrier-link" href="#">1111 - 1111 - 1111 - 1111</a>
          </div>
          <div className="valid-ticket-info-row">
            <span>{trs("TITLE")}</span>
            <span>nevybráno</span>
          </div>
          <div className="valid-ticket-info-row">
            <span>{trs("ZONE_VALIDITY")}</span>
            <span>nevybráno</span>
          </div>
          <div className="valid-ticket-info-row">
            <span>{trs("VALID_SINCE")}</span>
            <span>-</span>
          </div>
          <div className="valid-ticket-info-row">
            <span>{trs("VALID_TILL")}</span>
            <span>-</span>
          </div>
          <div className="valid-ticket-info-row">
            <span>{trs("DISCOUNT_CATEGORY")}</span>
            <span>nevybráno</span>
          </div>
          <div className="valid-ticket__price align-right">699,- Kč</div>
        </div>
      </div>
    </div>
  );
}

export default MyValidTicketItem;