import React, {useState} from 'react';

import {trs} from "../../../../translations";

import {useDispatch, useSelector} from "react-redux";
import QuantityInput from "../../ShopComponents/QuantityInput/QuantityInput";
import {removeFromCart} from "../../../../redux/actions/shoppingCart";
import {useHistory} from "react-router-dom";


function CartItems(params) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantityVal, setQuantityVal] = useState(0);

    const columns = [
        {label: trs("GOODS"), class: "goods"},
        {label: trs(""), class: "title"},
        {label: trs("QUANTITY"), class: "quantity"},
        {label: trs("PRICE_WITHOUT_VAT"), class: "priceWithoutVat"},
        {label: trs("PRICE_WITH_VAT"), class: "priceWithVat"},
        {label: trs(""), class: "actions"},
    ];

    const data = useSelector(state => state.shoppingCart.cart);

    const theadColumns = columns.map((col) => {
        return (
            <th key={col.class} className={"col-" + col.class}>{col.label}</th>
        );
    });
    let summary = 0;
    data.map((row) => {
        const count = row.quantity;
        const price = row.price;
        summary += count * price;
    });
    let summaryWithoutVat = Math.round(summary * 0.79);


    let rows = data.map((row) => {
        const count = row.quantity;
        const rowColumns = columns.map((col, i) => {
            let content;
            let priceWithVat = Math.round((count * row.price));
            let priceWithoutVat = Math.round(priceWithVat * 0.79);
            if (col.class === "goods") {
                content = (
                    <div className="cart-item-image-wrapper"><img src={row.imgPath} alt={row.title}/></div>
                );
            } else if (col.class === "quantity") {
                content = <QuantityInput value={quantityVal} valueHandler={setQuantityVal}/>;
            } else if (col.class === "priceWithoutVat") {
                content = priceWithoutVat +" ,-Kč"
            } else if (col.class === "title") {
                content = (
                    <h2>{row.title}</h2>
                );
            } else if (col.class === "priceWithVat") {
                content = priceWithVat + ",- Kč";
            } else if (col.class === "actions") {
                content = (
                    <>
                        <a className="icon icon-trash-bin"
                           onClick={() => dispatch(removeFromCart(row.id))}
                        >
                            ❌
                        </a>

                    </>
                );
            }

            return <td key={i} className={"col-" + col.class}>{content}</td>;
        });

        return (
            <tr
                key={row.id}
                id={"Item_" + row.id}
            >
                {rowColumns}
            </tr>
        );
    });

    if (rows.length === 0) {
        rows = (
            <tr>
                <td colSpan={columns.length} className="no-data">
                    {trs("NO_ITEMS_CART")}
                </td>
            </tr>
        );
    }

    return (
        <>
            <table className="table-light table-cart">
                <thead>
                <tr>{theadColumns}</tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
            <div className="shop-cart-summary-wrapper">
                <div className="shop-cart-summary-row">
                    <span>{trs("SUMMARY_WITHOUT_VAT")}</span>
                    <span>{summaryWithoutVat},- Kč</span>
                </div>
                <div className="shop-cart-summary-row">
                    <span>{trs("SUMMARY_WITH_VAT")}</span>
                    <span>{summary},- Kč</span>
                </div>
                <div className="shop-cart-summary-row summary">
                    <span>{trs("SUMMARY")}</span>
                    <span>{summary},- Kč</span>
                </div>
                <button onClick= { () => { history.push( "/e-shop/invoice-details/"); }} className="shop-cart-order-button">{trs("ORDER")}</button>
            </div>
        </>
    );
}


export default CartItems;