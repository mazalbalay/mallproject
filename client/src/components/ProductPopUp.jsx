import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

export default function ProductPopUp({visible, onClose}) {
   const handleOnClose = (e) => {
    if(e.target.id === "product")   onClose()
   }

    if(!visible) return null
  return (
    <div id='product' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <div className='bg-white p-2 '>
    <div className="w-full flex  flex-col ">
    <button className='text-end' onClick={onClose}>x</button>
            <img
              className="w-80 h-60 mx-auto  bg-white"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbacYc9ljzgkklA87B-zorIdQUR9Pk7H9KQ&usqp=CAU"
              alt="Shoes"
            />
            <p className="text-end font-bold text-cyan-500">  ש"ח750</p>
            <div className="flex text-center ml-36 my-3">
              <button>
                <FiPlusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
              <p>2</p>
              <button>
                <FiMinusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between underline'>
                <p>750</p>
                <p> מחיר ליחידה</p>
              </div>   
              <div className='flex justify-between underline'>
                <p>49320750</p>
                <p> מקט</p>
              </div>   
              <div className='flex justify-between underline'>
                <p>נייק</p>
                <p> מותג</p>
              </div>   
              <div className='flex flex-col flex-row-reverse '>
                <p className=''> תיאור </p>
                <p>הנעל ממש יפה מושלמת ואו ואו</p>
              </div>   
            </div>
        </div>
    </div>
    </div>
  )
}
