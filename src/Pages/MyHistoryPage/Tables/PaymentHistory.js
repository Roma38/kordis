import React from 'react';
import {trs} from "../../../translations";


// TODO - For demonstration purposes only, to be removed after API integration
function getMockData() {
    let data = [];
    let id = 1;

    function add(deleted, activity, doneOn, price, card) {
        if (typeof deleted === "undefined")
            deleted = false;
        if (typeof doneOn === "undefined")
            doneOn = "1. 12. 2019";
        if (typeof activity === "undefined")
            activity = "Koupě předplacené jízdenky (Měsíční jízdenka - platnost 30 dní)";
        if (typeof price === "undefined")
            price = "699,- Kč";
        if (typeof card === "undefined")
            card = "Platnost do: 12/2022";

        data.push({
            id: id,
            deleted: deleted,
            activity: activity,
            doneOn: doneOn,
            card: card,
            price: price,
        });
        id++;
    }

    add(false);
    add(false);
    add(false);
    add(false);
    add(false);
    add(false);
    add(false);
    add(true);
    add(false);
    add(false);

    return data;
}


function PaymentHistoryTable() {


    const columns = [
        {label: trs("TABLE_COL_ACTIVITY"), class: "activity"},
        {label: trs("TABLE_COL_CARD"), class: "card"},
        {label: trs("TABLE_COL_DONE_ON"), class: "done-on"},
        {label: trs("TABLE_COL_PRICE"), class: "price"},
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
                content = (
                    <>
                        <span className="date"> ****-****-****-4444</span>
                        <span className="time">{row.card}</span>
                    </>
                );
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
            <table className="table-light table-history">
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


