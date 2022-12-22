import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Home from "./components/Home";
import InStore from "./components/InStore";

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
          <Route path="/" element={<InStore />} />
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
