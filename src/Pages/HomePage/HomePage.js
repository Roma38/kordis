import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

import ModalWindow from "../../Components/ModalWindow/ModalWindow";
import arrow_icon from "../../assets/arrow_icon.svg";
import plus_icon from "../../assets/plus_icon.svg";
import fb_white_icon from "../../assets/fb_white_icon.svg";
import google_white_icon from "../../assets/google_white_icon.svg";
import google_green from "../../assets/google_green.png";
import facebook_green from "../../assets/facebook_green.png";
import ids_jmk_small_logo from "../../assets/ids_jmk_small_logo.png";
import navigation from "../../assets/navigation.png";
import ipad from "../../assets/ipad.png";
import macbook from "../../assets/macbook.png";
import "./HomePage.css";
import {login} from "../../redux/actions/auth";
import {logOut} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {trs} from "../../translations";

function HomePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    let userStatus = useSelector(state => state.auth.authState) === "authFailed";
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <main className="home-page layout-main">
            {isModalOpen && <ModalWindow>
                <h3 className="modal__header">JAK SE CHCETE REGISTROVAT?</h3>
                <div className="modal__links-wrapper">
                    <Link to="/registration">
                        <img src={ids_jmk_small_logo} alt="ids jmk logo"/>
                    </Link>
                    <img src={facebook_green} alt="facebook logo"/>
                    <img src={google_green} alt="google+ logo"/>
                </div>
                <button className="app-button" onClick={() => setIsModalOpen(false)}>STORNO</button>
            </ModalWindow>}
            {userStatus && <ModalWindow>
                <h3 className="modal__header">{trs("LOGIN_FAILED")}</h3>
                <div className="modal__links-wrapper">
                    {trs("LOGIN_ERROR")}
                </div>
                <button className="app-button" onClick={() => dispatch(logOut())}>{trs("BACK")}</button>
            </ModalWindow>}
            <div className="mobile-slider">
                <div className="home-page__circle-buttons home-page__circle-buttons--mobile">
                    <div className="home-page__circle-buttons-active"/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>

            <section className="first-section">
                <div className="wrapper">
                    <div className="col-50 left-col">
                        <h1>VÝLUKA NA TRATI BRNO - VYŠKOV</h1>
                        <p className="home-page__paragraph">Na trati Brno - Vyškov je plánována výluka v období od
                            března 2020 do září 2020. Doprava na dané trase bude nahrazena autobusovým spojením. Více
                            informací se dozvíte v článku.</p>
                    </div>

                    <div className="col-50 right-col">
                        <div className="auth-card__wrapper">
                            <div className="auth-card">
                                <div className="auth-card__header">
                                    <img src={arrow_icon} alt="arrow"/>Přihlášení
                                </div>

                                <div className="auth-card__body">
                                    <form onSubmit={e => e.preventDefault()}>
                                        <div className="input-group">
                                            <label>LOGIN</label>
                                            <input className="input-field" value={email}
                                                   onChange={e => setEmail(e.target.value)} type="email" required/>
                                        </div>

                                        <div className="input-group">
                                            <label>HESLO</label>
                                            <input className="input-field" value={password}
                                                   onChange={e => setPassword(e.target.value)} type="password"
                                                   required/>
                                        </div>

                                        <label className="auth-card__checkbox">
                                            <input type="checkbox"
                                                // checked={}
                                                // onChange={() => { }}
                                            /> Zapamatovat přihlašovací údaje
                                        </label>

                                        <label className="auth-card__checkbox">
                                            <input type="checkbox"
                                                // checked={}
                                                // onChange={() => { }}
                                            /> Trvalé přihlášení
                                        </label>
                                        <Link to="/" className="auth-card__link">ZAPOMENUTÉ HESLO >></Link>
                                        <button className="app-button"
                                                onClick={() => dispatch(login({email, password}))}>PŘIHLÁSIT
                                        </button>

                                        <Link to="/my-profile">
                                        </Link>
                                    </form>
                                    <div className="auth-card__or-divider">nebo</div>
                                    <div>
                                        <img className="auth-card__facebook-icon" src={fb_white_icon}
                                             alt="facebook icon"/>
                                        <img src={google_white_icon} alt="google+ icon"/>
                                    </div>
                                    <div className="auth-card__or-block">nebo</div>
                                </div>
                            </div>
                        </div>
                        <div className="auth-card__wrapper">
                            <div className="auth-card">
                                <div className="auth-card__header">
                                    <img src={plus_icon} alt="arrow"/>Registrace
                                </div>

                                <div className="auth-card__body">
                                    <p>Ještě nejste registrováni? Zaregistrujte se, nakupte a cestujte s námi
                                        výhodněji.</p>
                                    <button className="app-button" onClick={() => setIsModalOpen(true)}>PŘEJÍT NA
                                        REGISTRACI
                                    </button>
                                </div>
                            </div>

                            <div className="auth-card">
                                <div className="auth-card__header auth-card__header__last-child">
                                    <img src={plus_icon} alt="arrow"/>Přihlášení platební kartou
                                </div>

                                <form className="auth-card__body">
                                    <div className="input-chain">
                                        <input className="input-field" type="number" min="0" max="9"/>
                                        <div className="input-chain__dash"/>
                                        <input className="input-field" type="number" min="0" max="9"/>
                                        <div className="input-chain__dash"/>
                                        <input className="input-field" type="number" min="0" max="9"/>
                                        <div className="input-chain__dash"/>
                                        <input className="input-field" type="number" min="0" max="9"/>
                                    </div>
                                    <button
                                        className="app-button"
                                        onClick={() => {
                                            history.push("/card-history")
                                        }}
                                    >
                                        PŘIHLÁSIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="home-page__circle-buttons">
                        <div className="home-page__circle-buttons-active"/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </section>

            <section className="wrapper">
                <div className="gadget-card__container">
                    <div className="gadget-card">
                        <img src={navigation} alt="GPS navigator"/>
                        <div className="gadget-card__footer">APLIKACE 1</div>
                    </div>

                    <div className="gadget-card">
                        <img src={ipad} alt="ipad"/>
                        <div className="gadget-card__footer">APLIKACE 2</div>
                    </div>

                    <div className="gadget-card">
                        <img src={macbook} aly="macbook" alt="macbook"/>
                        <div className="gadget-card__footer">APLIKACE 3</div>
                    </div>

                    <div className="gadget-card">
                        <img src={navigation} alt="GPS navigator"/>
                        <div className="gadget-card__footer">APLIKACE 4</div>
                    </div>

                    <div className="gadget-card">
                        <img src={ipad} alt="ipad"/>
                        <div className="gadget-card__footer">APLIKACE 5</div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
