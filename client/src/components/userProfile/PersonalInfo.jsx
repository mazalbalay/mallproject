import React, { useState } from "react";
import { usersUpdate, users } from "../../api/api";
import FileBase64 from "react-file-base64";

export default function PersonalInfo() {
  const user = JSON.parse(localStorage.getItem("user")).data;
  const [birthday, setBirthday] = useState();

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    profileImg: "",
    location: "",
  });
  console.log(userData);
  const inputStyle =
    "md:w-[70%]  w-[90%] text-right  p-2 outline-none border-b-2 border-gray-200";
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    const { data } = await usersUpdate(
      { ...userData, birthday: birthday },
      user._id
    );
    const { data: allUsers } = await users();
    const filterdUsers = allUsers.filter((u) => user._id === u);
    localStorage.setItem("user", JSON.stringify({ data: filterdUsers }));
  };

  console.log(userData);
  return (
    <div className="md:w-[70%] w-[100%] pt-10 flex flex-col md:text-right text-center py-3 px-10 bg-white">
      <h1 className="text-2xl mb-5">מידע אישי</h1>
      <div className=" flex flex-col items-end mb-5 ">
        <label className="my-1 font-medium" htmlFor="">
          שם פרטי
        </label>
        <input
          defaultValue={user?.name}
          onChange={handleChange}
          name="name"
          className={inputStyle}
          type="text"
          placeholder="שם"
        />
      </div>

      <div className=" flex flex-col items-end   mb-5">
        <label className="my-1 font-medium" htmlFor="">
          דוא"ל
        </label>
        <input
          defaultValue={user?.email}
          onChange={handleChange}
          name="email"
          className={inputStyle}
          type="email"
          placeholder="דואל"
        />
      </div>
      <div className=" flex flex-col items-end   mb-5">
        {" "}
        <label className="my-1 font-medium" htmlFor="">
          מיקום
        </label>
        <input
          defaultValue={user?.location}
          onChange={handleChange}
          name="location"
          className={inputStyle}
          type="text"
          placeholder="מיקום"
        />
      </div>
      <div className=" flex flex-col items-end   mb-5">
        <label className="my-1 font-medium" htmlFor="">
          תאריך לידה
        </label>
        <input
          defaultValue={user?.birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className={inputStyle}
          type="date"
          placeholder=""
        />
      </div>
      <div className="font-medium">תמונת פרופיל</div>
      <div className="md:relative left-24 static text-right mb-3  mt-2 ">
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setUserData({ ...userData, profileImg: base64 })
          }
        />
      </div>
      <button
        className="w-[30%] self-end border-2 border-black p-2 rounded "
        onClick={updateUser}
      >
        {" "}
        שמירה
      </button>
    </div>
  );
}
