import React from "react";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ChangePWD from "./components/userProfile/ChangePWD";
import UserProfile from "./components/userProfile/UserProfile";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import CheckOut from "./components/checkout/CheckOut";
import Auth from "./components/authentication/Auth";
import ThanksPage from "./components/checkout/ThanksPage";
import ErrPage from "./components/checkout/ErrPage";
import ForgotPassPage from "./components/authentication/ForgotPassPage";
import Departments from "./components/Admin/Departments";
import InStore from "./components/Products/InStore";
import EditDepartment from "./components/Admin/EditDepartment";
import CreateDepartment from './components/Admin/CreateDepartment';
import Stores from './components/Admin/Stores';
import AdminMain from './components/Admin/Main'
import MainPage from "./components/MainPage";
import EditStore from "./components/Admin/EditStore";
import StoreListPage from "./components/Stores/StoreListPage"
import CreateProduct from "./components/Manager/CreateProduct";
import MainNav  from "./components/Navs/MainNav";
import StoreListNav from './components/Navs/StoreListNav'
import Footer from './components/Footers/Footer'
import EditProduct from "./components/Manager/EditProduct";
import Maneger from './components/Manager/HomeScreen'
import StoresManeger from './components/Manager/Stores'
import ProductsScreen from "./components/Manager/ProductsScreen";
import HomeScreen from "./components/Manager/HomeScreen";

import ContactSection from './components/ContactSection'

function App() {
  const user =  JSON.parse(localStorage.getItem(("user")))?.data
console.log(user);
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc",
      }}
    >
      
    {user ?  <StoreListNav/>:<MainNav/>}



      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} />/ */}
        {user ? null : <Route path="/Auth" element={<Auth />} /> }
          <Route path="/" element={<MainPage />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/changepassword" element={<ChangePWD />} />
          <Route path="/forgot-password/:id" element={<ForgotPassPage />} />
          <Route path="/ThanksPage" element={<ThanksPage />} />
          <Route path="/ErrPage" element={<ErrPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/instore/:storeName" element={<InStore />} />
          <Route path="/admin" element={<AdminMain/>} />
          <Route path="/admin/Department/new" element={< CreateDepartment/>} />
          <Route path="/admin/Department/edit/:depId" element={< EditDepartment/>} />
          <Route path="/Admin/Store/edit/:storeId" element={< EditStore/>} />
          <Route path="/admin/stores" element={< Stores/>} />
          <Route path="/admin/departments" element={< Departments/>} />
          {/* <Route path="/main" element={< MainPage/>} /> */}
          <Route path="/storelist/:depName" element={< StoreListPage/>} />
          <Route path="/manager/products/edit/:productId" element={< EditProduct/>} />
          <Route path="/manager" element={< Maneger/>} />
          <Route path="/manager/homeScreen" element={< HomeScreen/>} />
          <Route path="/manager/products/new" element={< CreateProduct/>} />
          <Route path="/manager/stores" element={<StoresManeger/>} />
          <Route path="/manger/stores/:storeName" element={<ProductsScreen/>} />
          {/* <Route exact path="products" element={<InStore />} /> */}
          <Route exact path="/checkout" element={<CheckOut/>} />
          <Route exact path="/contact-us" element={<ContactSection/>} />
        </Routes>
        
        {/* <Footer/>/ */}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;