import React from "react";
import { BsFacebook, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {

  const data = ["פירוט עמוד", "פירוט עמוד", "פירוט עמוד", "פירוט עמוד", "אודותינו"]
  return (
    <footer className="bg-gray-900 w-full text-gray-300  bottom-0">
      <div className="container mx-auto w-8/12 pt-10 grid grid-cols-1 sm:grid-cols-5 md:gap-6 gap-3 text-center">
        {data.map((item)=>{
          return(
        <ul>
          <li className="cursor-pointer"> {item}</li>
          <li className="cursor-pointer">{item} </li>
        </ul>
          )
        })}
   
      </div>

      <div className="flex justify-center items-center pt-10 pb-3 ">
        <span className="mx-4 text-2xl">
          <BsFacebook className=" cursor-pointer" />
        </span>
        <span className="text-2xl">
          <BsInstagram className=" cursor-pointer"/>
        </span>
        <span className="mx-4 text-2xl">
          <BsFillEnvelopeFill className=" cursor-pointer" />
        </span>
      </div>

      <div className="flex justify-center items-center ml-3 pb-3">
        <span className="mr-2"> כל הזכויות שמורות</span>
        <FaCopyright />
      </div>
    </footer>
  );
};

export default Footer;
