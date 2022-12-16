import CheckOut from "./components/checkout/CheckOut";
import CheckOutNav from "./components/CheckOutNav";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import Footer from "./components/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider options={{"client-id":"ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc"}}>
      <div>
        {/* <CheckOutNav/> */}
        <Routes>
          <Route path="/Auth" element={<Auth />} />
          <Route path="/" element={<CheckOut />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
