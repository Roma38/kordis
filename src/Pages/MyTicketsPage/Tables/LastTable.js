import React from 'react';

import { trs } from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";
import pdf_icon from "../../../assets/pdf_icon.png"
import "./Tables.css";
import {Link} from "react-router-dom";


function LastTable() {
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
        <table className="table table--common">
          <thead>
            <tr>
              <th>{trs("NAME")}</th>
              <th>{trs("ZONE")}</th>
              <th>ID</th>
              <th>{trs("PURCHASED")}</th>
              <th>{trs("BEARER")}</th>
              <th>{trs("TRANSACTION")}</th>
              <th>{trs("LINE__CONNECTION")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Check in</td>
              <td className="regular-text">100</td>
              <td className="regular-text">1234567</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="regular-text">?</td>
              <td className="regular-text">540 / 55</td>
            </tr>

            <tr className="table__row--grey">
              <td>Check out</td>
              <td className="regular-text">101</td>
              <td className="regular-text">1234567</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="regular-text">?</td>
              <td className="regular-text">540 / 55</td>
            </tr>

            <tr>
              <td>Check in</td>
              <td className="regular-text">100</td>
              <td className="regular-text">1234567</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="regular-text">?</td>
              <td className="regular-text">540 / 55</td>
            </tr>

            <tr className="table__row--grey">
              <td>Check out</td>
              <td className="regular-text">101</td>
              <td className="regular-text">1234567</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="regular-text">?</td>
              <td className="regular-text">540 / 55</td>
            </tr>

            <tr>
              <td>Check in</td>
              <td className="regular-text">100</td>
              <td className="regular-text">1234567</td>
              <td className="regular-text">
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="regular-text">?</td>
              <td className="regular-text">540 / 55</td>
            </tr>

            <tr className="table__row--grey">
              <td>
                CAPING 5. 1. 2020
                <br />
                ID: 111222333444
              </td>
              <td>100, 101</td>
              <td>
                1234561, 1234562, <br />
                1234563, 123454
              </td>
              <td>
                6. 1. 2020
                <br />
                10:54:27
              </td>
              <td>
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td>94,- Kč</td>
              <td>540 / 55, 530 / 34</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex-wrapper">
        <p className="paragraph">
          <strong>? </strong> {trs("THE_PRICE_HAS_NOT_YET_BEEN_CHARGED")}
          <br />
          {trs("CAPING_APPLIES_ONLY_TO_TICKETS_")}
        </p>
        <Link className="app-button" to={"/card-history"}>{trs("SHOW_MORE")}</Link>
      </div>
    </>
  );
}

export default LastTable;
