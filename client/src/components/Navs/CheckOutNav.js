import React from 'react';
import { Link } from "react-router-dom";
import { ImLocation, ImUser, ImSearch } from "react-icons/im";
import { CiBrightnessDown } from "react-icons/ci";
import {IoIosClose, IoIosCart} from "react-icons/io"
import {FiAlignRight} from "react-icons/fi";
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const CheckOutNav = () => {
  const state = useSelector((state) => state.CartReducer);
  const navigate =useNavigate()
  console.log(state);//undefine
  return (
    <nav className="shadow-md w-full top-0 left-0 bg-white">
    <div className=" md:container md:mx-auto flex items-center justify-between py-4 px-4 md:px-40 ">
      <div className=" text-4xl cursor-pointer flex items-center font-[poppins text-grey-600]">
        <span className="md:flex md:items-center">
          <CiBrightnessDown />
        </span>
        LOGO
      </div>

      <form>
        <label className="relative hidden md:block ml-10">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-400 py-1 pl-60 pr-0 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
            placeholder="?מה תרצה לחפש היום"
            type="text"
            name="search"
          />
          <span className="absolute inset-y-2 right-2 flex items-center py-2">
            <ImSearch className="text-2xl fill-slate-400 py-1 "/>
          </span>
          <span className="absolute inset-y-2 left-0 flex items-center py-2">
            <IoIosClose className="text-4xl fill-slate-400 py-1 "/>
          </span>
        </label>
      </form>

      <ul className="flex items-center justify-end md:pb-0 w-full md:w-auto md:pl-0">
        <li
        onClick={()=>{
          navigate("/checkout")
        }}
         className="flex items-center ml-3 md:my-0 text-l">
          <Link to="/cart" >
          <span className="flex items-center text-xl px-1">
            <IoIosCart />
            {state.length}
            
          </span>
          </Link>
        </li> 
        
         <li className="flex items-center ml-3 md:my-0 text-l">
          <Link to="#" >
          <span className="flex items-center text-xl px-1">
            <FiAlignRight />
          </span>
          </Link>
        </li>

         <li className="flex items-center ml-3 md:my-0 text-l">
          <Link to="#" >
          <span className="flex items-center text-xl">
            <ImLocation />
          </span>  
          </Link>
        </li> 

         <li className="flex items-center ml-3 md:my-0 text-l">
          <Link to="#" >
          <span className="flex items-center text-xl px-1">
            <ImUser />
          </span> 
          </Link>
        </li> 
      </ul>
    </div>
  </nav>
  )
}

export default CheckOutNav