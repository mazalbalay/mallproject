import React, {useState,useEffect} from "react";
import {createDepartment,getDepartments} from '../ApiCalls/Departments'


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
    <div className="w-full m-auto rounded m-20 text-center h-screen w-1/2 ">
      
        
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
       <p className="mx-auto text-center p-4 text-xl text-white		" >יצירת מחלקה</p>
       </div>
        <div className="mb-4 p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="name">
            שם מחלקה
          </label>
          <input
            // className="shadow appearance-none border text-end rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            id="DepName"
            onChange={(e) => setDepName(e.target.value)}
            type="text"
            placeholder="שם מחלקה"
          />
        </div>
        <div className="mb-4 p-4">
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            תמונת מחלקה
          </label>
          </div>
          <div classNameName="flex justify-center">
          <input
              classNameName="block text-right  text-sm text-gray-900 bg-gray-50 rounded border "
              type="file"
              onChange={setDepImage}
              placeholder={"בחירת קובץ"}
            />
            </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description">
            תיאור מחלקה
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DepDesc"
            onChange={(e) => setDepDesc(e.target.value)}
            type="text"
            placeholder="תיאור מחלקה"
          />
        </div>

        <div className="flex items-center justify-center p-4">
          <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
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
