import React from "react";
import CheckOutNav from "../Navs/CheckOutNav";
import HeaderStore from "../Stores/HeaderStore";
import FilterProducts from "./FilterProducts";
import Products from "./Products";
import CartStore from "../Cart/CartStore";

const InStore = () => {
  return (
    <div className="w-full">
      <CheckOutNav />
      <HeaderStore />
      <div className="flex">
        <div className="h-v">
          <CartStore />
        </div>
        <div>
          <FilterProducts />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default InStore;
