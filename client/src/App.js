import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import ChangePWD from "./components/userProfile/ChangePWD";
import PersonalInfo from "./components/userProfile/PersonalInfo";
import Sidebar from "./components/userProfile/Sidebar";
import UserProfile from "./components/userProfile/UserProfile";

function App() {

 
  return (
    
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
