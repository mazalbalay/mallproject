import React from "react";
import CheckOutNav from "../Navs/CheckOutNav";
import HeaderStore from "../Stores/HeaderStore";
import FilterProducts from "./FilterProducts";
import Products from "./Products";
import CartStore from "../Cart/CartStore";
import { useState } from "react";

const InStore = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [prodactLength, setProdactLength] = useState("");
  return (
    <div className="w-full">
      <CheckOutNav />
      <HeaderStore />
      <div className="flex">
        <div className="h-v">
          <CartStore />
        </div>
        <div>
          <FilterProducts
            setInputSearch={setInputSearch}
            prodactLength={prodactLength}
          />
          <Products
            inputSearch={inputSearch}
            setProdactLength={setProdactLength}
          />
        </div>
      </div>
    </div>
  );
};

export default InStore;
