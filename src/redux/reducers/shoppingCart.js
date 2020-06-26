import {ADD_TO_CART} from '../actions/shoppingCart'
import {REMOVE_FROM_CART} from '../actions/shoppingCart'
import {UPDATE_CART} from '../actions/shoppingCart'

let initialCart = [];

if (localStorage.getItem("shoppingCart") !== null) {
    initialCart = JSON.parse(localStorage.getItem('shoppingCart')).cart;
}

const initialState = {
    cart: initialCart
};

export const shoppingCartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            const cartNewItems = {...state, cart: [...state.cart, payload]};
            localStorage.setItem('shoppingCart', JSON.stringify(cartNewItems));
            return cartNewItems;
        case UPDATE_CART:
            const cartItems = {...state, cart: payload};
            localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
            return cartItems;
        case REMOVE_FROM_CART:
            const filteredCart = state.cart.filter(item => item.id !== payload);
            const cartRemovedItems = {...state, cart: filteredCart};
            localStorage.setItem('shoppingCart', JSON.stringify(cartRemovedItems));
            return cartRemovedItems;

        default:
            return state;
    }
};