import React from 'react';
import { trs } from "../../../../translations";
import calendarIcon from "../../../../assets/icons8-calendar-48_(2).svg";


function NeedAvice() {
  return (
    <section className="accordion--secondary__body">
      <h3 className="form-section-header">{trs("I_NEED_ADVICE")}</h3>
      <p className="regular-text">{trs("IF_YOU_ARE_NOT_SURE_YOU_CAN_")}</p>
      <form className="need-advice-form">
        <div className="radio-group">
          <b>{trs("AS_YOU_GO")}</b>

          <label>
            <input type="radio" name="tripFrequency" />{trs("ONE_TIME_THERE")}
          </label>

          <label>
            <input type="radio" name="tripFrequency" />{trs("ONE_TIME_THERE_AND_BACK__TRIP")}
          </label>

          <label>
            <input type="radio" name="tripFrequency" />{trs("REGULARLY")}
          </label>
        </div>

        <div className="flex-wrapper need-advice-form__columns">
          <div className="col-50">
            <div className="input-group">
              <label className="col-20">{trs("FROM")}</label>
              <input className="input-field col-80" />
            </div>

            <div className="input-group">
              <label className="col-20">{trs("THROUGH")}</label>
              <input className="input-field col-80" />
            </div>

            <div className="input-group">
              <label className="col-20">{trs("TO")}</label>
              <input className="input-field col-80" />
            </div>
          </div>

          <div className="col-50">
            <div className="input-group">
              <label className="col-30">{trs("TIME")}</label>
              <select className="input-field col-30-sm">
                <option>9</option>
              </select>
              <select className="input-field col-30-sm ml-7">
                <option>41</option>
              </select>
            </div>

            <div className="input-group date-input">
              <label className="col-30">{trs("DATE")}</label>
              <input className="input-field col-70" type="date" />
              <img src={calendarIcon} alt="calendar icon" />
            </div>

            <div className="align-right">
              <button className="app-button">{trs("FIND_CONNECTION")}</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NeedAvice;