import React, {useState} from 'react';

import pdf_icon from "../../../assets/pdf_icon.png"

import {trs} from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";


// TODO - For demonstration purposes only, to be removed after API integration
function getMockData() {
    let data = [];
    let id = 1;

    function add(deleted, title, zone, validSince, validTill, bought, price, carrier) {
        if (typeof deleted === "undefined")
            deleted = false;
        if (typeof zone === "undefined")
            zone = "100, 101, 150, 200, 234";
        if (typeof title === "undefined")
            title = "Měsíční jízdenka - platnost 30 dní";
        if (typeof validSince === "undefined")
            validSince = "2020-01-06 10:54:27";
        if (typeof validTill === "undefined")
            validTill = "2020-02-02 10:54:27";
        if (typeof bought === "undefined")
            bought = "2020-01-06 09:10:27";
        if (typeof price === "undefined")
            price = "699,- Kč";
        if (typeof carrier === "undefined")
            carrier = "12/2022";

        data.push({
            id: id,
            deleted: deleted,
            title: title,
            zone: zone,
            validSince: validSince,
            validTill: validTill,
            bought: bought,
            price: price,
            carrier: carrier
        });
        id++;
    }

    add(false, 'test jízdenka',undefined, "2020-01-07", undefined,undefined, "399,- Kč");
    add(false, undefined, undefined, undefined, undefined,undefined, "399,- Kč");
    add(false, undefined, '224');
    add(false);
    add(false);
    add(false);
    add(true, 'stornováno', '', 'Stornováno dne 20.1.2020', '', 'Vráceno: 300,- Kč');
    add(false);
    add(false);

    return data;
}


