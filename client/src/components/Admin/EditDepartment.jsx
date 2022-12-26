import React, { useState, useEffect } from "react";
import {
  editDepartment,
  getDepartment,
  deleteDepartment,
} from "../ApiCalls/Departments";
import { useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import Nav from '../Navs/MainNav';
import MainPageFooter from "../Footers/MainPageFooter";

export default function EditDepartment() {
  let { depId } = useParams();
  const [Department, setDepartment] = useState([]);
  const [DepartmentName, setDepartmentName] = useState();
  const [DepartmentImage, setDepImage] = useState();
  const [DepartmentDesc, setDepartmentDesc] = useState();
  useEffect(() => {
    const getDepartmentData = async () => {
      const result = await getDepartment(depId);
      setDepartment([result.data]);
    };
    getDepartmentData();
  }, [depId]);
  async function editAndLoadPage() {
    await editDepartment(
      depId,
      DepartmentName,
      DepartmentImage.image,
      DepartmentDesc
    );
    alert("מחלקה עודכנה");
  }
  async function deleteAndLoadPage() {
    await deleteDepartment(depId);
  }
  console.log(Department);
  return ( <div>
    <Nav/>
    <div className=" rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p className="mx-auto text-center p-4 text-xl text-white		">
            עידכון מחלקה
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
            id="DepartmentName"
            onChange={(e) => setDepartmentName(e.target.value)}
            type="text"
            placeholder="שם מחלקה"
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
            onDone={({ base64 }) =>
              setDepImage({ ...DepartmentImage, image: base64 })
            }
            placeholder={"בחירת קובץ"}
          />
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            htmlFor="description "
          >
            תיאור מחלקה
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepartmentDesc"
            type="text"
            onChange={(e) => setDepartmentDesc(e.target.value)}
            placeholder="תיאור מחלקה"
          />
        </div>

        <div className="flex items-center justify-evenly p-4">
          <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={() => editAndLoadPage()}
          >
            עידכון מחלקה
          </button>
          {Department[0] === null ? (
            <div className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline">
              מחלקה נמחקה
            </div>
          ) : (
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
              onClick={() => deleteAndLoadPage(depId)}
            >
              מחק מחלקה
            </button>
          )}
        </div>
      </form>

      
    </div><MainPageFooter/>
    </div>
  );
}
