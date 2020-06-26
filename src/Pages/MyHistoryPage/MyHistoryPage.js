import React from 'react';

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import {trs} from "../../translations";

import SubscriptionHistory from "./Tables/SubscriptionHistory";
import OneTimeTicketHistory from "./Tables/OneTimeTicketHistory";
import PaymentHistory from "./Tables/PaymentHistory";
import DataChangesHistory from "./Tables/DataChangesHistory";
import "./MyHistoryPage.css";

import {useSelector} from "react-redux";

function MyHistoryPage() {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    return (
        <>
            <Navigation/>
            <main className="my-history-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("MY_HISTORY")}]}/>
                <h1 className="page-header">{trs("MY_HISTORY")}</h1>

                <div className="my-history-page__sections__wrapper">
                    <section>
                        <h2 className="page-section-header">{trs("HISTORY_SUBSCRIPTION_ONE_TIME_TITLE")}</h2>
                        <SubscriptionHistory lang={language}/>
                        <OneTimeTicketHistory lang={language}/>
                        <h2 className="page-section-header history-table-title">{trs("PAYMENT_HISTORY")}</h2>
                        <PaymentHistory/>
                        <h2 className="page-section-header history-table-title">{trs("HISTORY_OF_DATA_CHANGES")}</h2>
                        <DataChangesHistory/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default MyHistoryPage;