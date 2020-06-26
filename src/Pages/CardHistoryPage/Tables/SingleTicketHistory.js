import React, { useState } from 'react';

import {trs} from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";
import pdfIcon from "../../../assets/pdf_icon.png"


// TODO - For demonstration purposes only, to be removed after API integration
function getMockData() {
    let data = [];
    let data_id = 1;

    function add( title, transactionId, zone, price, validSince, validUntil, bought, carrier, carrierValidTo ) {
        if (typeof title === "undefined")
            title = "Jednorázová jízdenka 60 minut";
        if (typeof transactionId === "undefined")
            transactionId = null;
        if (typeof zone === "undefined")
            zone = [100, 101, 150, 200, 234];
        if (typeof price === "undefined")
            price = 36;
        if (typeof validSince === "undefined")
            validSince = "2020-01-06 10:54:27";
        if (typeof validUntil === "undefined")
            validUntil = "2020-02-02 10:54:27";
        if (typeof bought === "undefined")
            bought = "2020-01-06 09:10:27";
        if (typeof carrier === "undefined")
            carrier = "****-****-****-4444";
        if (typeof carrierValidTo === "undefined")
            carrierValidTo = "12/2022";


        data.push({
            id: data_id,
            title: title,
            transactionId: transactionId,
            zone: zone,
            price: price,
            validSince: validSince,
            validUntil: validUntil,
            bought: bought,
            carrier: carrier,
            carrierValidTo: carrierValidTo,

        });
        data_id++;
    }

    add();
    add();
    add();
    add();
    add();
    add();
    add( "CAPING 5. 1. 2020", 111222333444,[ 100, 101 ], 94,
        "2020-01-06 09:10:27", "2020-01-06 10:50:27" );

    return data;
}

function SingleTicketHistoryTableFiltered( params ) {
    const filterRow = {
        general: { label: trs("FILTER"), type: "input" },
        validSince: { label: trs("VALID_SINCE"), type: "date" },
        validUntil: { label: trs("VALID_TILL"), type: "date" },
    };

    function defaultFilterState() {
        return ( Object.keys( filterRow ).reduce( ( p, c ) => {
                return Object.assign( p, { [c]: "" } ) }, {} )
        );
    }

    const [filterState, setFilterState] = useState( defaultFilterState() );

    const filterInputs = Object.keys( filterRow ).map( ( k ) => {
        let filterType;
        const filterId = "Filter_" + k;

        if ( filterRow[k].type === "select") { // TODO - Select to be done
            filterType = (
                <select key={ k } id={ filterId } className="input-field" value={ null } onChange={ null }>
                    <option value=""/>
                </select>
            );
        } else {
            filterType = (
                <input key={ k } id={ filterId } className="input-field" type={ filterRow[k].type }
                       value={ filterState[k] }
                       onChange={ e => setFilterState(
                           Object.assign( Object.assign( {}, filterState ), { [k]: e.currentTarget.value } )
                       ) }
                />
            );

            if ( filterRow[k].type === "date" ) {
                filterType = Array.of( filterType, <img key={ "dateIcon_" + k } src={ calendarIcon } alt="calendar icon"/> );
            }
        }

        return (
            <div className="input-group" key={ k }>
                <label htmlFor={ filterId }>{ filterRow[k].label }</label>
                { filterType }
            </div>
        );
    });

    const filters = (
        <div className="DataTable__filters table-filter flex-wrapper">
            { filterInputs }
            <span
                className="cross-button"
                title={ trs( "RESET_FILTERS" ) }
                aria-label={ trs( "RESET_FILTERS" ) }
                role="img"
                onClick={ () => setFilterState( defaultFilterState() ) }
            >❌</span>
        </div>
    );

    // TODO - To be replaced by AJAX call in the future
    let filteredData = getMockData();

    if ( filterState.general ) {
        filteredData = filteredData.filter(
            e => e.title.includes( filterState.general )
                || e.price.toString().includes( filterState.general )
                || e.zone.toString().includes( filterState.general )
                || ( e.transactionId ? e.transactionId.toString().includes( filterState.general ) : false )
        );
    }

    if ( filterState.validSince ) {
        const validSinceDate = new Date( filterState.validSince + " 23:59:59" );
        filteredData = filteredData.filter( (e) => new Date( e.validSince ) <= validSinceDate );
    }

    if ( filterState.validSince ) {
        const validUntilDate = new Date( filterState.validSince + " 00:00:00" );
        filteredData = filteredData.filter( (e) => validUntilDate <= new Date( e.validUntil ) );
    }

    return (
        <>
            { filters }
            <SingleTicketHistoryTable data={ filteredData } lang={ params.lang }/>
        </>
    );
}

