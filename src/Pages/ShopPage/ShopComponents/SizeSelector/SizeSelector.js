import React from 'react';

import "./SizeSelector.css";

function SizeSelector() {

    return (
        <div className="shop-item-size-selector">
            <input type="radio" id="s" name="size" value="s"/>
            <label htmlFor="s">S</label>
            <input type="radio" id="m" name="size" value="m"/>
            <label htmlFor="m">M</label>
            <input type="radio" id="l" name="size" value="l"/>
            <label htmlFor="l">L</label>
            <input type="radio" id="xl" name="size" value="xl"/>
            <label htmlFor="xl">XL</label>
        </div>
    );
}

export default SizeSelector;