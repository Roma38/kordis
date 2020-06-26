import React, { useState } from 'react';

import SubscriptionExtension from "./TicketAccordionSections/SubscriptionExtension";
import AnotherOneTicket from "./TicketAccordionSections/AnotherOneTicket";
import NeedAvice from "./TicketAccordionSections/NeedAvice";
import { trs } from "./../../../translations";


const accordionSections = [
  {
    title: "EXTENSION_OF_MY_SUBSCRIPTION_TICKET",
    BodyComponent: SubscriptionExtension
  },
  {
    title: "I_WANT_ANOTHER_TICKET",
    BodyComponent: AnotherOneTicket
  },
  {
    title: "I_NEED_ADVICE",
    BodyComponent: NeedAvice
  }
]

function TicketSelection() {
  const [openedSection, setOpenedSection] = useState(0);
  return (
    <section className="accordion__body">
      {accordionSections.map(({ title, BodyComponent }, index) => (
        <div key={index}>
          <div onClick={() => setOpenedSection(index)} className="accordion accordion--secondary">
            <div className={openedSection === index
              ? "accordion--secondary__toggle accordion--secondary__toggle--active"
              : "accordion--secondary__toggle"} />
            <span className="accordion__text">{trs(title)}</span>
          </div>
          {openedSection === index && <BodyComponent />}
        </div>
      ))}
    </section>
  );
}

export default TicketSelection;