import React, { useState } from 'react';

import { trs } from "../../../../../translations";

function PerDayTicket() {
  return (
    <section className="deep-accordion-section">
      <div className="radio-group">
        <label>
          <input type="radio" name="ticketZone" />{trs("WHOLE_IDS_JMK")}
        </label>

        <label>
          <input type="radio" name="ticketZone" />Brno
        </label>

        <label>
          <input type="radio" name="ticketZone" />{trs("WHOLE_IDS_JMK_EXCEPT_BRNO")}
        </label>

        <label>
          <input type="radio" name="ticketZone" />{trs("REGIONAL")}
        </label>
      </div>

      <div className="input-group">
        <label className="col-20">{trs("NUMBER_OF_DAYS")}</label>
        <select className="input-field col-20">
          <option>1</option>
        </select>
      </div>

      <div className="input-group">
        <label className="col-20">{trs("AREA_SELECTION")}</label>
        <select className="input-field col-20">
          <option>(Vyberte oblast)</option>
        </select>
      </div>
    </section>
  );
}

export default PerDayTicket;