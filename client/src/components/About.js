import React from "react";
import { Link } from "react-router-dom";
import StoreListNav from "./StoreListNav";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="h-screen">
      <div>
        <StoreListNav />
      </div>

      <div className="container md:pt-20 md:mt-5 mx-auto w-8/12 text-gray-400 font-medium ">
       
          <ul className="md:w-3/12 w-8/12 float-right text-right">
            <li className="shadow py-3 px-3">
              <Link to="#">אודות</Link>
            </li>
            <li className="shadow py-3 px-3 hover:bg-gray-200">
              <Link to="#">שאלות נפוצות</Link>
            </li>
            <li className="shadow py-3 px-3  hover:bg-gray-200">
              <Link to="#">החלפת סיסמא</Link>
            </li>
            <li className="shadow py-3 px-3  hover:bg-gray-200">
              <Link to="#">כתובת שלי</Link>
            </li>
            <li className="shadow py-3 px-3  hover:bg-gray-200">
              <Link to="#">נתוני תשלום</Link>
            </li>
          </ul>
        </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
