import { createSlice, current } from "@reduxjs/toolkit";
import { FEAST_FINDER_LS_CART_KEY } from "../utils/constants";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems: JSON?.parse(localStorage.getItem(FEAST_FINDER_LS_CART_KEY)) || []
    },
    reducers:{
        addToCart:(state, action) => {
            state.cartItems.push(action.payload);
            localStorage.setItem(FEAST_FINDER_LS_CART_KEY, JSON.stringify(current(state.cartItems)))
        },
        deleteCartItem : (state, action) => {
            let updatedCart = state.cartItems?.filter(c => c.id !== action.payload)
            state.cartItems = updatedCart
            localStorage.setItem(FEAST_FINDER_LS_CART_KEY, JSON.stringify(updatedCart))
        },
        updateProductQuantity :(state, action) => {
            let indexOfProduct = state?.cartItems?.findIndex(f => f.id === action.payload.itemID);
            let updatedCount = current(state.cartItems[indexOfProduct]). quantityToShip + action.payload.quantity
            state.cartItems[indexOfProduct].quantityToShip = updatedCount;
            localStorage.setItem(FEAST_FINDER_LS_CART_KEY, JSON.stringify( current(state.cartItems) ))
        }
    }
})

export default cartSlice.reducer;

export const { addToCart, deleteCartItem, updateProductQuantity } = cartSlice.actions;