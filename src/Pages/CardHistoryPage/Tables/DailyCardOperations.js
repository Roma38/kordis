import React, { useState } from 'react';

import {trs} from "../../../translations";
import calendarIcon from "../../../assets/icons8-calendar-48_(2).svg";

// TODO - For demonstration purposes only, to be removed after API integration
function getMockData() {
    let data = [];

    function add( id, title, zone, lineConnection, transaction, transactionId, bought, carrier, validUntil ) {
        if (typeof bought === "undefined")
            bought = "2020-01-06 09:10:27";
        if (typeof carrier === "undefined")
            carrier = "****-****-****-4444";
        if (typeof validUntil === "undefined")
            validUntil = "12/2022";
        if (typeof transaction === "undefined")
            transaction = null;
        if (typeof transactionId === "undefined")
            transactionId = null;

        data.push({
            id: id,
            title: title,
            zone: zone,
            lineConnection: lineConnection,
            bought: bought,
            carrier: carrier,
            validUntil: validUntil,
            transaction: transaction,
            transactionId: transactionId,
        });
    }

    add( 1234567, "Check in", 100, "540 / 55" );
    add( 1234569, "Check out", 101, "540 / 55" );
    add( 1234568, "Check in", 100, "530 / 34" );
    add( 1234566, "Check out", 101, "540 / 55" );
    add( 1234565, "Check in", 100, "530 / 34" );
    add( [ 1234561, 1234562, 1234563, 1234564 ], "CAPING 5. 1. 2020", [ 100, 101 ],
        [ "540 / 55", "530 / 34" ], 94, 11122233344 );

    return data;
}

function DailyCardOperationsTableFiltered( params ) {
    const filterRow = {
        transactionId: { label: trs("TRANSACTION_ID"), type: "input" },
        id: { label: trs("TABLE_COL_ID"), type: "input" },
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

    if ( filterState.id ) {
        filteredData = filteredData.filter( (e) => {
            let v = typeof e.id === "object" ? e.id : Array.of( e.id );
            v = v.filter( (x) => x.toString().indexOf( filterState.id ) > -1 );
            return v.length;
        } );
    }

    if ( filterState.transactionId ) {
        filteredData = filteredData.filter( (e) => {
            if ( e.transactionId ) {
                return e.transactionId.toString().indexOf( filterState.transactionId ) > -1;
            } else {
                return false;
            }
        } );
    }

    if ( filterState.validSince || filterState.validUntil ) {
        const validSinceDate = filterState.validSince ? new Date( filterState.validSince + " 00:00:00" ) : null;
        const validUntilDate = filterState.validUntil ? new Date( filterState.validUntil + " 23:59:59" ) : null;

        filteredData = filteredData.filter( (e) => {
            if ( e.bought ) {
                const boughtDate = new Date( e.bought );
                if( validSinceDate && !validUntilDate ) {
                    return validSinceDate <= boughtDate;
                } else if ( !validSinceDate && validUntilDate ) {
                    return boughtDate <= validUntilDate;
                } else {
                    return ( validSinceDate <= boughtDate ) && ( boughtDate <= validUntilDate );
                }
            } else {
                return false;
            }
        } );
    }

    return (
        <>
            { filters }
            <DailyCardOperationsTable data={ filteredData } lang={ params.lang }/>
        </>
    );
}

function DailyCardOperationsTable( params ) {

    const columns = {
        title: { label: trs("TABLE_COL_TITLE" ) },
        zone: { label: trs("TABLE_COL_ZONE" ) },
        id: { label: trs("TABLE_COL_ID" ) },
        bought: { label: trs("TABLE_COL_BOUGHT" ) },
        carrier: { label: trs("TABLE_COL_CARRIER" ) },
        transaction: { label: trs("TABLE_COL_TRANSACTION" ) },
        lineConnection: { label: trs("TABLE_COL_LINE_CONNECTION" ) },
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
            } else if ( k === "bought" ) {
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
                        <span>{ trs("VALID_UNTIL") } { row.validUntil }</span>
                    </>
                );
            } else if ( k === "transaction" ) {
                content = row[k] ? row[k] + ",- Kč" : "?";
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
            <div className="DataTable__wrapper table-wrapper table-history table-daily_card_operations">
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

function DailyCardOperations( params ) {
    const [ accordionClosed, setAccordionClosed ] = useState( false );
    let accordionClass = "DataTable__accordion accordion flex-wrapper";
    if ( accordionClosed )
        accordionClass += " closed";

    return (
        <div className="DataTable__container">
            <div className={ accordionClass }>
                <span className="accordion__text">{ trs( "DAILY_CARD_HISTORY" ) }</span>
                <span className="accordion__toggle" onClick={ () => setAccordionClosed( !accordionClosed ) }/>
            </div>
            <div className="DataTable__content">

                <DailyCardOperationsTableFiltered lang={ params.lang } />

                <div className="DataTable__footer flex-wrapper">
                    <div>
                        <div className="paragraph table__legend">
                            <b className="table__legend__symbol">?&emsp;&ensp;</b>{ trs( "LEGEND_NOT_ACCOUNTED_PRICE" ) }
                        </div>
                        <div className="paragraph table__legend">{ trs( "LEGEND_CAPING") }</div>
                    </div>
                    <button className="app-button" onClick={ () => alert("Coming soon") }>{ trs("SHOW_NEXT" ) }</button>
                </div>
            </div>
        </div>
    );
}

export default DailyCardOperations;