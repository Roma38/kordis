import React, {useState} from 'react';
import {trs} from "../../../../translations";

function QuantityInput(params) {
    return (
        <div className="shop-item-quantity">
            <span>{trs("QUANTITY")}</span>
            <div className="quantity-input-wrapper">
                <input type="number" value={params.value}  onChange={e => params.valueHandler(e.target.value)}/>
                <div className="quantity-arrows">
                    <div className="quantity-button quantity-up" onClick={e => params.valueHandler(params.value + 1)}></div>
                    <div className="quantity-button quantity-down"
                         onClick={e => (params.value > 1 ? params.valueHandler(params.value - 1) : null)}></div>
                </div>
            </div>
        </div>
    );
}

export default QuantityInput;