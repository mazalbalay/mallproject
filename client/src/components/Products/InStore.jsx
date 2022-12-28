import React from "react";
import CheckOutNav from "../Navs/CheckOutNav";
import HeaderStore from "../Stores/HeaderStore";
import FilterProducts from "./FilterProducts";
import Products from "./Products";
import CartStore from "../Cart/CartStore";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footers/Footer";
const InStore = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [prodactLength, setProdactLength] = useState("");
  const [Departments, setDepartments] = useState();

  const { storeName } = useParams();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeaderStore />
      </div>
      <div className="w-full flex justify-evenly items-center">
        <div className=" md:w-3/4 w-full flex md:flex-row flex-col justify-between">
          <div className="md:w-1/3 w-full">
            <CartStore />
          </div>
          <div className="md:w-2/3 w-full md:pl-10">
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
    </div>
  );
};
export default InStore;
