import React from 'react';

import Breadcrumb from "../../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../../Components/Navigation/Navigation";
import CartItems from "../../../Pages/ShopPage/ShoppingCart/ShopCartItems/ShopCartItems";
import {trs} from "../../../translations";

import "./ShoppingCart.css";

import {useSelector} from "react-redux";

function ShoppingCart() {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change

    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper layout-main">
                <Breadcrumb items={[{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")},
                    {to: '#', label: trs("YOUR_CART")}]}/>
                <h1 className="page-header">{trs("YOUR_CART")}</h1>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-cart-items-wrapper">
                        <CartItems lang={language}/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShoppingCart;