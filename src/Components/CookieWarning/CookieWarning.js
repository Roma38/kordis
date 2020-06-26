import React, { useState } from 'react';

import "./CookieWarning.css";

function CookieWarning(props) {
  const [isHiden, setIsHiden] = useState(false);

  const clickHandler = () => {
    sessionStorage.setItem("cookiesWarned", true);
    setIsHiden(true);
  }

  return (
    <div className={isHiden ? "hidden" : "cookie-warning"}>
      <div className="wrapper">
        <div>
          Pro zajištění plné funkčnosti webu, obsahu a funkcí tento web používá soubory cookies. Prosíme o udělení souhlasu s používáním souborů cookies. Děkujeme.
        </div>
        <button className="app-button" onClick={clickHandler}>SOUHLASÍM</button>
      </div>
    </div>
  );
}

export default CookieWarning;
