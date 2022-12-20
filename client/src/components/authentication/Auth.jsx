import React, { useState, useEffect } from "react";
import * as api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export default function Auth() {
  const navigate = useNavigate();
  const [singUp, setsingUp] = useState(false);
  const [users, setUsers] = useState();
  const [message, setMessage] = useState();
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

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  const responseFacebook = async (response) => {
    console.log(response);
    const { data } = await axios.post("http://localhost:8000/facebooklogin", {
      accessToken: response.accessToken,
      userID: response.userID,
    });
    const user = data.user;
    localStorage.setItem("user", JSON.stringify({ data: user }));
    console.log("facebook login success ,client side", user);
    navigate("/userprofile");
  };

  const responseGoogleFailure = (response) => {
    console.log(response);
  };
  const responseGoogleSuccess = async (response) => {
    console.log(response);
    const { data } = await axios.post("http://localhost:8000/googlelogin", {
      tokenId: response.tokenId,
    });
    console.log("facebook login success ,client side", data);
  };

  const allUsers = async () => {
    const { data } = await api.users();
    setUsers(data);
  };

  useEffect(() => {
    allUsers();
  }, []);

  const handleClick = async () => {
    if (singUp) {
      try {
        const { data } = await api.singup(userData);

        localStorage.setItem("user", JSON.stringify({ data }));

        setUserData({
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          userName: "",
        });
        navigate("/userprofile");
      } catch (e) {
        setMessage(e.response.data);
      }
    } else if (!singUp) {
      try {
        const { data } = await api.singin(userData);
        localStorage.setItem("user", JSON.stringify({ data }));

        navigate("/userprofile");
      } catch (e) {
        setMessage(e.response.data);
      }
    }
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
          {message && (
            <span className="text-white bg-red-600 p-1 font-medium rounded">
              {message}
            </span>
          )}
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
            type="email"
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

          <FacebookLogin
            appId="884021796289155"
            autoLoad={false}
            callback={responseFacebook}
          />
          <GoogleLogin
            clientId="727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
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