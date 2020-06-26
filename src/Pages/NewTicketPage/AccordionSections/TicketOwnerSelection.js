import React from 'react';
import { trs } from "../../../translations";

function TicketOwnerSelection() {
  return (
    <section className="accordion__body">
      <div className="input-group radio-button">
        <label className="full-width">
          <input type="radio" name="ticketOwner" />{trs("ACCOUNT_OWNER")}
        </label>

        <label className="full-width">
          <input type="radio" name="ticketOwner" />{trs("PORTABLE_TICKET")}
        </label>

        <label className="input-group full-width">
          <div className="col-30">
            <input type="radio" name="ticketOwner" />{trs("SOME_OF_THE_INTERCONNECTED_PERSONS")}
          </div>
          <select className="input-field col-40">
            <option>Jana Vondrušková</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default TicketOwnerSelection;