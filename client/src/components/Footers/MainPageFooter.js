import React from "react";
import { BsFacebook, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import { FaCopyright, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MainPageFooter = () => {
  const data = [
    "אודותינו",
    "פירוט עמוד",
    "פירוט עמוד",
    "פירוט עמוד",
    "פירוט עמוד",
    "פירוט עמוד",
    "צור קשר",
  ];
  return (
    <footer className="bg-gray-900 w-full text-gray-300  bottom-0">
      <div className="container mx-auto w-8/12 pt-10 grid grid-cols-1 lg:grid-cols-7 md:gap-4 gap-5 text-center">
        {data.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>

      <div className="flex justify-center items-center pt-10 pb-3 ">
        <span className="mx-4 text-2xl">
          <BsFacebook className=" border-white" />
        </span>
        <span className="mx-4 text-2xl">
          <BsInstagram />
        </span>
        <span className="mx-4 text-2xl">
          <FaLinkedinIn />
        </span>
        <span className="mx-4 text-2xl">
          <FaTwitter />
        </span>
        <span className="mx-4 text-2xl">
          <BsFillEnvelopeFill />
        </span>
      </div>

      <div className="flex justify-center items-center ml-3 pb-3">
        <span className="mr-2"> כל הזכויות שמורות</span>
        <FaCopyright />
      </div>
    </footer>
  );
};

export default MainPageFooter;
