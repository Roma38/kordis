import React from 'react';

import { trs } from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";
import pdf_icon from "../../../assets/pdf_icon.png"
import "./Tables.css";
import {Link} from "react-router-dom";


function CommonTable() {
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
              <th>{trs("VALID_SINCE")}</th>
              <th>{trs("VALID_TILL")}</th>
              <th>{trs("PURCHASED")}</th>
              <th>{trs("PRICE")}</th>
              <th>{trs("BEARER")}</th>
              <th>{trs("INVOICE")}</th>
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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>

            <tr className="table__row--grey">
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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>

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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>

            <tr className="table__row--grey">
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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>
            <tr className="table__row--grey table__row--canceled">
              <td colSpan="8">
                <div className="flex-wrapper">
                  <span className="table__row__warninng">{trs("CANCELED")}</span>
                  <span className="paragraph">{trs("CANCELED_IN")}: 20. 1. 2020</span>
                  <span className="paragraph">{trs("RETURNED")}: 300,- Kč </span>
                  <a className="regular-link" href="#">{trs("CREDIT_NOTE")}</a>
                </div>
              </td>
            </tr>

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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>

            <tr className="table__row--grey">
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
              <td className="regular-text">
                ****–****—****–4444
                <br />
                Platnost do: 12/2022
              </td>
              <td className="">
                <img src={pdf_icon} alt="calendar icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="align-right">
        <Link className="app-button" to={"/my-history"}>{trs("SHOW_MORE")}</Link>
      </div>
    </>
  );
}

export default CommonTable;
