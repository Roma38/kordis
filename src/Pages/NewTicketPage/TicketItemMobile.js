import React from 'react';
import { trs } from "../../translations";

function TicketItemMobile() {
  return (
    <div className="mobile-ticket-preview">
      <div className="valid-ticket-zone-header">{trs("YOUR_NEW_TICKET")}</div>
      <h2>ANTONÍN VONDRUŠKA</h2>

      <div className="flex-wrapper">
        <div className="col-40-sm">
          <div className="valid-ticket-info-row">
            <span>{trs("BIRTH_DATE")}</span>
            <span>23. 9. 1980</span>
          </div>

          <div className="valid-ticket-info-row">
            <span>{trs("ZONE_VALIDITY")}</span>
            <span>100, 101</span>
          </div>

          <div className="valid-ticket-info-row">
            <span>{trs("VALID_SINCE")}</span>
            <span>10. 1. 2020</span>
          </div>

          <div className="valid-ticket-info-row">
            <span>{trs("DISCOUNT_CATEGORY")}</span>
            <span>nevybráno</span>
          </div>
        </div>
        <div className="col-60-sm">
          <div className="valid-ticket-info-row">
            <span>{trs("CARRIER")}</span>
            <a className="carrier-link" href="#">1111 - 1111 - 1111 - 1111</a>
          </div>

          <div className="valid-ticket-info-row">
            <span>{trs("TITLE")}</span>
            <span>nevybráno</span>
          </div>

          <div className="valid-ticket-info-row">
            <span>{trs("VALID_TILL")}</span>
            <span>-</span>
          </div>

          <div className="valid-ticket__price">699,- Kč</div>
        </div>
      </div>
    </div>
  );
}

export default TicketItemMobile;