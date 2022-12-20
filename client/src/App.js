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
import InStore from "./components/InStore";

function App() {
  return (
    <div className="bg-gray-200 text-right flex flex-col items-center justify-center">
      <CheckOut1 />
      <CheckOut2 />
      <CheckOut3 />
      <InStore/>

    </div>
  );
}

export default App;
