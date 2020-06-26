import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import CreditCardForm from "../../Components/CreditCardForm/CreditCardForm";
import calendarIcon from "../../assets/icons8-calendar-48_(2).svg";
import profilePicture from "../../assets/men-s-blue-dress-shirt-1043471.png";
import arrowsIcon from "../../assets/arrows.png";
import trashIcon from "../../assets/trash-icon.png";
import google_green from "../../assets/google_green.png";
import facebook_green from "../../assets/facebook_green.png";
import avatar from "../../assets/beautiful-2150881_640.png";
import { trs } from "../../translations";
import { isEmail, isValidDate } from "../../utils";
import { phoneCodes } from "../../constants";
import { registrateUser } from "../../redux/actions/auth";
import "./MyProfilePage.css";

function nullToString(value) {
  return value === null ? "" : value;
}

function MyProfilePage() {
  const language = useSelector(state => state.language.lang); //defined to re-rendar component on language change
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.auth.userInfo);
  const userData = userInfo.user;
  if (typeof userData === "undefined"){
    window.location = "/";
  }

  const [touchedFields, setTouchedFields] = useState([]);

  const [email, setEmail] = useState(nullToString(userData.email));
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [personType, setPersonType] = useState(nullToString(userData.personType));
  const [firstName, setFirstName] = useState(userData.firstName);
  const [surName, setSurname] = useState(nullToString(userData.surName));
  const [company, setCompany] = useState(nullToString(userData.company));
  const [dateBirth, setBirthDate] = useState(nullToString(userData.dateBirth));
  const [contactEmail, setContactEmail] = useState(nullToString(userData.email));
  const [countryCode, setCountryCode] = useState("+420");
  const [phone, setContactPhone] = useState(nullToString(userData.phone));

  const [idCardFile, setIdCardFile] = useState("");

  const [personalAddress, setAddress] = useState(nullToString(userData.personalAddress));
  const [personalPostCode, setPostalCode] = useState(nullToString(userData.personalPostCode));
  const [personalCity, setCity] = useState(nullToString(userData.personalCity));
  const [mailingAddress, setMailingAddress] = useState(nullToString(userData.mailingAddress));
  const [mailingPostCode, setMailingPostalCode] = useState(nullToString(userData.mailingPostCode));
  const [mailingCity, setMailingCity] = useState(nullToString(userData.mailingCity));

  const [photo, setPhoto] = useState("");

  const [offerAccesEmail, setOfferAccesEmail] = useState("");
  const [discountType, setDiscountType] = useState("None");
  const [discountNumber, setDiscountNumber] = useState("");

  const [isInformed, setIsInformed] = useState(false);

  const role = "user"; //TODO: find out where it's defining


  const markAsTouched = e => setTouchedFields([...touchedFields, e.target.name]);

  const isValid = () => isEmail(email)
    && password.length >= 6
    && confirmPass === password
    && personType && firstName && surName
    && isValidDate(dateBirth)
    && personalAddress && personalPostCode && personalCity
    ? true : false;

  const submitHandler = e => {
    e.preventDefault();
    setTouchedFields(["email", "password", "confirmPass", "personType", "firstName", "surName", "dateBirth", "personalAddress", "personalPostCode", "personalCity", "isInformed", "photo"]);

    if (isValid() && isInformed) {
      const userData = {
        firstName, surName, password, personType, email, company,
        dateBirth, phone, contactEmail, personalAddress, personalPostCode,
        personalCity, mailingAddress, mailingPostCode, mailingCity,
        offerAccesEmail, discountType, discountNumber, role
      }

      dispatch(registrateUser(userData, idCardFile, photo));
    }
  }

  return (
    <>
      <Navigation />
      <main className="profile-page wrapper layout-main ">
        <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '#', label: trs("MY_PROFILE")}]}/>
        <h1 className="page-header">{trs("MY_PROFILE")}</h1>
        <form className="registration-form" onSubmit={submitHandler}>
          <div className="col-50">
            <div className="profile-page__picture">
              <div className="profile-page__picture__wrapper">
                <img src={profilePicture} alt="profile-picture" />
                <div className="profile-page__picture__icons">
                  <img src={trashIcon} alt="delete" />
                  <img src={arrowsIcon} alt="change" />
                </div>
              </div>
              <div className="profile-page__picture__description">
                <p className="paragraph">{trs("PLEASE_INSERT_PHOTOS_IN_ID_FORMAT")}
                <br />{trs("THE_PHOTO_IS_ONLY_MANDATORY_FOR_")}</p>
                <div className="error-message">{trs("WAITING_FOR_PHOTO_APPROVAL")}</div>
              </div>
            </div>
            <section>
              <h2 className="form-section-header">{trs("LOGIN")}</h2>

              <div className="input-group">
                <label className="col-30">{trs("USERNAME")}*</label>
                <input className="input-field col-70" />
              </div>

              <div className="input-group">
                <label className="col-40">{trs("CHANGE_THE_LOGIN_METHOD")}</label>

                <div className="profile-page__radio-buttons">
                  <img src={facebook_green} alt="facebook logo" />
                  <img src={google_green} alt="google+ logo" />
                  <div className="active">{trs("CARD")}</div>
                  <div>{trs("STANDART")}</div>
                </div>
              </div>

              <button className="app-button">{trs("PASSWORD_CHANGE")}</button>
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
                {touchedFields.includes("personType") && !personType && <div className="error-message">Choose the option!</div>}
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
                {touchedFields.includes("firstName") && !firstName && <div className="error-message">Required!</div>}
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
                {touchedFields.includes("surName") && !surName && <div className="error-message">Required!</div>}
              </div>

              <div className="input-group">
                <label className="col-40">{trs("NAME_OF_THE_SUBJECT")}</label>
                <input className="input-field col-60"
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
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
                <img src={calendarIcon} alt="calendar icon" />
                {touchedFields.includes("dateBirth") && !isValidDate(dateBirth) && <div className="error-message">Invalid Date!</div>}
              </div>

              <div className="input-group">
                <label className="col-40">{trs("CONTACT_EMAIL")}</label>
                <input className="input-field col-60"
                  type="email"
                  value={contactEmail}
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
                    {phoneCodes.map(({ dial_code, code }) => <option key={code} value={dial_code}>{code} | {dial_code}</option>)}
                  </select>
                  <input className="input-field"
                    type="tel" value={phone}
                    onChange={e => setContactPhone(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="form-section-header">{trs("SPECIFIC_CODE")}</h2>
              <p className="regular-text">{trs("YOUR_SPECIFIC_CODE_IS")} <strong>1234987</strong>.</p>
            </section>

            <section>
              <h2 className="form-section-header">{trs("IDENTITY_CARD")}</h2>
              <input type="file" id="photoInput" accept=".jpg, .png" className="hidden" onChange={e => setPhoto(e.target.files[0])} />
              <label htmlFor="photoInput" className="app-button">{trs("CHOOSE_FROM_THE_FILE")}</label>
              <span className="file-input-alert">{photo ? photo.name : trs("NO_PHOTO_INSERTED")}</span>
              {touchedFields.includes("photo") && !photo && <div className="error-message">Required!</div>}
              <p className="paragraph">{trs("YOU_CAN_ATTACH_A_COPY_OF_YOUR_ID_CARD_TO_")}<br />
                {trs("COPY_OF_YOUR_ID_CARD_IS_COMPLETELY_")}</p>
            </section>

            <section>
              <h2 className="form-section-header">{trs("MY_BEARER")}</h2>
              <button className="app-button">{trs("ADD_NEW_BEARER")}</button>
              <CreditCardForm background="air-bank" cardData={{}} setCardData={() => { }} />
              <button className="app-button">{trs("REMOVE_BEARER")}</button>
              <CreditCardForm background="moneta-bank" cardData={{}} setCardData={() => { }} />
              <button className="app-button">{trs("REMOVE_BEARER")}</button>
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
                {touchedFields.includes("personalAddress") && !personalAddress && <div className="error-message">Required!</div>}
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
                {touchedFields.includes("personalPostCode") && !personalPostCode && <div className="error-message">Required!</div>}
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
                {touchedFields.includes("personalCity") && !personalCity && <div className="error-message">Required!</div>}
              </div>

              <div className="input-group">
                <label className="col-20">{trs("STATE")}*</label>
                <select className="input-field col-80"
                  type="text"
                //required
                // value={personalCity}
                // onChange={e => setCity(e.target.value)}
                // name="personalCity"
                // onBlur={markAsTouched}
                >
                  <option value="Česká republika">Česká republika</option>
                </select>
                {/* {touchedFields.includes("personalCity") && !personalCity && <div className="error-message">Required!</div>} */}
              </div>
            </section>

            <section>
              <h2 className="form-section-header">{trs("FUTURE_RESIDENCE")}</h2>

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
                <select className="input-field col-80"
                  type="text"
                //required
                // value={personalCity}
                // onChange={e => setCity(e.target.value)}
                // name="personalCity"
                // onBlur={markAsTouched}
                >
                  <option value="Česká republika">Česká republika</option>
                </select>
                {/* {touchedFields.includes("personalCity") && !personalCity && <div className="error-message">Required!</div>} */}
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
                <select className="input-field col-80"
                  type="text"
                //required
                // value={personalCity}
                // onChange={e => setCity(e.target.value)}
                // name="personalCity"
                // onBlur={markAsTouched}
                >
                  <option value="Česká republika">Česká republika</option>
                </select>
                {/* {touchedFields.includes("personalCity") && !personalCity && <div className="error-message">Required!</div>} */}
              </div>
            </section>

            <section className="wide-section">
              <h2 className="form-section-header">{trs("CONNECTION_REQUESTS")}</h2>
              <p className="paragraph">{trs("YOU_CURRENTLY_HAVE_NO_OFFERS")}</p>

              <h2 className="form-section-header">{trs("LINKED_ACCOUNT_DATA")}</h2>
              <div className="user-info-row">
                <img className="user-info-row__avatar" src={avatar} alt="avatar" />
                <div className="user-info-row__text">Jana Vondrušková <span>(j.vondruskova@email.cz)</span></div>
                <button className="app-button">{trs("REMOVE_ACCOUNT")}</button>
              </div>

              <div className="input-group">
                <label className="col-60">{trs("OFFER_ACCES_TO_THE_ACCOUNT_TO")}</label>
                <input className="input-field col-40"
                  type="email" value={offerAccesEmail}
                  onChange={e => setOfferAccesEmail(e.target.value)}
                />
              </div>
              <button className="app-button">{trs("OFFER_SHARING")}</button>
            </section>

            <section className="wide-section">
              <h2 className="form-section-header">{trs("DISCOUNT_CARD")}</h2>

              <div className="discount-block">
                <div className="discount-block__content">
                  <div className="input-group">
                    <label className="col-30">{trs("TYPE_OF_DISCOUNT_CARD")}</label>
                    <select className="input-field code-select col-70" value={discountType} onChange={e => setDiscountType(e.target.value)}>
                      <option value="None">{trs("NONE")}</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="col-30">{trs("NUMBER_OF_DISCOUNT_CARD")}</label>
                    <input className="input-field col-70" type="text" value={discountNumber} onChange={e => setDiscountNumber(e.target.value)} />
                  </div>
                </div>

                <div className="discount-block__delete-button">❌</div>
              </div>

              <hr className="horizontal-divider" />

              <div className="discount-block">
                <div className="discount-block__content">
                  <div className="input-group">
                    <label className="col-30">{trs("TYPE_OF_DISCOUNT_CARD")}</label>
                    <select className="input-field code-select col-70" value={discountType} onChange={e => setDiscountType(e.target.value)}>
                      <option value="None">{trs("NONE")}</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="col-30">{trs("NUMBER_OF_DISCOUNT_CARD")}</label>
                    <input className="input-field col-70" type="text" value={discountNumber} onChange={e => setDiscountNumber(e.target.value)} />
                  </div>
                </div>

                <div className="discount-block__delete-button">❌</div>
              </div>

              <div className="plus-button-wrapper">
                <button className="symbol-button" type="button">
                  <span className="symbol-button__symbol">+</span>
                </button>
                <span className="symbol-button-label">{trs("ADD_A_DISCOUNT_VOUCHER")}</span>
              </div>
            </section>

            <section>
              <h2 className="form-section-header">{trs("MY_CREDIT_CARD")}</h2>
              <CreditCardForm background="air-bank" cardData={{}} setCardData={() => { }} />
              {/* <div className="air-bank-back card-form">
                <input className="card-back-code input-field" />
              </div> */}
              <button className="app-button">{trs("REMOVE_CARD")}</button>
            </section>
          </div>

          <section className="bottom-section">
            <p className="small-font">{trs("THESE_DATA_ARE_MANDATORY")}</p>
            <label className="form-section-header"> {/* TODO: highligth when not checked */}
              <input type="checkbox"
                checked={isInformed}
                onChange={() => setIsInformed(!isInformed)}
              /> {trs("I_UNDERSTAND_INFORMATION_ABOUT_THE_")}
            </label>
            {touchedFields.includes("isInformed") && !isInformed && <div className="error-message">Required!</div>}
            <div className="profile-page__submit-button__wrapper">
              <button className="app-button app-button--primary">{trs("SAVE")}</button>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

export default MyProfilePage;
