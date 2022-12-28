import React from "react";
import { useSelector } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";
import { ImLocation, ImUser, ImSearch } from "react-icons/im";
import { CiBrightnessDown } from "react-icons/ci";
import $ from "jquery";
import {IoIosClose, IoIosCart} from "react-icons/io"


const StoreListNav = ({ user }) => {
  const state = useSelector((state) => state.CartReducer);
  const navigate = useNavigate();
  return (
    <nav className="shadow-md w-full bg-white top-0 left-0">
      <div className=" md:container md:mx-auto flex items-center justify-between py-4 px-4 md:px-40 ">
        <div onClick={() => {
            navigate("/");
          }} className=" text-4xl cursor-pointer flex items-center font-[poppins text-grey-600]">
          <span className="md:flex md:items-center">
            <CiBrightnessDown />
          </span>
          LOGO
        </div>

          <label className="relative  md:block ml-10">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-400 py-1 pl-40 pr-0 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
              placeholder="?מה תרצה לחפש היום"
              type="text"
              name="search"
            />
            <span className="absolute inset-y-2 right-2 flex items-center py-2">
              <ImSearch className="text-2xl hidden md:flex fill-slate-400 py-1 cursor-pointer" />
            </span>
            <span className="absolute inset-y-2 left-0 flex items-center py-2">
              <IoIosClose className="text-4xl fill-slate-400 py-1 cursor-pointer " />
            </span>
          </label>

        <ul className="hidden md:flex items-center justify-end md:pb-0 w-full md:w-auto md:pl-0">
        <li className="md:ml-8 md:my-0 my-7 text-l hover:underline">
            <Link
              to="/terms-of-use"
              className="hover:text-green-400 duration-500">תנאי שימוש
              </Link>
          </li>
          <li  className="hidden md:flex items-center md:ml-5 md:my-0 my-7 text-l hover:underline">
           <Link
              to="/contact-us"
              className="hover:text-green-400 duration-500">צור קשר  
              </Link>
            
          </li>
          <li className="flex items-center md:ml-8 md:my-0 text-l hover:underline">
            <Link to="#" className="hover:text-green-400 duration-500">
             {user ? user?.location :  "לא צויין"}
            </Link>

            <span className="flex items-center text-green-500 text-xl px-1">
              <ImLocation />
            </span>
          </li>   <li
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

          <li className="flex items-center md:ml-5 md:my-0 my-7 text-l hover:underline">
            <Link to="#" className="hover:text-green-400 duration-500">
            שלום <span className="border-b-2">{user ? user?.name: "אורח"} </span> 
            </Link>
            
          </li>
       
          
          {user &&
          <li className="flex items-center md:ml-2 md:my-0 my-7 text-l">
            <span className="px-1 text-xl">
              <div
                onClick={() => {
                  if ($(window).width() < 500) navigate("/userprofile/");
                  else navigate("/userProfile/userprofile/profile-info");
                }}
                className="w-[50px]  h-[50px] flex justify-center items-center  border-2 rounded-full  bg-white"
              >
                {user?.profileImg ? (
                  <img src={user.profileImg} alt="" />
                ) : (
                  <div className="text-2xl">{user?.email[0].toUpperCase()}</div>
                )}
              </div>
            </span>
          </li>}
          
        </ul>
      </div>
    </nav>
  );
};

export default StoreListNav;
