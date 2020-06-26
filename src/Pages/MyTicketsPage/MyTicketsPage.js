import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import TopSection from "./TopSection";
import FirstTable from "./Tables/FirstTable";
import SecondTable from "./Tables/SecondTable";
import CommonTable from "./Tables/CommonTable";
import LastTable from "./Tables/LastTable";
import { trs } from "../../translations";
import "./MyTicketsPage.css";



function MyTicketsPage() {
  const language = useSelector(state => state.language.lang); //defined to re-rendar componant on language change

  return (
    <>
      <Navigation />
      <main className="my-tickets-page wrapper layout-main">
        <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("ACCOUNT_OVERVIEW")}]} />
        <h1 className="page-header">{trs("ACCOUNT_OVERVIEW")} - ANTONÍN VONDRUŠKA</h1>
        <div className="my-tickets-page__buttons-wrapper">
          <button className="app-button app-button--primary mr-40 my-tickets-page__first-btn">{trs("BUY_A_NEW_TICKET")}</button>
          <button className="app-button app-button--primary">VOUCHER</button>
        </div>
        <TopSection />
        <section>
          <h2 className="page-section-header">{trs("TICKETS_AND_SUBSCRIPTIONS")}</h2>

          <div className="accordion flex-wrapper">
            <span className="accordion__text">{trs("CURRENTLY_VALID_TICKETS_SUBSCRIPTION_INCLUDING_")}</span>
            <div className="accordion__toggle" />
          </div>
          <FirstTable />

          <div className="accordion flex-wrapper">
            <span className="accordion__text">{trs("CURRENTLY_VALID_ONE_TIME_TICKETS")}</span>
            <div className="accordion__toggle" />
          </div>
          <SecondTable />

          <div className="accordion flex-wrapper">
            <span className="accordion__text">{trs("SUBSCRIPTION_TICKET_HISTORY")}</span>
            <div className="accordion__toggle" />
          </div>
          <CommonTable />

          <div className="accordion flex-wrapper">
            <span className="accordion__text">{trs("HISTORY_ONE_TIME_TICKET_TITLE")}</span>
            <div className="accordion__toggle" />
          </div>
          <CommonTable />

          <div className="accordion flex-wrapper">
            <span className="accordion__text">{trs("HISTORY_OF_CARD_OPERATIONS")}</span>
            <div className="accordion__toggle" />
          </div>
          <LastTable />
        </section>
      </main>
    </>
  );
}

export default MyTicketsPage;

