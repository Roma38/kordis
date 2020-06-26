import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import {trs} from "../../translations";

import DailyCardOperations from "./Tables/DailyCardOperations";
import SingleTicketHistory from "./Tables/SingleTicketHistory";

import "./CardHistoryPage.css";


function MyHistoryPage() {
    const history = useHistory();
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change

    return (
        <>
            <main className="card-history-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("CARD_HISTORY_TITLE")}]}/>
                <h1 className="page-header">{trs("CARD_HISTORY_TITLE" )}</h1>

                <div className="card-history-page__sections__wrapper">
                    <section className="card-history-registration">
                        <div className="card-history-registration__wrap">
                            <button className={"button-register"} onClick={ () => { history.push( "/registration" ) } } >
                                { trs("REGISTER2") }
                            </button>
                        </div>
                    </section>
                    <section className="card-history-daily">
                        <DailyCardOperations lang={language} />
                    </section>
                    <section className="card-history-single">
                        <SingleTicketHistory lang={language} />
                    </section>
                </div>
            </main>
        </>
    );
}

export default MyHistoryPage;