import React, {useState,useEffect} from "react";
import {getDepartments} from '../ApiCalls/Departments'
import { useNavigate } from "react-router-dom";
import DepartmentComp from './DepartmentComp'

export default function Departments() {
  const [Departments, setDepartments] = useState([]);
  const navigate = useNavigate();
    useEffect(() => {
        const getDepartmentsData = async () =>{
          const result = await getDepartments();
          setDepartments(result.data);
        }
        getDepartmentsData();
      },[]);
      function navigateTo (route) {
        navigate(`${route}`)
      }
  return (
    <div>
<div onClick={()=> navigateTo(`${"/Admin/Department/new"}`)}> + add Department</div>


{Departments.map(dep =>  <div  key={dep.id} onClick={()=> navigateTo(`${`/Admin/Department/edit/${dep._id}`}`)} ><DepartmentComp img={dep.image} text={dep.name}/></div>)}



    </div>
  )
}
