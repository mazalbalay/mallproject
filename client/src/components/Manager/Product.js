import React from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="pt-10  w-3/12 mr-10" key={product._id}>
        <div className=" rounded-lg shadow-lg">
          <img src={product.image} className="h-45 w-full" alt={product.name} />
          <div className="mt-3">
            <h5>{product.name.substring(0, 30)}...</h5>
            <p>${product.price}</p>
            <div className="flex justify-center py-4">
              <button className="mr-2 rounded-sm ring-2 ring-green-700 focus:ring-green-700 w-6/12 py-2">
                <Link to={`/manager/products/${product._id}/editProduct`}>
                  <FiEdit className="container mx-auto text-green-700 bold-semibold text-xl "/>
                </Link>
              </button>

              <button className="rounded-sm ring-2 ring-red-700 focus:ring-red-700  w-6/12">
                <Link to={`/manager/products/${product.id}/delete`}>
                  <BsTrash className="container mx-auto text-red-700 bold-semibold text-xl " />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
