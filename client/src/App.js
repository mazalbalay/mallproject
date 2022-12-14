
import CheckOut1 from "./components/CheckOut1";
import CheckOut2 from "./components/CheckOut2";
import CheckOut3 from "./components/CheckOut3";
import React, { useState } from "react";
import { BrowserRouter , Routes  , Route , Link} from "react-router-dom";
import Auth from "./components/authentication/Auth";

function App() {
  return (
  <BrowserRouter>
    <div className="App ">
      {/* <CheckOut1 /> 
      <CheckOut2 />
      <CheckOut3 /> */}
      <Link to={'/auth'} >cfvgb</Link>

      
    <Routes>
        <Route exact path="/auth" element={<Auth />} />
        
      </Routes>
    </div>
     </BrowserRouter> 
  );
}

export default App;
