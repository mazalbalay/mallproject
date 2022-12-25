import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from '../Navs/MainNav';
import MainPageFooter from "../Footers/MainPageFooter";

export default function Main() {
  const navigate = useNavigate();
  const [User, setUser] = useState();

  useEffect(() => {
    const getAndSetUser = async () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    getAndSetUser();
  }, []);

  console.log(User);

  
  return (
    <div> <Nav/>
    <div className="w-full flex flex-col p-28">
     
      <div className="text-center	text-6xl	m-6">
        {User == null ? null : <div>{User.name }  שלום</div>}
      </div>
      <div className="text-center	text-3xl m-6">כאן ניתנת האפשרות ליצור לעדכן ולמחוק מחלקות\חנויות נא בחר את האפשרות הרצויה ובצע שינויים בהתאם</div>
     
      <div className="w-full flex flex-row justify-evenly m-6">
        <button
        onClick={() => navigate(`${"/Admin/departments"}`)}
          className=" bg-sky-300 hover:bg-sky-700 text-white font-bold w-48 py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
        >
          מחלקות
        </button>
        <button
         onClick={() => navigate(`${"/admin/stores"}`)}
          className=" bg-sky-300 hover:bg-sky-700 text-white font-bold w-48 py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
        >
          חנויות
        </button>
      </div>
    </div>
    <MainPageFooter/>
    </div>
  );
}
