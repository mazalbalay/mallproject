import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
import ProductPopUp from "./ProductPopUp";

export default function InStore() {
  const [popUp, setPopUp] = useState(false);
  const [product, setProduct] = useState([]);
  const [input, setInput] = useState("");

  const allProduct = async () => {
    const { data } = await axios.get("http://localhost:8000/product");
    setProduct(data);
    console.log(product);
  };
  useEffect(() => {
    allProduct();
  }, []);
  const handleOneClose = () => setPopUp(false);
  return (
    <div>
      <header className="h-60 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lWPKOx3H_Z3dlImb1dZcYJrAtR4jigSTCA&usqp=CAU')]">
        <h1 className="text-white font-bold text-6xl text-center">נעליים</h1>
      </header>
      <div className="flex my-16 items-center justify-center">
        {/* <h1 className="text-2xl">:סנן תוצאות לפי</h1> */}{" "}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="חפש לפי שם"
          className="border-2 border-red-700 w-1/3 p-2 rounded-md placeholder:text-center outline-none"
        />
      </div>

      <div className="w-full scroll-p-[24rem] px-4 bg-white">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-4 gap-8">
          {product
            .filter((val) => {
              if (input === "") {
                return val;
              } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
            })
            ?.map((res, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setPopUp(true)}
                  className="w-full border flex  flex-col my-4  hover:scale-105 duration-300"
                >
                  <img
                    className="w-80 h-60 mx-auto  bg-white"
                    src={res.image}
                    alt="Shoes"
                  />
                  <button onClick={() => setPopUp(true)}>למוצר</button>
                  <h2 className="text-2xl font-bold text-center py-8">
                    {res.name}
                  </h2>

                  <p className="text-gray text-end">{res.description}</p>
                  <div className="flex text-start ml-44">
                    <button>
                      <FiPlusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
                    </button>
                    <p>2</p>
                    <button>
                      <FiMinusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
                    </button>
                  </div>
                  <p className="text-end">סה"כ: {res.price} ש'ח</p>
                </div>
              );
            })}
        </div>
      </div>
      <ProductPopUp
        product={product}
        onClose={handleOneClose}
        visible={popUp}
      />
    </div>
  );
}
