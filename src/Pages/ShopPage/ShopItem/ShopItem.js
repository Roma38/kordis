import React, {useState} from 'react';
import {trs} from "../../../translations";
import QuantityInput from "../ShopComponents/QuantityInput/QuantityInput";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, updateCart} from "../../../redux/actions/shoppingCart";


function ShopItem(params) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantityVal, setQuantityVal] = useState(1);
    const currentCartItems = useSelector(state => state.shoppingCart.cart);

    function addItemsToCart(data) {
        setQuantityVal(1);
        const count = currentCartItems.filter((obj) => obj.id === data.id).length;
        if (count === 1) {
            const cartItem = currentCartItems.filter((obj) => obj.id === data.id)[0];
            const cartItemQuantity = cartItem.quantity;
            cartItem.quantity = cartItemQuantity + quantityVal;
            dispatch(updateCart(currentCartItems));
        } else {
            data.quantity = quantityVal;
            dispatch(addToCart(data));
        }
    }

    return (
        <div className="shop-item" key={params.data.id}>
            <div className="shop-item-image-wrapper" onClick={() => {
                history.push("/e-shop/detail/" + params.data.id);
            }}>
                <img src={params.data.imgPath} alt={params.data.title}/>
            </div>
            <div className="shop-item-info">
                <h2 onClick={() => {
                    history.push("/e-shop/detail/" + params.data.id);
                }}>{params.data.title}</h2>
                <div className="shop-item-prices">
                    <div className="shop-item-prices-row">
                        <span>{trs("POSTAGE_PACKING")}</span>
                        <span>{params.data.postage}</span>
                    </div>
                    <div className="shop-item-prices-row">
                        <span>{trs("PRICE")}</span>
                        <span>{params.data.price},- Kč</span>
                    </div>
                    <div className="shop-item-prices-row summary">
                        <span>{trs("SUMMARY")}</span>
                        <span>{params.data.summary}</span>
                    </div>
                </div>
            </div>
            <div className="shop-item-add">
                <QuantityInput value={quantityVal} valueHandler={setQuantityVal}/>
                <button onClick={() => addItemsToCart(params.data)}>{trs("ADD_TO_CART")}</button>
            </div>
        </div>
    );
}

export default ShopItem;