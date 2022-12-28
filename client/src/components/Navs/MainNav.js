import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiBrightnessDown } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function navigateTo(route) {
    navigate(`${route}`);
  }
  return (
    <nav className="shadow-md w-full top-0 left-0 bg-white">
      <div className=" container mx-auto md:flex items-center justify-between py-4 md:px-40 px-7">
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" text-4xl cursor-pointer flex items-center font-[poppins text-grey-600]"
        >
          <span className="md:flex md:items-center">
            <CiBrightnessDown />
          </span>
          LOGO
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in
           ${open ? "top-20" : "top-[-490px]"}`}
        >
          <li className="md:ml-8 md:my-0 my-7 text-l hover:underline">
            <Link
              to="/contact-us"
              className="hover:text-green-400 duration-500"
            >
              צור קשר
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 text-l hover:underline">
            <Link
              to="/terms-of-use"
              className="hover:text-green-400 duration-500"
            >
              תנאי שימוש
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7  text-l hover:underline">
            <Link
              to="/environmental-quality"
              className="hover:text-green-400 duration-500"
            >
              {" "}
              איכות הסביבה
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7  text-l hover:underline">
            <Link
              to="/registration"
              className="hover:text-green-400 duration-500"
            >
              {" "}
              הרשמה
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7  text-l hover:underline">
            <Link to="/Auth" className="hover:text-green-400 duration-500">
              כניסת משתמש
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
