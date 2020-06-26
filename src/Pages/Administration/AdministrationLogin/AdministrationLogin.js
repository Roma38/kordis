import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

import arrow_icon from "../../../assets/arrow_icon.svg";
import fb_white_icon from "../../../assets/fb_white_icon.svg";
import google_white_icon from "../../../assets/google_white_icon.svg";

import "./AdministrationLogin.css";
import {login} from "../../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {trs} from "../../../translations";

function AdministrationLogin() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    let userStatus = useSelector(state => state.auth.authState) === "authFailed";
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <main className="admin-login-page admin-page">
           {/* <div className="login-area">
               <h2>Login</h2>
               <input type="text" placeholder="User Name" />
               <input type="password" placeholder="Password" />

               <button className="submit-login">Login</button>

               <a href="#" className="forget-password">Forget Password</a>
           </div> */}

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

                                        
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
        </main>
    );
}

export default AdministrationLogin;