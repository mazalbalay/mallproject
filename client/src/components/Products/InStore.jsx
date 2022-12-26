import React from "react";
import CheckOutNav from "../Navs/CheckOutNav";
import HeaderStore from "../Stores/HeaderStore";
import FilterProducts from "./FilterProducts";
import Products from "./Products";
import CartStore from "../Cart/CartStore";
import { useState } from "react";
import { useParams } from "react-router-dom";


const InStore = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [prodactLength, setProdactLength] = useState("");
  const {storeName}=useParams()

  return (
    <div className="w-full ">
      <HeaderStore />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" container mx-auto md:flex justify-between py-4 md:px-40 px-7">
            <div className="hidden lg:block w-4/12  ">
              <CartStore/>
            </div>
            <div>
              <FilterProducts
                setInputSearch={setInputSearch}
                prodactLength={prodactLength}
              />
     <Products
     storeName={storeName}
     inputSearch={inputSearch}
     setProdactLength={setProdactLength}
   />
            
            </div>
            <div className="md:hidden block  p-4 ">
          <CartStore />
        </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default InStore;