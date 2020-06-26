import React from 'react';

import { trs } from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";
import refreshIcon from "../../../assets/refresh_icon.png";
import "./Tables.css";


function FirstTable() {
  return (
    <>
      <div className="table-filter flex-wrapper">
        <div className="input-group">
          <label>{trs("FILTER")}</label>
          <input
            className="input-field"
            type="text"
          />
        </div>

        <div className="input-group">
          <label>{trs("VALID_SINCE")}</label>
          <input
            className="input-field input-field--date"
            type="date"
          />
          <img src={calendarIcon} alt="calendar icon" />
        </div>

        <div className="input-group">
          <label>{trs("VALID_TILL")}</label>
          <input
            className="input-field input-field--date"
            type="date"
          />
          <img src={calendarIcon} alt="calendar icon" />
        </div>

        <div className="input-group">
          <label>{trs("BEARER")}</label>
          <select
            className="input-field"
          >
            <option value="Česká republika">{trs("VALID_TILL")}: 12/2022</option>
          </select>
        </div>

        <div className="cross-button">❌</div>
      </div>

      <div className="table-wrapper">
        <table className="table table--first">
          <thead>
            <tr>
              <th>{trs("NAME")}</th>
              <th>{trs("ZONE")}</th>
              <th>{trs("VALID_SINCE")}</th>
              <th>{trs("VALID_TILL")}</th>
              <th>{trs("PURCHASED")}</th>
              <th>{trs("PRICE")}</th>
              <th>{trs("BEARER")}</th>
              <th>{trs("AUTOMATIC_RENEWAL")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trs("MONTHLY_TICKET_VALID_WITHIN_30_DAYS")}</td>
              <td className="regular-text">100, 101, 150, 200, 234</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td>
                5. 2. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">699,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">{trs("VALID_TILL")}: 12/2022</option>
                </select>
              </td>
              <td className="flex-wrapper">
                <input type="image" id="image" alt="refresh" src={refreshIcon} />
                <div className="table__last-col">
                  <button className="app-button">{trs("EXTEND_VALIDITY")}</button>
                  <a href="#">{trs("SUSPEND")}</a>
                  <a href="#">{trs("RETURN_TICKET")}</a>
                </div>
              </td>
            </tr>

            <tr className="table__row--pink">
              <td>{trs("MONTHLY_TICKET_VALID_WITHIN_30_DAYS")}</td>
              <td className="regular-text">100, 101, 150, 200, 234</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td>
                5. 2. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">699,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">{trs("VALID_TILL")}: 12/2022</option>
                </select>
              </td>
              <td className="flex-wrapper">
                <input type="image" id="image" alt="refresh" src={refreshIcon} />
                <div className="table__last-col">
                  <button className="app-button">{trs("EXTEND_VALIDITY")}</button>
                  <a href="#">{trs("SUSPEND")}</a>
                  <a href="#">{trs("RETURN_TICKET")}</a>
                </div>
              </td>
            </tr>

            <tr className="table__row--yellow">
              <td>{trs("MONTHLY_TICKET_VALID_WITHIN_30_DAYS")}</td>
              <td className="regular-text">100, 101, 150, 200, 234</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td>
                5. 2. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">699,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">{trs("VALID_TILL")}: 12/2022</option>
                </select>
              </td>
              <td className="flex-wrapper">
                <input type="image" id="image" alt="refresh" src={refreshIcon} />
                <div className="table__last-col">
                  <button className="app-button">{trs("EXTEND_VALIDITY")}</button>
                  <a href="#">{trs("SUSPEND")}</a>
                  <a href="#">{trs("RETURN_TICKET")}</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="paragraph table__legend">
        <div className="small-square small-square--pink" />
        {trs("TICKETS_WITH_APPROACHING_EXPIRATION")}
      </div>
      <div className="paragraph table__legend">
        <div className="small-square small-square--yellow" />
        {trs("SUSPENDED_TICKETS")}
      </div>
    </>
  );
}

export default FirstTable;
