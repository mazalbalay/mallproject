import React from "react";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckOut from "./components/checkout/CheckOut";
import CheckOutNav from "./components/CheckOutNav";
import Auth from "./components/authentication/Auth";
import ThancksPage from "./components/checkout/ThancksPage";



import Home from "./components/Home";
import ErrPage from "./components/checkout/ErrPage";
import ChangePWD from "./components/userProfile/ChangePWD";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import UserProfile from "./components/userProfile/UserProfile";
import AdminMain from './components/Admin/Main';
import CreateDepartment from './components/Admin/CreateDepartment';
import CreateStore from './components/Admin/CreateStore';
import Departments from "./components/Admin/Departments";
import Stores from './components/Admin/Stores';
import EditDepartment from "./components/Admin/EditDepartment";
import EditStore from "./components/Admin/EditStore";
import MainPage from './components/MainPage'
import Department from "./components/Department";
import Footer from "./components/Footer";

function App() {

 
  return (
     <PayPalScriptProvider options={{"client-id":"ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc"}}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/changepassword" element={<ChangePWD />} />
          <Route path="/ThancksPage" element={<ThancksPage />} />
          <Route path="/ErrPage" element={<ErrPage />} />
          <Route path="/userprofile" element={< UserProfile/>} />
          <Route path="/personalinfo" element={< PersonalInfo/>} />  
          <Route path="/Admin" element={<AdminMain/>} />
          <Route path="/Admin/department/new/" element={<CreateDepartment />} />
          <Route path="/Admin/store/new/" element={<CreateStore />} />
          <Route path="/Admin/department/edit/;id" element={<EditDepartment />} />
          <Route path="/Admin/store/edit/;id" element={<EditStore />} />
          <Route path="/Admin/stores" element={<Stores />} />
          <Route path="/Admin/departments" element={<Departments />} />
          <Route path="/department/:depId" element={<Department />} />
        </Routes>
      </div>
    </PayPalScriptProvider>
    );
}

export default App;