import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import calendarIcon from "../../assets/icons8-calendar-48_(2).svg";
import {trs} from "../../translations";
import {isEmail, isValidDate} from "../../utils";
import {phoneCodes} from "../../constants";
import {registrateUser} from "../../redux/actions/auth";
import "./RegistrationPage.css";
import processing_personal_data_pdf from "../../assets/registration/info_processing_personal_data.pdf";
import {Link} from "react-router-dom";

function RegistrationPage() {
    const language = useSelector(state => state.language.lang); //defined to re-rendar componant on language change
    const dispatch = useDispatch();
    const [touchedFields, setTouchedFields] = useState([]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [personType, setPersonType] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surName, setSurname] = useState("");
    const [company, setCompany] = useState("");
    const [dateBirth, setBirthDate] = useState("");
    const [email, setContactEmail] = useState("");
    const [countryCode, setCountryCode] = useState("+420");
    const [phone, setContactPhone] = useState("");

    const [idCardFile, setIdCardFile] = useState("");

    const [personalAddress, setAddress] = useState("");
    const [personalPostCode, setPostalCode] = useState("");
    const [personalCity, setCity] = useState("");
    const [personalState, setPersonalState] = useState("")
    const [mailingAddress, setMailingAddress] = useState("");
    const [mailingPostCode, setMailingPostalCode] = useState("");
    const [mailingCity, setMailingCity] = useState("");
    const [mailingState, setMailingState] = useState("")

    const [photo, setPhoto] = useState("");
    const [photoPreview, setPhotoPreview] = useState("");

    const [offerAccesEmail, setOfferAccesEmail] = useState("");
    const [discountType, setDiscountType] = useState("None");
    const [discountNumber, setDiscountNumber] = useState("");

    const [isInformed, setIsInformed] = useState(false);
    const [isPermitted, setIsPermitted] = useState(true);

    const role = "user"; //TODO: find out where it's defining

    const markAsTouched = e => setTouchedFields([...touchedFields, e.target.name]);

    const isValid = () => username
    && password.length >= 6
    && confirmPass === password
    && personType && firstName && surName
    && isValidDate(dateBirth)
    && personalAddress && personalPostCode && personalCity && personalState
        ? true : false;

    const submitHandler = e => {
        e.preventDefault();
        setTouchedFields(["username", "password", "confirmPass", "personType", "firstName", "surName", "dateBirth", "personalAddress", "personalPostCode", "personalCity", "personalState", "isInformed", "photo"]);

        if (isValid() && isInformed) {
            const userData = {
                firstName, surName, password, personType, username, company,
                dateBirth, phone, email, personalAddress, personalPostCode,
                personalCity, personalState, mailingAddress, mailingPostCode, mailingCity,
                mailingState, offerAccesEmail, discountType, discountNumber, role
            }

            dispatch(registrateUser(userData, idCardFile, photo));
        }
    }

    const uploadPictureHandler = e => {
        if (!e.target.files.length) return;
        setPhoto(e.target.files[0])

        let reader = new FileReader();
        reader.onloadend = () => setPhotoPreview(reader.result);
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <main className="registration-page wrapper layout-main">
            <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("REGISTRATION")}]}/>
            <h1 className="page-header">{trs("REGISTRATION")}</h1>
            <form className="registration-form" onSubmit={submitHandler}>
                <div className="col-50">
                    <section className="registration-page__picture-section">
                        <div>
                            <input type="file" id="photoInput" accept=".jpg, .png, .jpeg" className="hidden"
                                   onChange={uploadPictureHandler}/>
                            <label htmlFor="photoInput" className="picture-placeholder"
                                   style={photoPreview ? {backgroundImage: `url(${photoPreview})`} : {}}>
                                <div className="picture-placeholder__plus-button">+</div>
                            </label>
                        </div>
                        {/* {touchedFields.includes("photo") && !photo && <div className="error-message">Required!</div>} */}
                        <p className="paragraph">{trs("PLEASE_INSERT_PHOTOS_SIMILAR")}</p>
                    </section>

                    <section>
                        <h2 className="form-section-header">{trs("LOGIN")}</h2>

                        <div className="input-group">
                            <label className="col-30">{trs("USERNAME")}*</label>
                            <input className="input-field col-70"
                                //required
                                   value={username}
                                   onChange={e => setUsername(e.target.value)}
                                   name="username"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("username") && !username &&
                            <div className="error-message">Required</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-30">{trs("PASSWORD")}*</label>
                            <input className="input-field col-70"
                                   type="password"
                                //required
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                                   name="password"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("password") && password.length < 6 &&
                            <div className="error-message">6 characters minimum!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-30">{trs("VERIFICATION_OF_PASSWORD")}*</label>
                            <input className="input-field col-70"
                                   type="password"
                                //required
                                   value={confirmPass}
                                   onChange={e => setConfirmPass(e.target.value)}
                                   name="confirmPass"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("confirmPass") && confirmPass !== password &&
                            <div className="error-message">Doesn't match password!</div>}
                        </div>
                    </section>

                    <section>
                        <h2 className="form-section-header">{trs("PERSONAL_DETAILS")}</h2>

                        <div className="input-group radio-button">
                            <label className="col-50">
                                <input type="radio"
                                       name="personType"
                                    //required
                                       checked={personType === "physical"}
                                       onChange={() => setPersonType("physical")}
                                />{trs("PHYSICAL_PERSON")}
                            </label>

                            <label className="col-50">
                                <input type="radio"
                                       name="personType"
                                    //required
                                       checked={personType === "legal"}
                                       onChange={() => setPersonType("legal")}
                                />{trs("LEGAL_PERSON")}
                            </label>
                            {touchedFields.includes("personType") && !personType &&
                            <div className="error-message">Choose the option!</div>}
                        </div>

                        <div className="input-group row">
                            <label className="col-40">{trs("NAME_INCL_MIDDLE_NAMES")}*</label>
                            <input className="input-field col-60"
                                   type="text"
                                //required
                                   value={firstName}
                                   onChange={e => setFirstName(e.target.value)}
                                   name="firstName"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("firstName") && !firstName &&
                            <div className="error-message">Required!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-40">{trs("SURNAME")}*</label>
                            <input className="input-field col-60"
                                   type="text"
                                //required
                                   value={surName}
                                   onChange={e => setSurname(e.target.value)}
                                   name="surName"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("surName") && !surName &&
                            <div className="error-message">Required!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-40">{trs("NAME_OF_THE_SUBJECT")}</label>
                            <input className="input-field col-60"
                                   type="text"
                                   value={company}
                                   onChange={e => setCompany(e.target.value)}
                                // name="company"
                                // onBlur={markAsTouched}
                            />
                        </div>

                        <div className="input-group date-input">
                            <label className="col-40">{trs("DATE_OF_BIRTH")}*</label>
                            <input className="input-field col-60"
                                   type="date"
                                //required
                                   value={dateBirth}
                                   onChange={e => setBirthDate(e.target.value)}
                                   name="dateBirth"
                                   onBlur={markAsTouched}
                            />
                            <img src={calendarIcon} alt="calendar icon"/>
                            {touchedFields.includes("dateBirth") && !isValidDate(dateBirth) &&
                            <div className="error-message">Invalid Date!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-40">{trs("CONTACT_EMAIL")}*</label>
                            <input className="input-field col-60"
                                   type="email"
                                   value={email}
                                   onChange={e => setContactEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label className="col-40">{trs("CONTACT_PHONE")}</label>
                            <div className="col-60 phone-input">
                                <select
                                    className="input-field code-select"
                                    value={countryCode}
                                    onChange={e => setCountryCode(e.target.value)}
                                >
                                    {phoneCodes.map(({dial_code, code}) => <option key={code}
                                                                                   value={dial_code}>{code} | {dial_code}</option>)}
                                </select>
                                <input className="input-field"
                                       type="tel" value={phone}
                                       onChange={e => setContactPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="form-section-header">{trs("ID_CARD")}</h2>
                        <input type="file" id="fileInput" accept=".jpg, .png" className="hidden"
                               onChange={e => setIdCardFile(e.target.files[0])}/>
                        <label htmlFor="fileInput" className="app-button">{trs("CHOOSE_FROM_THE_FILE")}</label>
                        <span className="file-input-alert">{idCardFile ? idCardFile.name : trs("NO_FILE_CHOSEN")}</span>
                        <p className="paragraph">{trs("YOU_CAN_ATTACH_COPY_OF_ID_CARD_1")}<br/>{trs("YOU_CAN_ATTACH_COPY_OF_ID_CARD_2")}
                        </p>
                    </section>
                </div>

                <div className="col-50">
                    <section>
                        <h2 className="form-section-header">{trs("PERMANENT_STAY")}</h2>

                        <div className="input-group">
                            <label className="col-20">{trs("ADDRESS")}*</label>
                            <input className="input-field col-80"
                                   type="text" value={personalAddress}
                                //required
                                   onChange={e => setAddress(e.target.value)}
                                   name="personalAddress"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("personalAddress") && !personalAddress &&
                            <div className="error-message">Required!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-20">{trs("POSTAL_CODE")}*</label>
                            <input className="input-field col-80"
                                   type="text"
                                //required
                                   value={personalPostCode}
                                   onChange={e => setPostalCode(e.target.value)}
                                   name="personalPostCode"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("personalPostCode") && !personalPostCode &&
                            <div className="error-message">Required!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-20">{trs("CITY")}*</label>
                            <input className="input-field col-80"
                                   type="text"
                                //required
                                   value={personalCity}
                                   onChange={e => setCity(e.target.value)}
                                   name="personalCity"
                                   onBlur={markAsTouched}
                            />
                            {touchedFields.includes("personalCity") && !personalCity &&
                            <div className="error-message">Required!</div>}
                        </div>

                        <div className="input-group">
                            <label className="col-20">{trs("STATE")}*</label>
                            <select className="input-field code-select col-80"
                                    value={personalState}
                                    onChange={e => setPersonalState(e.target.value)}>
                                <option disabled value=""></option>
                                <option value="Česká republika">Česká republika</option>
                            </select>
                            {touchedFields.includes("personalState") && !personalState &&
                            <div className="error-message">Required!</div>}
                        </div>
                    </section>

                    <section>
                        <h2 className="form-section-header">{trs("MAILING_ADDRESS")}</h2>

                        <div className="input-group">
                            <label className="col-20">{trs("ADDRESS")}</label>
                            <input className="input-field col-80"
                                   type="text"
                                   value={mailingAddress}
                                   onChange={e => setMailingAddress(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label className="col-20">{trs("POSTAL_CODE")}</label>
                            <input className="input-field col-80"
                                   type="text"
                                   value={mailingPostCode}
                                   onChange={e => setMailingPostalCode(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label className="col-20">{trs("CITY")}</label>
                            <input className="input-field col-80"
                                   type="text"
                                   value={mailingCity}
                                   onChange={e => setMailingCity(e.target.value)}
                            />
                        </div>


                        <div className="input-group">
                            <label className="col-20">{trs("STATE")}</label>
                            <select className="input-field code-select col-80"
                                    value={mailingState}
                                    onChange={e => setMailingState(e.target.value)}>
                                <option value="Česká republika">Česká republika</option>
                            </select>
                        </div>
                    </section>

                    <section className="wide-section">
                        <h2 className="form-section-header">{trs("DATA_ABOUT_CONNECTED_ACCOUNTS")}</h2>

                        <div className="input-group">
                            <label className="col-50">{trs("OFFER_ACCES_TO_THE_ACCOUNT_TO")}</label>
                            <input className="input-field col-50"
                                   type="email" value={offerAccesEmail}
                                   onChange={e => setOfferAccesEmail(e.target.value)}
                            />
                        </div>
                    </section>

                    <section className="wide-section">
                        <h2 className="form-section-header">{trs("DISCOUNT_CARD")}</h2>

                        <div className="input-group">
                            <label className="col-30">{trs("TYPE_OF_DISCOUNT_CARD")}</label>
                            <select className="input-field code-select col-70"
                                    value={discountType}
                                    onChange={e => setDiscountType(e.target.value)}>
                                <option value="None">{trs("NONE")}</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="col-30">{trs("NUMBER_OF_DISCOUNT_CARD")}</label>
                            <input className="input-field col-70" type="text" value={discountNumber}
                                   onChange={e => setDiscountNumber(e.target.value)}/>
                        </div>
                    </section>
                </div>

                <section className="bottom-section">
                    <p className="small-font">{trs("THESE_DATA_ARE_MANDATORY")}</p>
                    <div className="form-section-header">
                        <input type="checkbox"
                               checked={isInformed}
                               onChange={() => setIsInformed(!isInformed)}
                        />
                        <label className="form-section-header label-link" onClick={() => {
                            window.open(processing_personal_data_pdf)
                        }}> {/* TODO: highligth when not checked */}
                            {trs("INFORMATION_FOR_USING_PERSONAL_DETAILS")}
                        </label>
                        <div className="tooltip">?
                            <span className="tooltiptext">
                                {trs("REGISTRATION_TOOLTIP_1")}
                                <a href={"http://www.brnoid.cz/docs/zpracovani_osobnich_udaju.pdf"} target="_blank"> ({trs("MORE_INFO_HERE")})</a>
                            </span>
                        </div>
                        {touchedFields.includes("isInformed") && !isInformed &&
                        <div className="error-message">Required!</div>}
                    </div>
                    <div className="form-section-header">
                        <label className="switch-checkbox">
                            <input type="checkbox"
                                   id="permissionSwitcher"
                                   checked={isPermitted}
                                   onChange={() => setIsPermitted(!isPermitted)}
                            />
                            <span className="switch-slider"/>
                        </label>
                        <label htmlFor="permissionSwitcher"
                               className="form-section-header"> {trs("PERMISSION_WITH_HANDING_OVER_PERSONAL_DATA_TO")}</label>
                        <div className="tooltip">?
                            <span className="tooltiptext">{trs("REGISTRATION_TOOLTIP_2")}</span>
                        </div>
                    </div>

                    <button className="app-button app-button--primary">{trs("REGISTER")}</button>
                </section>
            </form>
        </main>
    );
}

export default RegistrationPage;
