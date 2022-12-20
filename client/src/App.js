import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import React, { useState } from "react";
import {  Routes, Route, Link } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import ChangePWD from "./components/userProfile/ChangePWD";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import UserProfile from './components/userProfile/UserProfile';

function App() {

  return (
    <PayPalScriptProvider options={{"client-id":"ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc"}}>
      <div>
     
<Link to='/auth'>aouth</Link>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/changepassword" element={<ChangePWD/>} />
          <Route path="/userprofile" element={< UserProfile/>} />
            <Route path="/personalinfo" element={< PersonalInfo/>} />  
             
        </Routes>
        {/* <Footer/> */}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
