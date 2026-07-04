import { createSlice } from "@reduxjs/toolkit";
import { addItemtoCart, removeItemFromCart } from "./cart/cart-utils";

const INITIAL_STATE ={
    cartItems: [],
    hidden: true,
};

const CartSlice= createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {

        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
            };
        },    
    
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            };
        },

        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemtoCart(state.cartItems, action.payload)
            };
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }
    },
});

export const { toggleHiddenCart, clearCart, addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;