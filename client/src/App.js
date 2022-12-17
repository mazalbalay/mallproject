import CheckOut from "./components/checkout/CheckOut";
// import CheckOutNav from "./components/CheckOutNav";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import ThancksPage from "./components/checkout/ThancksPage";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc",
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
