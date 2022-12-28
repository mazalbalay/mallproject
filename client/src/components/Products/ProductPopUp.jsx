import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../Redux/action/cartActions";

export default function ProductPopUp({ product, onClose, visible }) {
  const dispatch = useDispatch();
  const handleOnClose = (e) => {
    if (e.target.id === "product") onClose();
  };

  if (!visible) return null;

  const addItem = (product) => {
    dispatch(AddProduct(product, product.qty));
  };

  return (
    <div
      key={product._id}
      id="product"
      onClick={handleOnClose}
      className={
        "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      }
    >
      <div className="bg-white md:w-2/5 h-fit rounded-lg p-4">
        <div className="w-full flex justify-center flex-col ">
          <button value={false} className="text-end" onClick={onClose}>
            x
          </button>
          <img
            className="w-80 h-60 mx-auto  bg-white"
            src={product.image}
            alt={product.name}
          />
          <div className="w-full flex justify-between p-10">
            <p className="text-end font-bold text-cyan-500">
              {product.price} שח
            </p>
            <div className="flex items-center">
              <button>
                <FiPlusCircle
                  onClick={() => addItem(product)}
                  id={product._id}
                  className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white"
                />
              </button>
              <p>{product.qty} ש"ח  </p>
              <button>
                <FiMinusCircle
                  id={product._id}
                  className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between ">
            <div className="flex justify-between border-b-2 p-2">
              <p>{product.price}</p>
              <p> מחיר ליחידה</p>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <p>49320750</p>
              <p> מקט</p>
            </div>
            <div className="flex justify-between border-b-2 p-2">
              <p>{product.brand}</p>
              <p> מותג</p>
            </div>
            <div className="flex justify-between p-2 ">
              <p className=""> תיאור </p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