function SingleTicketHistoryTable( params ) {

    const columns = {
        title: { label: trs("TABLE_COL_TITLE" ) },
        zone: { label: trs("TABLE_COL_ZONE" ) },
        validSince: { label: trs("TABLE_COL_VALID_SINCE" ) },
        validUntil: { label: trs("TABLE_COL_VALID_TILL" ) },
        bought: { label: trs("TABLE_COL_BOUGHT" ) },
        price: { label: trs("TABLE_COL_PRICE" ) },
        carrier: { label: trs("TABLE_COL_CARRIER" ) },
        invoice: { label: trs("TABLE_COL_INVOICE" ) },
    };
    const data = params.data;

    const theadColumns = Object.keys( columns ).map( ( k ) => {
        return (
            <th key={ k } className={ "col-" + k }>{ columns[k].label }</th>
        );
    });

    let rows = data.map( ( row ) => {
        const rowClass = row.transactionId ? "row-caping" : null;
        const rowColumns = Object.keys( columns ).map( ( k ) => {
            let content;
            const locale = params.lang === "cz" ? "cs-CZ" : "en-US"; // TODO - should be globalized according the current language

            if ( k === "title" ) {
                content = (
                    <>
                        <span>{ row[k] }</span>
                        { row.transactionId && <div>{ "ID: " + row.transactionId }</div> }
                    </>
                );
            } else if ( k === "bought" || k === "validSince" || k === "validUntil" ) {
                content = (
                    <>
                        <span className="date">{ new Date( row[k] ).toLocaleDateString( locale ) }</span>
                        <span className="time">{ new Date( row[k] ).toLocaleTimeString( locale ) }</span>
                    </>
                );
            } else if ( k === "carrier" ) {
                content = (
                    <>
                        <span>{ row[k] }</span>
                        <span>{ trs("VALID_UNTIL") } { row.carrierValidTo }</span>
                    </>
                );
            } else if ( k === "price" ) {
                content = row[k] ? row[k] + ",- Kč" : "";
            } else if ( k === "invoice" ) {
                content = <img
                    src={ pdfIcon }
                    alt={ trs("OPEN_INVOICE") }
                    title={ trs( "OPEN_INVOICE") }
                    onClick={ () => alert("Opens the pdf invoice") }
                />;
            } else {
                content = typeof row[k] === "object" ? row[k].join( ", " ) : row[k];
            }
            return <td key={ k } className={ "col-" + k }>{ content }</td>;
        });

        return (
            <tr key={ row.id } className={ rowClass }>
                { rowColumns }
            </tr>
        );
    });

    if (rows.length === 0) {
        rows = (
            <tr>
                <td colSpan={ columns.length } className="no-data">
                    { trs("NO_DATA") }
                </td>
            </tr>
        );
    }

    return (
        <>
            <div className="DataTable__wrapper table-wrapper table-history table-single_ticket_history">
                <table className="table DataTable__table">
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

function SingleTicketHistory( params ) {
    const [ accordionClosed, setAccordionClosed ] = useState( false );
    let accordionClass = "DataTable__accordion accordion flex-wrapper";
    if ( accordionClosed )
        accordionClass += " closed";

    return (
        <div className="DataTable__container">
            <div className={ accordionClass }>
                <span className="accordion__text">{ trs( "HISTORY_ONE_TIME_TICKET_TITLE" ) }</span>
                <span className="accordion__toggle" onClick={ () => setAccordionClosed( !accordionClosed ) }/>
            </div>
            <div className="DataTable__content">

                <SingleTicketHistoryTableFiltered lang={ params.lang } />

                <div className="DataTable__footer flex-wrapper">
                    <div />
                    <button className="app-button" onClick={ () => alert("Coming soon") }>{ trs("SHOW_NEXT" ) }</button>
                </div>
            </div>
        </div>
    );
}

export default SingleTicketHistory;