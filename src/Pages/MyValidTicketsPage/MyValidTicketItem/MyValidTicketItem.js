import React from 'react';
import {trs} from "../../../translations";

function MyValidTicketItem(params) {
    return (
        <div className="valid-ticket">
            <div className="valid-ticket-zone-header">{trs("ZONES")} - {params.data.zone}</div>
            <div className="valid-ticket-info-wrapper">
                <div className="valid-ticket-user-info-wrapper">
                    <div className="valid-ticket-user-image">
                        <img src={params.data.imgPath} alt={params.data.name}/>
                    </div>
                    <div className="valid-ticket-user-info">
                        <h2>{params.data.name}</h2>
                        <div className="valid-ticket-user-date">
                            <span>{trs("BIRTH_DATE")}</span>
                            <span>{params.data.birthDate}</span>
                        </div>
                    </div>
                </div>
                <div className="valid-ticket-info">
                    <div className="valid-ticket-info-row">
                        <span>{trs("CARRIER")}</span>
                        <a className="carrier-link" href="#">{params.data.carrier}</a>
                    </div>
                    <div className="valid-ticket-info-row">
                        <span>{trs("TITLE")}</span>
                        <span>{params.data.ticketTitle}</span>
                    </div>
                    <div className="valid-ticket-info-row">
                        <span>{trs("ZONE_VALIDITY")}</span>
                        <span>{params.data.zone}</span>
                    </div>
                    <div className="valid-ticket-info-row">
                        <span>{trs("VALID_SINCE")}</span>
                        <span>{params.data.validSince}</span>
                    </div>
                    <div className="valid-ticket-info-row">
                        <span>{trs("VALID_TILL")}</span>
                        <span>{params.data.validTill}</span>
                    </div>
                    <div className="valid-ticket-info-row">
                        <span>{trs("DISCOUNT_CATEGORY")}</span>
                        <span>{params.data.category}</span>
                    </div>
                </div>
            </div>
            <div className="valid-ticket-bottom-wrapper">
                <div className="valid-ticket-price">{params.data.price}</div>
                <button>{trs("VALID_TICKET_BTN_1")}</button>
                <button>{trs("VALID_TICKET_BTN_2")}</button>
                <button>{trs("VALID_TICKET_BTN_3")}</button>
            </div>
        </div>
    );
}

export default MyValidTicketItem;