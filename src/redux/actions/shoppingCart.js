export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

export const addToCart = addToCart => ({
    type: ADD_TO_CART,
    payload: addToCart
});

export const removeFromCart = removeFromCart => ({
    type: REMOVE_FROM_CART,
    payload: removeFromCart
});

export const updateCart = updateCart => ({
    type: UPDATE_CART,
    payload: updateCart
});