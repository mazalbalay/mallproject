import React from "react";
import { useNavigate } from "react-router-dom";
import CreateDepartment from "./Admin/CreateDepartment";
import CreateStore from "./Admin/CreateStore";
import EditDepartment from "./Admin/EditDepartment";
import EditStore from "./Admin/EditStore";
import InStore from "./Products/InStore";
import AddProduct from "./Manager/AddProduct";
import EditProduct from "./Manager/EditProduct";
import CartStore from "./Cart/CartStore";


export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home |
      <button
        onClick={() => {
          navigate("/checkout");
        }}
      >
        checkout | 
      </button>
      <button
        onClick={() => {
          navigate("/Auth");
        }}
      >
        Auth | 
      </button>
      {/* <EditDepartment/>
      <CreateDepartment/> */}
      {/* <CreateStore/> */}
     {/* <EditStore/> */}
     {/* <AddProduct/> */}
      {/* <CreateStore/> */}
      {/* <EditProduct/>   */}
      {/* <InStore/> */}
      <InStore/>
      
    </div>
  );
}
