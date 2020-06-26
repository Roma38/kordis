import React from 'react';
import {trs} from "../../../translations";


// TODO - For demonstration purposes only, to be removed after API integration
function getMockData() {
    let data = [];
    let id = 1;

    function add(activity, doneOn) {
        if (typeof doneOn === "undefined")
            doneOn = "30. 6. 2019";
        data.push({
            id: id,
            activity: activity,
            doneOn: doneOn,
        });
        id++;
    }

    add("Změna údajů - příjmení: Váleček -> Vondruška");
    add("Změna údajů - profilové foto");

    return data;
}


function PaymentHistoryTable() {


    const columns = [
        {label: trs("TABLE_COL_ACTIVITY"), class: "activity"},
        {label: trs("TABLE_COL_DONE_ON"), class: "done-on"},
    ];


    // TODO - To be replaced by API AJAX call
    const data = getMockData();


    const theadColumns = columns.map((col) => {
        return (
            <th key={col.class} className={"col-" + col.class}>{col.label}</th>
        );
    });

    let rows = data.map((row) => {
        const rowColumns = columns.map((col, i) => {
            let content;

            if (col.class === "activity") {
                content = row.activity;
            } else if (col.class === "card") {
                content = row.card;
            } else if (col.class === "done-on") {
                content = row.doneOn;
            } else if (col.class === "price") {
                content = row.price;
            }
            return <td key={i} className={"col-" + col.class}>{content}</td>;
        });

        return (
            <tr key={row.id}>
                {rowColumns}
            </tr>
        );
    });

    if (rows.length === 0) {
        rows = (
            <tr>
                <td colSpan={columns.length} className="no-data">
                    {trs("NO_HISTORY")}
                </td>
            </tr>
        );
    }

    return (
        <div className="table-wrapper">
            <table className="table-light table-history table-data-changes-history">
                <thead>
                <tr>{theadColumns}</tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentHistoryTable;