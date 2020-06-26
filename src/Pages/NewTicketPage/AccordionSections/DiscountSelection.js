import React from 'react';
import { trs } from "../../../translations";

function DiscountSelection() {
  return (
    <section className="accordion__body">
      <label className="input-group full-width">
        {trs("DISCOUNT_CATEGORY")}
        <select className="input-field col-40 ml-7">
          <option>{trs("JUNIOR_18_25")}</option>
        </select>
      </label>
      <p className="regular-text">
        <span className="warning-text">{trs("NOTICE")}</span> {trs("STUDENTS_AGED_18_21_MUST_COME_TO_")}
      </p>
    </section>
  );
}

export default DiscountSelection;