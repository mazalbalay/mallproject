import React, { useState, useEffect } from "react";
import { createDepartment, getDepartments } from "../ApiCalls/Departments";
import FileBase64 from "react-file-base64";

export default function CreateDepartment() {
  const [DepName, setDepName] = useState();
  const [DepImage, setDepImage] = useState();
  const [DepDesc, setDepDesc] = useState();
  const [Departments, setDepartments] = useState([]);
  const [Department, setDepartment] = useState([]);
  useEffect(() => {
    const getDepartmentsData = async () => {
      const result = await getDepartments();
      setDepartments(result.data);
    };
    getDepartmentsData();
  }, []);

  async function createAndLoadPage() {
    let dep = await createDepartment(DepName, DepImage.image, DepDesc);
    setDepartment([dep.data]);
    console.log(dep);
  }

  console.log(Departments);
  console.log(Department);

  return (
    <div className="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p className="mx-auto text-center p-4 text-xl text-white		">
            יצירת מחלקה
          </p>
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
            htmlFor="name"
          >
            שם מחלקה
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepName"
            onChange={(e) => setDepName(e.target.value)}
            type="text"
            placeholder="department name"
          />
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
            htmlFor="image"
          >
            תמונת מחלקה
          </label>

          <FileBase64
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            type="file"
            onDone={({ base64 }) => setDepImage({ ...DepImage, image: base64 })}
            placeholder={"בחירת קובץ"}
          />
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            htmlFor="description "
          >
            תיאור מחלקה
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setDepDesc(e.target.value)}
            placeholder="תיאור מחלקה"
          />
        </div>

        <div className="flex items-center justify-center p-4">
        {Department.length === 0?  <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={() => createAndLoadPage()}
          >
           צור מחלקה
          </button>:
      
       <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
          >
           מחלקה נוצרה
          </button>}
        </div>
      </form>
     
    </div>
  );
}
