import React from 'react';

import rss_icon from "../../assets/rss-icon.svg";
import info_icon from "../../assets/info-icon.svg";
import search_icon from "../../assets/search-icon.svg";
import fb_dark_icon from "../../assets/fb_dark_icon.svg";
import tweeter_dark_icon from "../../assets/tweeter_dark_icon.svg";
import insta_dark_icon from "../../assets/insta_dark_icon.svg";
import youtube_dark_icon from "../../assets/youtube_dark_icon.svg";
import kordis_icon from "../../assets/kordis-icon.svg";

function Footer() {
    return (
        <footer className="layout-footer">
            <div className="footer-strip">
                <div className="wrapper">
                    <div className="footer-strip__wrapper">

                        <div className="footer-strip__item">
                            <img src={info_icon} alt="info-icon"/>AKTUÁLNÍ INFOMAIL
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="footer-column">
                    <h2>MENU</h2>
                    <ul>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/timetables/links")}} >JÍZDNÍ ŘÁDY</li>
                        <li className="footer__active-link" onClick={() => {window.open("https://web-qa.kordis.cz/documents/plany-site-brno")}}>PLÁNY SÍTĚ</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/documents/ceny-jizdneho")}}>JÍZDENKY</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/a/turisti-zakladni-informace.html")}}>PRO TURISTY</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/a/kordis-jmk.html")}}>KORDIS JMK</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/a/kontakty.html")}}>KONTAKT</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2>RYCHLÉ ODKAZY</h2>
                    <ul>
                        <li onClick={() => {window.open("https://mapa.idsjmk.cz")}}>INTERAKTIVNÍ MAPA</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/connection-finder/ticket-finder/search")}}>VÝPOČET JÍZDNÉHO</li>
                        <li onClick={() => {window.open("http://idsjmk.idos.cz/idsjmk/osj/")}}>OSOBNÍ JÍZDNÍ ŘÁD</li>
                        <li onClick={() => {window.open("https://mapa.idsjmk.cz")}}>POLOHA VOZIDEL</li>
                        <li onClick={() => {window.open("https://web-qa.kordis.cz/a/poseidon.html")}}>O APLIKACI POSEIDON</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2>INFORMACE A PODNĚTY</h2>
                    <p>TELEFON: 5 4317 4317</p>
                    <a className="footer__active-link" href="mailto:info@kordis-jmk.cz" target="_blank"
                       rel="noopener noreferrer">info@kordis-jmk.cz</a>
                    <p className="footer-column__paragraph">
                        KORDIS JMK JE ČLENEM ČESKÉ
                        ASOCIACE ORGANIZÁTORŮ VEŘEJNÉ
                        DOPRAVY, Z. S.
                    </p>
                </div>

                <div className="footer-column footer-column--last">
                    <div className="social-network-links">
                      <img src={fb_dark_icon} alt="facebook icon" onClick={() => {window.open("https://www.facebook.com/idsjmk.cz/")}} />
                      <img src={tweeter_dark_icon} alt="tweeter icon" onClick={() => {window.open("https://twitter.com/ids_jmk")}} />
                      <img src={insta_dark_icon} alt="insta icon" onClick={() => {window.open("https://www.instagram.com/idsjmk.cz/")}} />
                      <img src={youtube_dark_icon} alt="youtube icon" onClick={() => {window.open("https://www.youtube.com/user/IDSJMKoriginal")}} />
                    </div>
                    <img src={kordis_icon} alt="Kordis logo"/>
                    <p>
                        © 2018 Kordis Jak Licence Creative
                        Commons Creative Commons Uveďte
                        Původ 4.0 Mezinárodní Licence.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
