import React, { useState } from 'react';
import { useSelector } from "react-redux";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import TicketItem from "./TicketItem";
import TicketItemMobile from "./TicketItemMobile";
import CardSelection from "./AccordionSections/CardSelection";
import TicketOwnerSelection from "./AccordionSections/TicketOwnerSelection";
import DiscountSelection from "./AccordionSections/DiscountSelection";
import TicketSelection from "./AccordionSections/TicketSelection";
import Payment from "./AccordionSections/Payment";

import { trs } from "../../translations";
import "./NewTicketPage.css";

const accordionSections = [
  {
    title: "SELECTION__ENTER_CARD",
    BodyComponent: CardSelection,
  },
  {
    title: "I_BUY_TICKET_FOR",
    BodyComponent: TicketOwnerSelection,
  },
  {
    title: "DISCOUNT_SELECTION",
    BodyComponent: DiscountSelection,
  },
  {
    title: "TICKET_SELECTION",
    BodyComponent: TicketSelection,
  },
  {
    title: "PAYMENT_",
    BodyComponent: Payment,
  },
]

function NewTicketPage() {
  const language = useSelector(state => state.language.lang); //defined to re-rendar componant on language change
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Navigation />
      <main className="new-ticket-page wrapper layout-main">
        <Breadcrumb items={["ÚVOD", "MOJE JÍZDENKY", "KOUPIT NOVOU JÍZDENKU"]} items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/dashboard', label: trs("ACCOUNT_OVERVIEW")}, {to: '/dashboard/new-ticket', label: trs("BUY_NEW_TICKET")} ]} />
        <h1 className="page-header">{trs("BUY_NEW_TICKET")}</h1>
        <div className="new-ticket-page__wrapper">
          <div className="new-ticket-page__accordion">
            {accordionSections.map(({ title, BodyComponent }, index) => (
              <div key={index}>
                <div  className={activeStep === index
                  ? "accordion--active accordion flex-wrapper"
                  : activeStep < index
                    ? "accordion--disabled accordion flex-wrapper"
                    : " accordion flex-wrapper"}
                  onClick={() => setActiveStep(index)}>
                  <span className="accordion__text">{trs(title)}</span>
                  <div className="accordion__toggle" />
                </div>
                {activeStep === index && <BodyComponent />}
              </div>
            ))}
          </div>
          <TicketItem />
          <TicketItemMobile />
        </div>
      </main>
    </>
  );
}

export default NewTicketPage;

