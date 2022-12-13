import CheckOut1 from "./components/CheckOut1";
import CheckOut2 from "./components/CheckOut2";
import CheckOut3 from "./components/CheckOut3";
import Auth from "./authentication/Auth";
import React ,{useState} from 'react'


function App() {
  return (
    <div className="App ">
      <CheckOut1 />
      <CheckOut2 />
      <CheckOut3 />
      <Auth/>
    </div>
  );
}

export default App;
