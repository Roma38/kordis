import React from 'react';
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";

import {trs} from "../../../translations";

function TableFilters() {

    const filterRow = [
        {label: trs("FILTER"), type: "input", class: "input-field"},
        {label: trs("VALID_SINCE"), type: "date", class: "input-field"},
        {label: trs("VALID_TILL"), type: "date", class: "input-field"},
        {label: trs("CARRIER"), type: "select", class: "input-field"}
    ];

    const singleFilter = filterRow.map((row, i) => {
        let filterType;
        let dateImg;
        if (row.type === "select") {
            filterType = (
                <select className={row.class}>
                    <option value="12/2022">Platnost do: 12/2022</option>
                </select>
            );
        } else {
            filterType = (<input className={row.class} type={row.type}/>);
        }
        if (row.type === "date") {
            dateImg = (<img src={calendarIcon} alt="calendar icon"/>);
        }
        return (
            <div className="input-group" key={i}>
                <label>{row.label}</label>
                {filterType}
                {dateImg}
            </div>
        );
    });
    return (
        <div className="table-filter flex-wrapper">
            {singleFilter}
            <div className="cross-button">❌</div>
        </div>
    );
}

export default TableFilters;