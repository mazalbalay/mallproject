import React from "react";
import { Link } from "react-router-dom";
import {FiEdit} from "react-icons/fi";
import {BsTrash} from "react-icons/bs"

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="my-3 text-center w-5/12" key={product.id}>
        <div className="bg-slate-200 rounded-lg shadow-lg">
          <img src={product.image} className="h-60 p-4" alt={product.title} />
          <div>
            <h5>{product.title.substring(0, 12)}...</h5>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}/edit`}>
              <FiEdit/>
            </Link>
            <Link to={`products/${product.id}/delete`}>
              <BsTrash/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
