import React from "react";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ChangePWD from "./components/userProfile/ChangePWD";
import UserProfile from "./components/userProfile/UserProfile";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import CheckOut from "./components/checkout/CheckOut";
import Auth from "./components/authentication/Auth";
import ThancksPage from "./components/checkout/ThancksPage";
import Home from "./components/Home";
import ErrPage from "./components/checkout/ErrPage";
import Departments from "./components/Admin/Departments";
import InStore from "./components/Products/InStore";
import EditDepartment from "./components/Admin/EditDepartment";
import CreateDepartment from './components/Admin/CreateDepartment';
import Stores from './components/Admin/Stores';
import AdminMain from './components/Admin/Main'
// import CreateStore from "./components/Admin/CreateStore";
import MainPage from "./components/MainPage";
import EditStore from "./components/Admin/EditStore";
import StoreListPage from "./components/Stores/StoreListPage"
import AddProduct from "./components/Manager/AddProduct";
import HeaderStore from "./components/Stores/HeaderStore";
import StoreComp from "./components/Stores/StoreComp";


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
          <Route path="/changepassword" element={<ChangePWD />} />
          <Route path="/ThancksPage" element={<ThancksPage />} />
          <Route path="/ErrPage" element={<ErrPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/instore/:name" element={<InStore />} />
          <Route path="/admin" element={<AdminMain/>} />
          <Route path="/admin/Department/new" element={< CreateDepartment/>} />
          <Route path="/admin/Department/edit/:depId" element={< EditDepartment/>} />
          <Route path="/Admin/Store/edit/:storeId" element={< EditStore/>} />
          <Route path="/admin/stores" element={< Stores/>} />
          <Route path="/admin/departments" element={< Departments/>} />
          <Route path="/main" element={< MainPage/>} />
          <Route path="/storelist/:depName" element={< StoreListPage/>} />
          <Route path="/manager/products/addProduct" element={< AddProduct/>} />
          <Route exact path="products" element={<InStore />} />
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;

