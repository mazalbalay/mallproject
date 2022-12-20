
// import CheckOut1 from "./components/CheckOut1";
// import CheckOut2 from "./components/CheckOut2";
// import CheckOut3 from "./components/CheckOut3";
// import React, { useState } from "react";
import FAQ from "./components/FAQ";
import {  Routes  , Route , Link} from "react-router-dom";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import SingleProduct from "./components/SingleProduct";
import HomeScreen from "./Manager/HomeScreen";
import ProductsScreen from "./Manager/ProductsScreen";
import AddProduct from "./Manager/AddProduct";
import EditProduct from "./Manager/EditProduct";
// import Auth from "./components/authentication/Auth";

function App() {
  return (
    <div className="App ">

      
    <Routes>
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/products" element={<ProductsScreen />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/products/:id/edit" element={<EditProduct />} />
        
      </Routes>
  
    </div>
  );
}
      // <CheckOut1 /> 
      // <CheckOut2 />
      // <CheckOut3 /> 
      //  <Link to={'/auth'} ></Link>

export default App;
