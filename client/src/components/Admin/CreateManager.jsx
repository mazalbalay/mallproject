import React, { useState, useEffect } from "react";
import { createManager } from "../ApiCalls/Manager";
import FileBase64 from "react-file-base64";

export default function CreateDepartment() {
  const [ManagerName, setManagerName] = useState();
  const [ManagerUserName, setManagerUserName] = useState();
  const [ManagerEmail, setManagerEmail] = useState();
  const [ManagerPassword, setManagerPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [User, setUser] = useState([]);
 
 

  async function createAndLoadPage() {
    let user = await createManager(ManagerName,ManagerUserName,  ManagerEmail,ManagerPassword,confirmPassword);
    setUser([user.data]);
    console.log(User);
  }

  console.log(User);

  return (
    <div className="rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto p-20">
      
        
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p className="mx-auto text-center p-4 text-xl text-white		">
            יצירת מנהל
          </p>
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="name"
          >
            שם 
          </label>
          <input
           
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ManagerName"
            onChange={(e) => setManagerName(e.target.value)}
            type="text"
            placeholder="שם "
          />
        </div>
       
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="name"
          >
           שם משתמש
          </label>
          <input
           
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ManagerName"
            onChange={(e) => setManagerUserName(e.target.value)}
            type="text"
            placeholder=" שם משתמש "
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="ManagerEmail"
          >
           אימייל
          </label>
          <input
           
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ManagerEmail"
            onChange={(e) => setManagerEmail(e.target.value)}
            type="text"
            placeholder="אימייל "
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="ManagerPassword"
          >
           סיסמה
          </label>
          <input
           
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ManagerPassword"
            onChange={(e) => setManagerPassword(e.target.value)}
            type="text"
            placeholder="סיסמה "
          />
        </div>
        {/* confirmPassword */}

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="confirmPassword"
          >
           אימות סיסמה
          </label>
          <input
           
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="confirmPassword"
            onChange={(e) => setconfirmPassword(e.target.value)}
            type="text"
            placeholder="סיסמה "
          />
        </div>

        <div className="flex items-center justify-center p-4">
        {User.length === 0?  <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={() => createAndLoadPage()}
          >
           צור מנהל
          </button>:
      
       <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
          >
           מנהל נוצרה
          </button>}
        </div>
      </form>
     
    </div>
  );
}
