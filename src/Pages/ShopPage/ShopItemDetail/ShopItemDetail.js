import React, {useState} from 'react';
import {trs} from "../../../translations";
import QuantityInput from "../ShopComponents/QuantityInput/QuantityInput";
import SizeSelector from "../ShopComponents/SizeSelector/SizeSelector";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import "./ShopItemDetail.css";
import capMain from "../../../assets/shop/cap_main.png";
import cap from "../../../assets/shop/cap.png";
import capSecond from "../../../assets/shop/cap_second.png";
import capThird from "../../../assets/shop/cap_third.png";
import {addToCart, updateCart} from "../../../redux/actions/shoppingCart";
import {useDispatch, useSelector} from "react-redux";


function ShopItemDetail(params) {
    const dispatch = useDispatch();
    const [quantityVal, setQuantityVal] = useState(1);
    let images = [
        {
            original: params.data.imgPath,
            thumbnail: params.data.imgPath,
        },
    ];
    if (params.data.id === 1) {
        images = [
            {
                original: capMain,
                thumbnail: cap,
            },
            {
                original: capSecond,
                thumbnail: capSecond,
            },
            {
                original: capThird,
                thumbnail: capThird,
            },
        ];
    }
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
        <div className="shop-item-detail" key={params.data.id}>
            <div className="shop-item-detail-top">
                <div className="shop-item-detail-images">
                    <ImageGallery items={images} thumbnailPosition={"right"} showFullscreenButton={false}
                                  showPlayButton={false} showNav={false}/>
                </div>
                <div className="shop-item-detail-info">
                    <div className="shop-item-detail-price">
                        <div>
                            {trs("PRICE")}
                        </div>
                        <div>
                            <span>(247,- bez DPH 21 %)</span>
                            {params.data.price}
                        </div>
                    </div>
                    <div className="shop-item-detail-info-row postage">
                        <span>{trs("POSTAGE_PACKING")}</span>
                        <span>{params.data.postage}</span>
                    </div>
                    <div className="shop-item-detail-info-row">
                        <span>{trs("SIZE")}</span>
                        <SizeSelector/>
                    </div>
                    <div className="shop-item-detail-info-row">
                        <QuantityInput value={quantityVal} valueHandler={setQuantityVal}/>
                    </div>
                    <div className="shop-item-detail-info-row shop-item-add">
                        <span>(Cena s poštovným: 419,- Kč s DPH)</span>
                        <button onClick={() => addItemsToCart(params.data)}>{trs("ADD_TO_CART")}</button>
                    </div>
                </div>
            </div>
            <div className="shop-item-detail-content">
                {params.data.content}
            </div>
        </div>
    );
}

export default ShopItemDetail;