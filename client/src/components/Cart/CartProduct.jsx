import React from 'react'
import { useDispatch } from 'react-redux';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IncreaseQty, ReduceQty } from "../../Redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CartProduct = (product) => {
    
    const dispatch = useDispatch();

    const handleIncresment = (productId) => {
        dispatch(IncreaseQty(productId));
      };
    
      const handleDecresment = (productId) => {
        dispatch(ReduceQty(productId));
      };
  return (
    <div className="w-full">
    <div className="flex p-2 justify-between">
      <div className="plus-minus text-center grid place-content-center">
        <div className="">
          <div className="minus-plus flex justify-around">
            <button className="text-teal-400">
              <FiMinusCircle
                onClick={() => handleDecresment(product._id)}
              />
            </button>
            <h5>{product.qty}</h5>
            <button className="text-teal-400">
              <FiPlusCircle
                onClick={() => handleIncresment(product._id)}
              />
            </button>
          </div>
        </div>
        <h5>{`${product.price} ש"ח`}</h5>
      </div>

      <div className="contact text-end">
        <h1 className="font-bold">{product.name}</h1>
        <p className="text-gray-400 text-sm">{product.brand}</p>
        <p className="text-gray-400 text-sm">{product.color}</p>
      </div>

      <div className="right-img ">
        <img className="w-24" src={product.image} alt={product.name} />
      </div>
    </div>

    <div className="price pr-7">
      <h1>{product.price * product.qty} ש"ח</h1>
    </div>
    <hr className="w-full my-3"></hr>
  </div>
  )
}

export default CartProduct