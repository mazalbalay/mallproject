import React, {useState,useEffect} from "react";
import {createDepartment,getDepartments} from './ApiCalls/Departments'

export default function Departments() {
  const [Departments, setDepartments] = useState([]);
    useEffect(() => {
        const getDepartmentsData = async () =>{
          const result = await getDepartments();
          setDepartments(result.data);
        }
        getDepartmentsData();
      },[]);
  return (
    <div>
<div>add Department</div>


{Departments.map(dep => <div key={dep._id}>

</div>)}


    </div>
  )
}
