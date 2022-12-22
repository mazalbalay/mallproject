import React, {useState,useEffect} from "react";
import {createDepartment,getDepartments} from '../ApiCalls/Departments'
import FileBase64 from "react-file-base64";


export default function CreateDepartment() {
    const [DepName, setDepName] = useState();
    const [DepImage, setDepImage] = useState();
    const [DepDesc, setDepDesc] = useState();
    const [Departments, setDepartments] = useState([]);
    useEffect(() => {
        const getDepartmentsData = async () =>{
          const result = await getDepartments();
          setDepartments(result.data);
        }
        getDepartmentsData();
      },[]);

   console.log(Departments);
  
  return (
    <div class="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      
        
      <form class="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
       <p class="mx-auto text-center p-4 text-xl text-white		" >יצירת מחלקה</p>
       </div>
        <div class="mb-4 p-4">
          <label class="block text-gray-700 pb-2 text-sm font-bold mb-2 " for="name">
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
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
            תיאור מחלקה
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setDepDesc(e.target.value)}
            placeholder="תיאור מחלקה"
          />
        </div>

        <div class="flex items-center justify-center p-4">
          <button
            class="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={()=>createDepartment(DepName,DepImage,DepDesc)}
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
