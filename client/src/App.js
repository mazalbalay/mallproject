// import CheckOut from "./components/checkout/CheckOut";
// import CheckOutNav from "./components/CheckOutNav";
import React from "react";
import { Routes, Route,  } from "react-router-dom";
// import Auth from "./components/authentication/Auth";
// import Footer from "./components/Footer";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminMain from './components/Admin/Main';
import CreateDepartment from './components/Admin/CreateDepartment';
import CreateStore from './components/Admin/CreateStore';
import Departments from "./components/Admin/Departments";
import Stores from './components/Admin/Stores';
import EditDepartment from "./components/Admin/EditDepartment";
import EditStore from "./components/Admin/EditStore";
import MainPage from './components/MainPage'
import Department from "./components/Department";

function App() {
  return (
    // <PayPalScriptProvider options={{"client-id":"ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc"}}>
      <div>
        <MainPage/>
        {/* <CheckOutNav/> */}
        <Routes>
          {/* <Route path="/Auth" element={<Auth />} /> */}
          {/* <Route path="/" element={<CheckOut />} /> */}
          <Route path="/Admin" element={<AdminMain/>} />
          <Route path="/Admin/department/new/" element={<CreateDepartment />} />
          <Route path="/Admin/store/new/" element={<CreateStore />} />
          <Route path="/Admin/department/edit/;id" element={<EditDepartment />} />
          <Route path="/Admin/store/edit/;id" element={<EditStore />} />
          <Route path="/Admin/stores" element={<Stores />} />
          <Route path="/Admin/departments" element={<Departments />} />
          <Route path="/department/:depId" element={<Department />} />

        </Routes>
        {/* <Footer/> */}
      </div>
    // </PayPalScriptProvider>
  );
}

export default App;
