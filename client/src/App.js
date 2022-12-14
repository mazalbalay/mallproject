import CheckOut from "./components/CheckOut"
import React, { useState } from "react";
import { BrowserRouter , Routes  , Route , Link} from "react-router-dom";
import Auth from "./components/authentication/Auth";

function App() {
  return (
  <BrowserRouter>
    <div className="App ">
      <Link to={'/auth'} >cfvgb</Link>
    <Routes>
        <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/checkout" element={<CheckOut/>} />
      </Routes>
    </div>
  </BrowserRouter> 
  );
}

export default App;
