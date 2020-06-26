import React from 'react';

import "./CreditCardForm.css";

function CreditCardForm({ cardData, setCardData, background = "air-bank" }) {

  const changeHandler = ({ target: { name, value } }) => {
    setCardData({ ...cardData, [name]: value })
  }

  return (
    <div className={background + " card-form"}>
      <label>Přezdívka
        <input className="input-field card-form__title" value={cardData.title} onChange={changeHandler} name="title" />
      </label>
      <div className="input-chain input-chain--card-number">
        <input className="input-field" type="number" value={cardData.cardNumber1} onChange={changeHandler} name="cardNumber1" />
        <div className="input-chain__dash" />
        <input className="input-field" type="number" value={cardData.cardNumber2} onChange={changeHandler} name="cardNumber2" />
        <div className="input-chain__dash" />
        <input className="input-field" type="number" value={cardData.cardNumber3} onChange={changeHandler} name="cardNumber3" />
        <div className="input-chain__dash" />
        <input className="input-field" type="number" value={cardData.cardNumber4} onChange={changeHandler} name="cardNumber4" />
      </div>
      <div className="input-chain input-chain--date">
        <input className="input-field" type="number" value={cardData.validMonth} onChange={changeHandler} name="validMonth" />
        <div className="input-chain__dash" />
        <input className="input-field" type="number" value={cardData.validYear} onChange={changeHandler} name="validYear" />
      </div>
      <div className="owner-name">
        <input className="input-field" value={cardData.name} onChange={changeHandler} name="name" />
        <input className="input-field" value={cardData.surname} onChange={changeHandler} name="surname" />
      </div>
    </div>
  );
}

export default CreditCardForm;
