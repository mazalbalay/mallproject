import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
import './index.css'
import { Provider } from 'react-redux';
import store, {persistor} from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> e46cf64c5983ba5e2d22b45054dd898364668da1
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
