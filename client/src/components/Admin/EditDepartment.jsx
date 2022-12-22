import React, { useState, useEffect } from "react";
import DepartmentComp from "./DepartmentComp";
import {
  editDepartment,
  getDepartment,
  deleteDepartment,
} from "../ApiCalls/Departments";
import { useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";

export default function EditDepartment() {
  let { depId } = useParams();
  const [Department, setDepartment] = useState([]);
  const [DepName, setDepName] = useState();
  const [DepImage, setDepImage] = useState();
  const [DepDesc, setDepDesc] = useState();
  useEffect(() => {
    const getDepartmentData = async () => {
      const result = await getDepartment(depId);
      setDepartment([result.data]);
    };
    getDepartmentData();
  }, [depId]);
  function editAndLoadPage() {
    editDepartment(depId, DepName, DepImage.base64, DepDesc);
    window.location.reload();
  }
  function deleteAndLoadPage() {
    deleteDepartment(depId);
    window.location.reload();
  }
  console.log(Department);
  console.log(DepImage);
  console.log(DepDesc);
  return (
    <div class="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      <form class="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p class="mx-auto text-center p-4 text-xl text-white		">עדכון מחלקה</p>
        </div>
        <div class="mb-4 p-4">
          <label
            class="block text-gray-700 pb-2 text-sm font-bold mb-2 "
            for="name"
          >
            שם מחלקה
          </label>
          <input
            // class="shadow appearance-none border text-end rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepName"
            onChange={(e) => setDepName(e.target.value)}
            type="text"
            placeholder="שם מחלקה"
          />
        </div>
        <div class="mb-4 p-4">
          
            <label
            class="block text-gray-700 pb-2 text-sm font-bold mb-2 "
            for="image"
            >
              תמונת מחלקה
            </label>
          
          {/* <div className="flex justify-center w-full"> */}
            <FileBase64
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            type="file"
              onChange={setDepImage}
              placeholder={"בחירת קובץ"}
            />
          {/* </div> */}
        </div>
        <div class="mb-4 p-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description "
          >
            תיאור מחלקה
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            onChange={(e) => setDepDesc(e.target.value)}
            type="text"
            placeholder="תיאור מחלקה"
          />
        </div>

        <div class="flex items-center justify-center p-4">
          <button
            class="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onChange={(e) => setDepDesc(e.target.value)}
          >
            יצירת מחלקה
          </button>
        </div>
      </form>
      {/* {Departments.map(dep=><div key={dep._id}>
  <img src={dep.image} alt=""  />
</div>)} */}
    </div>
  );
}

// <div>
// <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//      department name
//    </label>
//    <input
//      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//      id="DepName"
//      onChange={(e) => setDepName(e.target.value)}
//      type="text"
//      placeholder="department name"
//    />
//  </div>
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//      department image
//    </label>
//    <FileBase64
//          type="file"
//          multiple={false}
//          onDone={({ base64 }) => setDepImage({ ...DepImage,image :  base64})}
//        />
//  </div>
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2"
//      htmlFor="description">
//      department description
//    </label>
//    <input
//      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//      id="DepDesc"
//      onChange={(e) => setDepDesc(e.target.value)}
//      type="text"
//      placeholder="department description"
//    />
//  </div>

//  <div className="flex items-center justify-between">
//    <button
//      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//      type="button"
//      onClick={()=>editAndLoadPage()}

//    >
//      create Department
//    </button>
//  </div>
// </form>

// {Department[0]===null?<div>department deleted</div>:<button onClick={()=>deleteAndLoadPage(depId)}>Delete department</button>}
// {Department[0]===null?null:<DepartmentComp img={Department.image} text={Department.name}/>}
// </div>
