import React from 'react';
import {useSelector} from "react-redux";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import TicketItem from "../../Pages/MyValidTicketsPage/MyValidTicketItem/MyValidTicketItem";
import {trs} from "../../translations";

import "./MyValidTicketsPage.css";

import avatar from "../../assets/avatar.png";

function getValidTicketsMockData() {
    let data = [];
    let id = 1;

    function add(imgPath, price, ticketTitle, name, zone, birthDate, carrier, validSince, validTill, category) {
        if (typeof name === "undefined")
            name = "Antonín Vondruška";
        if (typeof zone === "undefined")
            zone = "100, 101";
        if (typeof birthDate === "undefined")
            birthDate = "23. 9. 1980";
        if (typeof carrier === "undefined")
            carrier = "1111 - 1111 - 1111 - 1111";
        if (typeof validSince === "undefined")
            validSince = "2020-01-10 13:30:30";
        if (typeof validTill === "undefined")
            validTill = "2020-02-07 13:30:30";
        if (typeof category === "undefined")
            category = "Dospělý (26 - 64 let)";

        data.push({
            id: id,
            imgPath: imgPath,
            price: price,
            ticketTitle: ticketTitle,
            name: name,
            zone: zone,
            birthDate: birthDate,
            carrier: carrier,
            validSince: validSince,
            validTill: validTill,
            category: category
        });
        id++;
    }

    add(avatar, '699,- Kč', "Měsíčí jízdenka - platnost 30 dní");
    return data;
}

function getFutureTicketsMockData() {
    let data = [];
    let id = 1;

    function add(imgPath, price, ticketTitle, name, zone, birthDate, carrier, validSince, validTill, category) {
        if (typeof name === "undefined")
            name = "Antonín Vondruška";
        if (typeof zone === "undefined")
            zone = "100, 101";
        if (typeof birthDate === "undefined")
            birthDate = "23. 9. 1980";
        if (typeof carrier === "undefined")
            carrier = "1111 - 1111 - 1111 - 1111";
        if (typeof validSince === "undefined")
            validSince = "2020-01-10 13:30:30";
        if (typeof validTill === "undefined")
            validTill = "2020-02-07 13:30:30";
        if (typeof category === "undefined")
            category = "Dospělý (26 - 64 let)";

        data.push({
            id: id,
            imgPath: imgPath,
            price: price,
            ticketTitle: ticketTitle,
            name: name,
            zone: zone,
            birthDate: birthDate,
            carrier: carrier,
            validSince: validSince,
            validTill: validTill,
            category: category
        });
        id++;
    }

    add(avatar, '90,- Kč', "Celodenní - 24 hodin");
    add(avatar, '90,- Kč', "Celodenní - 24 hodin");
    add(avatar, '90,- Kč', "Celodenní - 24 hodin");

    return data;
}

function MyValidTicketsPage() {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const validTicketsData = getValidTicketsMockData();
    const futureTicketsData = getFutureTicketsMockData();

    let validTickets = validTicketsData.map((item, i) => {
        return (
            <TicketItem data={item} key={i} lang={language}/>
        );
    });
    let futureTickets = futureTicketsData.map((item, i) => {
        return (
            <TicketItem data={item} key={i} lang={language}/>
        );
    });
    return (
        <>
            <Navigation/>
            <main className="my-valid-tickets-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("MY_VALID_TICKETS")}]}/>
                <h1 className="page-header">{trs("MY_VALID_TICKETS")}</h1>
                <div className="my-valid-tickets-page__sections__wrapper">
                    <section className="my-valid-tickets-wrapper">
                        <button className="expired-tickets-button">{trs("EXPIRED_TICKETS")}</button>
                        <h2 className="page-section-header">{trs("CURRENTLY_VALID_TICKETS")}</h2>
                        <div className="valid-tickets-info">{trs("VALID_TICKETS_INFO_1")}</div>
                        <div className="tickets-section">
                            {validTickets}
                        </div>
                        <div className="valid-tickets-info">{trs("VALID_TICKETS_INFO_2")}</div>
                        <p>{trs("VALID_TICKETS_INFO_3")}</p>
                        <h2 className="page-section-header">{trs("FUTURE_TICKETS")}</h2>
                        <div className="tickets-section future-tickets">
                            {futureTickets}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default MyValidTicketsPage;