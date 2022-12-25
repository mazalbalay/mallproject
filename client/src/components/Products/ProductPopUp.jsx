import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../Redux/action/cartActions';


export default function ProductPopUp({product, onClose, visible}) {
  const dispatch = useDispatch()
   const handleOnClose = (e) => {
    if(e.target.id === "product") onClose()
   }

    if(!visible) return null;

    const addItem = (product) => {
      dispatch(AddProduct(product, product.qty));
    };

    const handleIncresment=() =>{
      // return qty < 10 ? setqty(prevQty => prevQty - 1) : qty;
     }

  return (
    <div key={product._id} id='product' onClick={handleOnClose} className={'fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'}>
    <div className='bg-white p-2 '>
    <div className="w-full flex  flex-col ">
    <button value={false} className='text-end' onClick={onClose}>x</button>
            <img
              className="w-80 h-60 mx-auto  bg-white"
              src={product.image}
              alt={product.name}
            />
            <p className="text-end font-bold text-cyan-500">{product.price} שח</p>
            <div className="flex text-center ml-36 my-3">
              <button>
                <FiPlusCircle onClick={() => addItem(product)} id={product._id} className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
              <p>{product.qty}</p>
              <button>
                <FiMinusCircle id={product._id} className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between underline'>
                <p>{product.price}</p>
                <p> מחיר ליחידה</p>
              </div>   
              <div className='flex justify-between underline'>
                <p>49320750</p>
                <p> מקט</p>
              </div>   
              <div className='flex justify-between underline'>
                <p>{product.brand}</p>
                <p> מותג</p>
              </div>   
              <div className='flex flex-col '>
                <p className=''> תיאור </p>
                <p>{product.description}</p>
              </div>   
            </div>
        </div>
    </div>
    </div>
  )
}
