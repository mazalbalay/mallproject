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
  const { storeName } = useParams();

  return (
    <div className="w-full">
      {" "}
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
            storeName={storeName}
            inputSearch={inputSearch}
            setProdactLength={setProdactLength}
          />
        </div>
      </div>
    </div>
  );
};

export default InStore;
