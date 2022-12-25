import React from "react";
import { Link } from "react-router-dom";
import {FiEdit} from "react-icons/fi";
import {BsTrash} from "react-icons/bs";
import { deleteProduct } from "./ApiCalls/products";

const Product = (props) => {
  const { product } = props;

  async function deleteAndLoadPage(productId) {
    await deleteProduct(productId);
    alert('Product deleted!')
  }

  return (
    <>
      <div className="text-center mr-10 " key={product._id}>
        <div className="bg-slate-50 ring-2 ring-gray-300 shadow-lg mb-10 p-5 ">
          <img src={product.image} className="h-60 container mx-auto p-5" alt={product.name} />
          <div>
            <h5 className="pb-2">{product.name.substring(0, 30)}...</h5>
            <p className="pb-2">${product.price}</p>
            <div className="flex justify-between">

            <Link to={`/products/${product._id}/edit`}>
              <FiEdit className="text-green-700 font-semibold text-2xl mt-2"/>
            </Link>
            <Link to={`products/${product.id}/delete`}>
              <BsTrash onClick={() => deleteAndLoadPage(product._id)} className="text-red-700 font-semibold text-2xl mt-2"/>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
