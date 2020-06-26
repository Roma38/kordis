import React from 'react';
//import { useSelector } from "react-redux";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";
import refreshIcon from "../../../assets/refresh_icon.png";
import { trs } from "../../../translations";
import "./Tables.css";


function SecondTable() {
  //const language = useSelector(state => state.language.lang);

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
        <table className="table table--second">
          <thead>
            <tr>
              <th>{trs("NAME")}</th>
              <th>{trs("ZONE")}</th>
              <th>{trs("VALID_SINCE")}</th>
              <th>{trs("VALID_TILL")}</th>
              <th>{trs("PURCHASED")}</th>
              <th>{trs("MAX_PRICE")}</th>
              <th>{trs("BEARER")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trs("SINGLE_TICKET")}</td>
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
              <td className="regular-text">36,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">Platnost do: 12/2022</option>
                </select>
              </td>
              <td className="table__last-col">
                <a href="#">{trs("SUSPEND")}</a>
                <a href="#">{trs("RETURN_TICKET")}</a>
              </td>
            </tr>

            <tr className="table__row--grey">
              <td>{trs("SINGLE_TICKET")}</td>
              <td className="regular-text">100 (nástupní zóna)</td>
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
              <td className="regular-text">36,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">Platnost do: 12/2022</option>
                </select>
              </td>
              <td className="table__last-col">
                <a href="#">{trs("SUSPEND")}</a>
                <a href="#">{trs("RETURN_TICKET")}</a>
              </td>
            </tr>

            <tr>
              <td>{trs("SINGLE_TICKET")}</td>
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
              <td className="regular-text">36,- Kč</td>
              <td>
                <select className="input-field">
                  <option value="Česká republika">Platnost do: 12/2022</option>
                </select>
              </td>
              <td className="table__last-col">
                <a href="#">{trs("SUSPEND")}</a>
                <a href="#">{trs("RETURN_TICKET")}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SecondTable;
