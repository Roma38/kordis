import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoremIpsum } from "react-lorem-ipsum";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import { trs } from "../../translations";

import "./MyMessagesPage.css";

import icon_trash from "../../assets/trash_icon_transparent.png";
import icon_mark_read from "../../assets/mark_read_icon.png";

// TODO - To be replaced by API AJAX call
function getMessagesMockData() {
    let data = [];
    let id = 1;

    function add( datetime, unread, sender, subject, preview, content ) {
        if ( typeof unread === "undefined" )
            unread = false;
        if ( typeof sender === "undefined" )
            sender = "KORDIS";
        if ( typeof subject === "undefined" )
            subject = "Výzva pro ověření totožnosti";
        if ( typeof preview === "undefined" )
            preview = "Dobrý den, dostavte se prosím ověřit správnost zadaných údajů v profilu s dokladem totožnosti do jednoho měsíce od obdržení této zprávy.";
        if ( typeof content === "undefined" )
            content = <LoremIpsum p={2} avgSentencesPerParagraph={16} />;

        data.push( { id: id, datetime: datetime, unread: unread, sender: sender, subject: subject, preview: preview, content: content } );
        id++;
    }

    add( "2020-01-06 08:30:12", true );
    add( "2019-12-08 10:12:34", true );
    add( "2019-12-06 08:30:12" );
    add( "2019-12-05 22:12:34" );
    add( "2019-12-04 08:30:12" );
    add( "2019-11-08 10:12:34" );
    add( "2019-11-06 08:30:12" );
    add( "2019-10-10 10:12:34" );
    add( "2019-09-25 08:30:12" );
    add( "2019-09-08 10:12:34" );
    add( "2019-09-06 08:30:12" );

    return data;
}

function TableMessages( params ) {
    const history = useHistory();

    const columns = [
        { label: trs( "DATE_AND_TIME" ), class: "datetime" },
        { label: trs( "SENDER" ), class: "sender" },
        { label: trs( "SUBJECT" ), class: "subject" },
        { label: trs( "PREVIEW" ), class: "preview" },
        { label: trs( "ACTIONS" ), class: "actions" },
    ];

    const data = params.data;

    const theadColumns = columns.map( ( col ) => {
        return (
            <th key={ col.class } className={ "col-" + col.class }>{ col.label }</th>
        );
    } );

    let rows = data.map( ( row ) => {
        const rowClass = row.unread ? "unread" : null;
        const rowColumns = columns.map( ( col, i ) => {
            let content;

            if ( col.class === "datetime" ) {
                content =  (
                    <>
                        <span className="date">{ new Date( row.datetime ).toLocaleDateString( params.locale ) }</span>
                        <span className="time">{ new Date( row.datetime ).toLocaleTimeString( params.locale ) }</span>
                    </>
                );
            } else if ( col.class === "sender" ) {
                content = row.sender;
            } else if ( col.class === "subject" ) {
                content = row.subject;
            } else if ( col.class === "preview" ) {
                content = row.preview;
            } else if ( col.class === "actions" ) {
                content = (
                    <>
                        <Link className="icon icon-trash-bin"
                              title={ trs( "MESSAGE_REMOVE" ) }
                              to={ { pathname: '.', state: { action: "remove", id: row.id } } }
                              onClick={ (e) => { e.stopPropagation() } }
                        >
                            <img src={ icon_trash } alt={ trs( "MESSAGE_REMOVE" ) } />
                        </Link>

                        <Link className="icon icon-visibility"
                              title={ trs( "MESSAGE_MARK_READ" ) }
                              to={ { pathname: '.', state: { action: "mark_as_read", id: row.id } } }
                              onClick={ (e) => { e.stopPropagation() } }
                        >
                            <img src={ icon_mark_read } alt={ trs( "MESSAGE_MARK_READ" ) } />
                        </Link>
                    </>
                );
            }

            return <td key={ i } className={ "col-" + col.class }>{ content }</td>;
        } );

        return (
            <tr
                key = { row.id }
                id = { "Message_" + row.id }
                className = { rowClass }
                onClick= { () => { history.push( "/dashboard/messages/" + row.id ); } }
            >
                { rowColumns }
            </tr>
        );
    } );

    if ( rows.length === 0 ) {
        rows = (
            <tr>
                <td colSpan={columns.length} className="no-data">
                    { trs( "NO_MESSAGES" ) }
                </td>
            </tr>
        );
    }

    return (
        <table className="table-light table-messages">
            <thead>
                <tr>{ theadColumns }</tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    );
}

function MessageDetail( params ) {
    const data = params.data;

    return (
        <div className="my-messages-detail" id={ "MessageDetail_" + data.id }>
            <div className="message-header">
                <div className="message-header-row message-header-sender">
                    <strong>{ trs( "SENDER" ) }</strong>
                    <span>{ data.sender }</span>
                </div>

                <div className="message-header-row message-header-datetime">
                    <strong>{ trs( "DATE_AND_TIME" ) }</strong>
                    <span>{ new Date( data.datetime ).toLocaleString( params.locale )}</span>
                </div>

                <div className="message-header-remove">
                    <Link className="icon icon-trash-bin"
                          title={ trs( "MESSAGE_REMOVE" ) }
                          to={ { pathname: '.', state: { action: "remove", id: data.id } } }
                          onClick={ (e) => { e.preventDefault() } }
                    >
                        <img src={ icon_trash } alt={ trs( "MESSAGE_REMOVE" ) } />
                    </Link>
                </div>
            </div>
            <div className="message-content">
                { data.content }
            </div>
        </div>
    );
}

function MyMessagesPage( page ) {
    const data = getMessagesMockData();
    const language = useSelector( state => state.language.lang ); // Also defined to re-render component on language change
    const locale = language === "cz" ? "cs-CZ" : "en-US"; // TODO - should be globalized according the current language

    let content = <TableMessages data={ data } lang={ language } locale={ locale } />;
    let heading = trs("MY_MESSAGES");

    if ( typeof page.match.params.id !== "undefined" ) {
        const item = data.filter( row => row.id === parseInt( page.match.params.id ) )[0];

        if ( item ) {
            content = <MessageDetail data={ item } lang={ language } locale={ locale } />;
            heading = item.subject;
        }
    }

    return (
        <>
            <Navigation />
            <main className="my-messages-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/dashboard', label: trs("DASHBOARD")},
                    {to: '#', label: trs("MY_MESSAGES")}]} />
                <h1 className="page-header">{ heading }</h1>

                <div className="my-messages-page__sections__wrapper">
                    <section>
                        { content }
                    </section>
                </div>
            </main>
        </>
    );
}

export default MyMessagesPage;