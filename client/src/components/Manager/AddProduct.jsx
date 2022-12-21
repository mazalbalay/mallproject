import React from "react";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  return (
    <div className="W-10/12 container mx-auto">
      <div className="flex justify-between align-center">
        <button className="inline-block self-center bg-red-700 text-white font-bold rounded-lg py-3 px-3 uppercase-text-sm">
          Go to product
        </button>
        <h1 className="text-center font-semibold text-4xl py-10">
          Add Product
        </h1>
        <button className="inline-block self-center bg-green-700 text-white font-bold rounded-lg py-3 px-5 uppercase-text-sm">
          Publish now
        </button>
      </div>
      <ProductForm/>
    </div>
  );
};

export default AddProduct;
