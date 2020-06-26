import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ids_jmk_icon from "../../assets/IDS_JMK-logo.svg";
import email_icon from "../../assets/email-icon.svg";
import phone_icon from "../../assets/phone-icon.svg";
import facebook_icon from "../../assets/facebook-icon.svg";
import tweeter_icon from "../../assets/tweeter-icon.svg";
import insta_icon from "../../assets/insta-icon.svg";
import youtube_icon from "../../assets/youtube-icon.svg";
import menu_icon from "../../assets/menu-bar.svg";
import { changeLanguage } from "../../redux/actions/language";

function Header(props) {
  const language = useSelector(state => state.language.lang);
  const dispatch = useDispatch();

  const [menuClass , setMenuClass] = useState ('closed');

  
  return (
    <header className={ menuClass + " layout-header"}>
      <div className="wrapper">
        <img src={ids_jmk_icon} alt="IDS logo" />

        <button type="button" className={`mobile-menu ${menuClass}`}  onClick={ e => (menuClass === "closed" ? setMenuClass ("opened") : setMenuClass("closed"))  }><img src={menu_icon} alt="" /></button>

        <div className="header-column">
          <div className="contacts-block" >
            <a className="header-mail" href="mailto:info@kordis-jmk.cz" target="_blank" rel="noopener noreferrer">
              <img src={email_icon} alt="mail icon" /> info@kordis-jmk.cz
						</a>

            <a className="header-phone" href="tel:+420543174317">
              <img src={phone_icon} alt="phone icon" /> +420 5 4317 4317
						</a>
          </div>
          <div className="social-network-links">
            <img src={facebook_icon} alt="facebook icon" onClick={() => {window.open("https://www.facebook.com/idsjmk.cz/")}} />
            <img src={tweeter_icon} alt="tweeter icon" onClick={() => {window.open("https://twitter.com/ids_jmk")}} />
            <img src={insta_icon} alt="insta icon" onClick={() => {window.open("https://www.instagram.com/idsjmk.cz/")}} />
            <img src={youtube_icon} alt="youtube icon" onClick={() => {window.open("https://www.youtube.com/user/IDSJMKoriginal")}} />

            <button className="language-switcher" onClick={() => dispatch(changeLanguage(language === "en" ? "cz" : "en"))}>
              <div className={language === "cz" ? "current-lang" : ""}>CZ</div>
              <div className={language === "en" ? "current-lang" : ""}>EN</div>
            </button>
          </div>

          <div className="yellow-brick idsjmk-link" onClick={() => {window.open("https://www.idsjmk.cz")}} >idsjmk.cz</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
