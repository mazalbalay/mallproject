import ChangePWD from "./components/userProfile/ChangePWD";
import UserProfile from "./components/userProfile/UserProfile";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import CheckOut from "./components/checkout/CheckOut";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckOutNav from "./components/CheckOutNav";
import Auth from "./components/authentication/Auth";
import ThancksPage from "./components/checkout/ThancksPage";
import Home from "./components/Home";
import ErrPage from "./components/checkout/ErrPage";
import CreateDepartment from "./components/Admin/CreateDepartment";
import CartStore from "./components/CartStore";
import StoreComp from "./components/StoreComp";
import Department from "./components/Department";
import Footer from "./components/Footer";
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
        <Link to="instore"> store</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/changepassword" element={<ChangePWD />} />
          <Route path="/ThancksPage" element={<ThancksPage />} />
          <Route path="/ErrPage" element={<ErrPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/department/:depId" element={<Department />} />
          <Route path="/instore" element={<InStore />} />
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;

