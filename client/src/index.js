import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store, {persistor} from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate persistor={persistor}>

    <App />
    </PersistGate>

  </Provider>
  </BrowserRouter>
);

