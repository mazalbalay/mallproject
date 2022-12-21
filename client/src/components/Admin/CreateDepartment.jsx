import React, {useState,useEffect} from "react";
import {createDepartment,getDepartments} from '../ApiCalls/Departments';
import FileBase64 from 'react-file-base64';

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
    <div class="w-full max-w-xs m-auto ">
       <p class="mx-auto m-10 text-xl		" >Create Department</p>
        
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            department name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DepName"
            onChange={(e) => setDepName(e.target.value)}
            type="text"
            placeholder="department name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
            department image
          </label>
          <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setDepImage({ ...DepImage,image :  base64})}
              />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            for="description">
            department description
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DepDesc"
            onChange={(e) => setDepDesc(e.target.value)}
            type="text"
            placeholder="department description"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={()=>createDepartment(DepName,DepImage.base64,DepDesc)}
          >
            create Department
          </button>
        </div>
      </form>
     
    </div>
  );
}
