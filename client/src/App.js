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
import CartStore from "./components/CartStore";
import StoreComp from "./components/StoreComp";
import Departments from "./components/Admin/Departments";
import Footer from "./components/Footer";
import InStore from "./components/InStore";
import EditDepartment from "./components/Admin/EditDepartment";
import CreateDepartment from "./components/Admin/CreateDepartment";
import Stores from "./components/Admin/Stores";
import AdminMain from "./components/Admin/Main";
// import CreateStore from "./components/Admin/CreateStore";
import MainPage from "./components/MainPage";
import EditStore from "./components/Admin/EditStore";
import AddProduct from "./components/Manager/AddProduct";
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
          <Route path="/instore" element={<InStore />} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/admin/Department/new" element={<CreateDepartment />} />
          <Route
            path="/admin/Department/edit/:depId"
            element={<EditDepartment />}
          />
          <Route path="/Admin/Store/edit/:storeId" element={<EditStore />} />
          <Route path="/admin/stores" element={<Stores />} />
          <Route path="/admin/departments" element={<Departments />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/manager/products/addProduct" element={<AddProduct />} />

          {/* <Route path="/Admin/Store/new" element={< CreateStore/>} /> */}
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
