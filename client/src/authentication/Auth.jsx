import React, { useState, useEffect } from "react";
import * as api from "../api/api";
import { GoogleLogin } from "react-google-login";

export default function Auth() {
  const [singUp, setsingUp] = useState(true);
  const [users, setUsers] = useState();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    userName: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const allUsers = async () => {
    const { data } = await api.users();
    setUsers(data);
  };

  useEffect(() => {
    allUsers();
  }, []);

  console.log(users);

  const handleClick = async () => {
    if (singUp) {
      await api.singup(userData);
      setUserData({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        userName: "",
      });
    } else if (!singUp) {
      await api.singin(userData);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="w-screen  flex justify-center fixed">
      <div className=" flex justify-center w-[100%] m-20 ">
        <div className=" my-1 w-[20%] bg-red-400"></div>
        <div
          style={{ boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.3)" }}
          className="w-[30%] bg-white flex flex-col items-center text-sm "
        >
          <h1 className="text-3xl my-1">{singUp ? "הרשמה" : "כניסה"}</h1>
          <h4 className="my-1">
            {" "}
            {singUp ? 'הירשם באמצעות דוא"ל' : 'התחבר באמצעות דוא"ל ששלך וסיסמא'}
          </h4>
          {singUp && (
            <>
              <input
                onChange={handleChange}
                name="fullName"
                type="text"
                className=" my-1 text-right w-[60%] outline-none border-b-2 p-2 border-neutral-300"
                placeholder="שם מלא"
              />
              <input
                onChange={handleChange}
                name="userName"
                type="text"
                className="my-1 text-right w-[60%] outline-none border-b-2 p-2 border-neutral-300"
                placeholder="שם משתמש"
              />
            </>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="text"
            className="my-1 text-right w-[60%] outline-none border-b-2 p-2 border-neutral-300"
            placeholder='הזן כתובת דוא"ל'
          />
          <input
            onChange={handleChange}
            name="password"
            type="text"
            className="my-1 text-right w-[60%] outline-none border-b-2 p-2 border-neutral-300"
            placeholder="הזן סיסמא"
          />
          {singUp && (
            <input
              onChange={handleChange}
              type="text"
              name="confirmPassword"
              className="text-right w-[60%] outline-none border-b-2 p-2 border-neutral-300"
              placeholder="אשר סיסמא"
            />
          )}
          <button
            className="mt-3 p-2 border-2 w-[60%] rounded border-blue-200"
            onClick={handleClick}
          >
            {singUp ? "הירשם" : "התחבר"}
          </button>
          <span className="border-b-2 w-[60%] my-2">
            <span className="relative bg-white px-1 text-xs top-2 left-[46%]">
              או
            </span>
          </span>
          <GoogleLogin
            clientId="118741861745-5ehsla9o2defvpgfvgahjv3s22d2tn28.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />{" "}
          <button className="my-1">google</button>
          <span className="text-[10px] flex justify-between w-[70%]">
            <span onClick={() => setsingUp(!singUp)} className="cursor-pointer">
              {singUp ? "כבר יש חשבון ? התחבר" : "אין לך חשבון? הרשם"}
            </span>
            <span className="cursor-pointer">
              {singUp ? null : "שכחת סיסמא ?"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
