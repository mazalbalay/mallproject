import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import * as api from "../../api/api";
import { useNavigate ,Link} from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
export default function Auth() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [singUp, setsingUp] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
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
    dispatch({type:'AUTH', payload:{  data }})
    console.log("facebook login success ,client side", data);
    navigate("/")
    window.location.reload()

  };

 
  const responseGoogleSuccess = async (response) => {
    console.log(response);
    const { data } = await axios.post("http://localhost:8000/googlelogin", {
      tokenId: response.tokenId,
    }); 
    // const data = user.user
    
    dispatch({type:'AUTH', payload:{  data }})
    navigate("/");
    window.location.reload()


    console.log("google login success ,client side", data);
  };
  
  const responseGoogleFailure = (response) => {
    console.log(response);
  };

  const handleClick = async () => {
    if (singUp) {
      try {
        const { data } = await api.singup(userData);
       
        dispatch({type:'AUTH', payload:{  data }})

        setUserData({
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          userName: "",
        });
        navigate("/");
        window.location.reload()

      } catch (e) {
        setMessage(e.response.data);
      }
    } else if (!singUp) {
      try {
        const { data} = await api.singin(userData);
    console.log(data);

        dispatch({type:'AUTH', payload:{  data }})

        navigate("/");
        window.location.reload()

      } catch (e) {
        setMessage(e.response.data);
      }
    }
  };

  return (
    <div className="w-screen  flex justify-center  ">
      <div className=" flex justify-center flex-col mt-10 md:flex-row w-[95%] md:m-20  ">
        
        <div
          className="w-[100%]  md:w-[30%] bg-white flex flex-col  items-center text-sm py-5 border-2 md:py-0 "
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
          <div className="flex flex-col-reverse md:flex-col justify-center ">
          <div className="text-center">
          {singUp && (
            <>
              <input
                onChange={handleChange}
                name="fullName"
                type="text"
                className=" my-1 text-right w-[70%] outline-none border-b-2 p-2 border-neutral-300"
                placeholder="שם מלא"
              />
              <input
                onChange={handleChange}
                name="userName"
                type="text"
                className="my-1 text-right w-[70%] md:w-[] outline-none border-b-2 p-2 border-neutral-300"
                placeholder="שם משתמש"
              />
            </>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="my-1 text-right w-[70%] md:w-[] outline-none border-b-2 p-2 border-neutral-300"
            placeholder='הזן כתובת דוא"ל'
          />
          <input
            onChange={handleChange}
            name="password"
            type={showPass ? "text" : "password"}
            className="my-1 text-right w-[70%] md:w-[] outline-none border-b-2 p-2 border-neutral-300"
            placeholder="הזן סיסמא"
          />
          {singUp && (
            <input
              onChange={handleChange}
              type={showPassConfirm ? "text" : "password"}
              name="confirmPassword"
              className="text-right w-[70%] md:w-[] outline-none border-b-2 p-2 border-neutral-300"
              placeholder="אשר סיסמא"
            />
          )}
          <button
            className="mt-3 p-2 border-2 w-[70%] md:w-[] rounded border-blue-200"
            onClick={handleClick}
          >
            {singUp ? "הירשם" : "התחבר"}
          </button>
          </div>
          <div className="border-b-2 w-[70%] md:w-[] my-2 self-center">
            <span className="relative bg-white px-1 text-xs top-2 left-[46%]">
              או
            </span>
          </div>
        <div className="flex flex-col mt-5 items-center w-[100%] ">
          <FacebookLogin
          buttonStyle={{width:'290px' , height:'50px'}}
            appId="884021796289155"
            autoLoad={false}
            callback={responseFacebook} 
          />
          <GoogleLogin
            className="w-[290px] md:w-[70%] h-12 mt-2"
            clientId="727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
            

          />
          </div>
</div>
          <span className="text-[10px] flex justify-between w-[70%] mt-2">
            <span onClick={() => setsingUp(!singUp)} className="cursor-pointer">
              {singUp ? "כבר יש חשבון ? התחבר" : "אין לך חשבון? הרשם"}
            </span>
            <span className="cursor-pointer">
              {singUp ? null : <Link to='/forgot-password/undefined'> שכחת סיסמא ?</Link>}
            </span>
          </span>
        </div>
      </div>
    
    </div>
  );
}