function SubscriptionHistoryTableWithFilters() {
    const [filterString, setFilterString] = useState("");
    const [dateFilterSince, setDateFilterSince] = useState("");
    const [dateFilterTill, setDateFilterTill] = useState("");
    const [carrierFilter, setCarrierFilter] = useState("");

    const filterRow = [
        {label: trs("FILTER"), type: "input", class: "input-field"},
        {label: trs("VALID_SINCE"), type: "date-since", class: "input-field"},
        {label: trs("VALID_TILL"), type: "date-till", class: "input-field"},
        {label: trs("CARRIER"), type: "select", class: "input-field"}
    ];
    const singleFilter = filterRow.map((row, i) => {
        let filterType;
        let dateImg;
        if (row.type === "select") {
            filterType = (
                <select className={row.class} value={carrierFilter} onChange={e => setCarrierFilter(e.target.value)}>
                    <option value="12/2022">Platnost do: 12/2022</option>
                    <option value="11/2022">Platnost do: 11/2022</option>
                </select>
            );
        } else {
            filterType = (<input className={row.class} type={row.type}
                                 value={filterString}
                                 onChange={e => setFilterString(e.target.value)}
            />);
        }
        if (row.type === "date-since") {
            filterType = (<input className={row.class}
                                 type="date"
                                 value={dateFilterSince}
                                 onChange={e => setDateFilterSince(e.target.value)} />);
            dateImg = (<img src={calendarIcon} alt="calendar icon"/>);
        }

        if (row.type === "date-till") {
            filterType = (<input className={row.class}
                                 type="date"
                                 value={dateFilterTill}
                                 onChange={e => setDateFilterTill(e.target.value)} />);
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
    const filters = (
        <div className="table-filter flex-wrapper">
            {singleFilter}
            <div className="cross-button">❌</div>
        </div>
    );

    const data = getMockData();
    let date;
    let filteredData = data.filter(
        e => e.title.includes(filterString) ||
            e.price.includes(filterString) ||
            e.zone.includes(filterString)
    );
    if (dateFilterSince !== "") {
        filteredData = filteredData.filter(function(val){
            date = val.validSince.split(' ')[0];
            return date === dateFilterSince;
        });
    }
    if (dateFilterTill !== "") {
        filteredData = filteredData.filter(function(val){
            date = val.validTill.split(' ')[0];
            return date === dateFilterTill;
        });
    }
    if (carrierFilter !== ""){
        filteredData = filteredData.filter(function(val){
            return val.carrier === carrierFilter;
        });
    }
    return (
        <>
            <div className="accordion flex-wrapper">
                <span className="accordion__text">{trs("HISTORY_SUBSCRIPTION_TITLE")}</span>
                <div className="accordion__toggle"/>
            </div>
            {filters}
            <SubscriptionHistoryTable data={filteredData} lang={"cz"}/>
        </>
    );
}

function SubscriptionHistoryTable(params) {

    const columns = [
        {label: trs("TABLE_COL_TITLE"), class: "title"},
        {label: trs("TABLE_COL_ZONE"), class: "zone"},
        {label: trs("TABLE_COL_VALID_SINCE"), class: "valid-since"},
        {label: trs("TABLE_COL_VALID_TILL"), class: "valid-till"},
        {label: trs("TABLE_COL_BOUGHT"), class: "bought"},
        {label: trs("TABLE_COL_PRICE"), class: "price"},
        {label: trs("TABLE_COL_CARRIER"), class: "carrier"},
        {label: trs("TABLE_COL_INVOICE"), class: "invoice"}
    ];

    // TODO - To be replaced by API AJAX call
    const data = params.data;


    const theadColumns = columns.map((col) => {
        return (
            <th key={col.class} className={"col-" + col.class}>{col.label}</th>
        );
    });

    let rows = data.map((row, k) => {
        let rowClass;
        if (row.deleted) {
            rowClass = "table__row--grey deleted table__row--canceled";
        }
        const rowColumns = columns.map((col, i) => {
            let content;
            const locale = params.lang === "cz" ? "cs-CZ" : "en-US"; // TODO - should be globalized according the current language
            if (col.class === "valid-since") {
                content = (
                    <>
                        <span className="date">{new Date(row.validSince).toLocaleDateString(locale)}</span>
                        <span className="time">{new Date(row.validSince).toLocaleTimeString(locale)}</span>
                    </>
                );
            } else if (col.class === "valid-till") {
                content = (
                    <>
                        <span className="date">{new Date(row.validTill).toLocaleDateString(locale)}</span>
                        <span className="time">{new Date(row.validTill).toLocaleTimeString(locale)}</span>
                    </>
                );
            } else if (col.class === "title") {
                content = row.title;
            } else if (col.class === "zone") {
                content = row.zone;
            } else if (col.class === "bought") {
                content = (
                    <>
                        <span className="date">{new Date(row.bought).toLocaleDateString(locale)}</span>
                        <span className="time">{new Date(row.bought).toLocaleTimeString(locale)}</span>
                    </>
                );
            } else if (col.class === "price") {
                content = row.price;
            } else if (col.class === "carrier") {
                content = (
                    <>
                        <span> ****-****-****-4444</span>
                        <span>Platnost do: {row.carrier}</span>
                    </>
                );
            } else if (col.class === "invoice") {
                content = (
                    <>
                        <img src={pdf_icon} alt={trs("MESSAGE_MARK_READ")}/>
                    </>
                );
            }
            if (row.deleted) {
                return null;
            }
            return <td key={i} className={"col-" + col.class}>{content}</td>;

        });
        let deletedRow;
        if (row.deleted) {
            deletedRow = (<td key={row.id + '-deleted'} colSpan={8} className={"col-" + rowClass}>
                <div className="flex-wrapper"><span className="table__row__warninng">{row.title}</span><span
                    className="paragraph">{row.validSince}</span>
                    <span className="paragraph">{row.bought} </span>
                    <a className="regular-link" href="#">Dobropis</a></div>
            </td>);
        }
        return (
            <tr key={row.id} className={rowClass}>
                {rowColumns}
                {deletedRow}
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
        <>
            <div className="table-wrapper">
                <table className="table table-history">
                    <thead>
                    <tr>{theadColumns}</tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SubscriptionHistoryTableWithFilters;