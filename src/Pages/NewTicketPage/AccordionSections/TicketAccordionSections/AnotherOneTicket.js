import React, { useState } from 'react';

import PrepaidTicket from "./TicketTypesSections/PrepaidTicket";
import PerDayTicket from "./TicketTypesSections/PerDayTicket";
import SingleTicket from "./TicketTypesSections/SingleTicket";
import { trs } from "../../../../translations";


function AnotherOneTicket() {
  const [ticketType, setTicketType] = useState("Prepaid");

  return (
    <section className="accordion--secondary__body another-ticket-section">
      <label className="full-width">
        <input type="radio" onChange={() => setTicketType("Prepaid")} checked={ticketType === "Prepaid"} />
        {trs("PREPAID_TICKET")}
      </label>
      {ticketType === "Prepaid" && <PrepaidTicket />}

      <label className="full-width">
        <input type="radio" onChange={() => setTicketType("PerDay")} checked={ticketType === "PerDay"} />
        {trs("PER_DAYS")}
      </label>
      {ticketType === "PerDay" && <PerDayTicket />}

      <label className="full-width">
        <input type="radio" onChange={() => setTicketType("Single")} checked={ticketType === "Single"} />
        {trs("SINGLE")}
      </label>
      {ticketType === "Single" && <SingleTicket />}
    </section>
  );
}

export default AnotherOneTicket;