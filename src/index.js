import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";
import App from "./App";

//create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//rendering app componet in root
root.render(
    <Provider store={store}>
            <App />
    </Provider>)