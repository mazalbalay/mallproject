import React from "react";
import { BsFacebook, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const data = [
    { name: "צור קשר", rout: "/contact-us" },
    { name: "אודות", rout: "" },
    { name: "שאלות ",rout: "/faq" },
    // { name: "צור קשר", rout: "/contact-us" },
  ];
  return (
    <footer className="bg-gray-900 w-full text-gray-300  bottom-0">
      <div className="w-full pt-10  flex justify-center">
        <ul className="flex w-2/3 justify-evenly">
          {data.map((item) => {
            return <li onClick={()=>navigate(item.rout)} className="cursor-pointer"> {item.name}</li>;
          })}
        </ul>
      </div>

      <div className="flex justify-center items-center pt-10 pb-3 ">
        <span className="mx-4 text-2xl">
          <BsFacebook className=" cursor-pointer" />
        </span>
        <span className="text-2xl">
          <BsInstagram className=" cursor-pointer" />
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
