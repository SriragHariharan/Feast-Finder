import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import themeReducer from "./themeReducer";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        theme:themeReducer,
    }
})

export default store;