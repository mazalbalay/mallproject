import React,{useState,useEffect} from 'react'
import DepartmentComp from './DepartmentComp'
import {editDepartment,getDepartment, deleteDepartment} from './ApiCalls/Departments'
import {useParams } from 'react-router-dom';
import FileBase64 from "react-file-base64";

export default function EditDepartment() {
    let { depId } = useParams();
    const [Department, setDepartment] = useState([]);
    const [DepName, setDepName] = useState();
    const [DepImage, setDepImage] = useState();
    const [DepDesc, setDepDesc] = useState();
      useEffect(() => {
          const getDepartmentData = async () =>{
            const result = await getDepartment(depId);
            setDepartment([result.data]);
          }
          getDepartmentData();
        },[depId]);
        function editAndLoadPage () {
          editDepartment(depId,DepName,DepImage.base64,DepDesc)
          window.location.reload();
        }
        function deleteAndLoadPage () {
          deleteDepartment(depId)
          window.location.reload();
        }
        console.log(Department);
        console.log(DepImage);
        console.log(DepDesc);
  return (
    <div>
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
         onClick={()=>editAndLoadPage()}
       
       >
         create Department
       </button>
     </div>
   </form>
   

{Department[0]===null?<div>department deleted</div>:<button onClick={()=>deleteAndLoadPage(depId)}>Delete department</button>}
  {Department[0]===null?null:<DepartmentComp img={Department.image} text={Department.name}/>}
    </div>
  )
}
