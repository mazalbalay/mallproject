import CheckOut1 from "./components/CheckOut1";
import CheckOut2 from "./components/CheckOut2";
import CheckOut3 from "./components/CheckOut3";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/authentication/Auth";

function App() {

 
  return (
    <PayPalScriptProvider options={{"client-id":"ATZnLpZdreIw8GDvsCs-eguhcXT3gn4gmDrTi8L0n0arR08UvMJeSOoAeVQCJSFuaC-2EWi669UKRbUc"}}>
      <div>
        {/* <CheckOutNav/> */}
        <Routes>
          <Route path="/Auth" element={<Auth />} />
          <Route path="/" element={<CheckOut />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </PayPalScriptProvider>
  );
    
      <div className="App ">
        <Link to={"/auth"}>auth</Link><br/> 
       
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/changepassword" element={<ChangePWD />} />
          <Route path="/userprofile" element={< UserProfile/>} />
            <Route path="/personalinfo" element={< PersonalInfo/>} />  
             
         

          </Routes>
          
        
      </div>
    );
}

export default App;
