import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {logOut} from "../../redux/actions/auth";
import cart_icon from "../../assets/cart_icon.svg";
import "./Navigation.css";


function Navigation(props) {
    const language = useSelector(state => state.language.lang);
    const userInfo = useSelector(state => state.auth.userInfo);
    let userData = {user: ""};
    if (typeof userInfo.user !== "undefined"){
        userData = userInfo.user;
    }
    const cartItemsData = useSelector(state => state.shoppingCart.cart);
    const cartItems =  cartItemsData.reduce((total, obj) => obj.quantity + total,0);
    const dispatch = useDispatch();

    return (
        <nav className="layout-navigation">
            <div className="wrapper">
                <div className="navigation__left-col">
                    <NavLink to="/dashboard" activeClassName="active">PŘEHLED ÚČTU</NavLink>
                    <NavLink to="/my-valid-tickets" activeClassName="active">MOJE PLATNÉ JÍZDENKY</NavLink>
                    <NavLink to="/my-history" activeClassName="active">MOJE HISTORIE</NavLink>
                    <NavLink to="/e-shop" activeClassName="active">OBCHOD</NavLink>
                </div>
                <div className="navigation__right-col">
                    <Link to="/e-shop/cart" className="cart-link">
                        <img src={cart_icon} alt="cart icon"/>
                        <div className="cart-link__number">{cartItems}</div>
                    </Link>
                    <Link to="/" onClick={() => dispatch(logOut())}>ODHLÁSIT SE</Link>
                    <div className="navigation__vertical-divider"></div>
                    <Link to="/my-profile">{userData.firstName} {userData.surName}</Link>
                    <img className="navigation__avatar" src={userData.avatarUrl} alt="user avatar"/>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
