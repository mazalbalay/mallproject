import React, {useState,useEffect} from "react";
import {getStores} from './ApiCalls/Store'
import { useNavigate } from "react-router-dom";
import DepartmentComp from './DepartmentComp'
export default function Stores() {
  const [Departments, setDepartments] = useState([]);
  const navigate = useNavigate();
    useEffect(() => {
        const getStoresData = async () =>{
          const result = await getStores();
          setDepartments(result.data);
        }
        getStoresData();
      },[]);
      function navigateTo (route) {
        navigate(`${route}`)
      }
  return (
    <div><div onClick={()=> navigateTo(`${"/Admin/Store/new"}`)}> + add Store</div>


    {Departments.map(store =>  <div  key={store._id} onClick={()=> navigateTo(`${`/Admin/Store/edit/${store._id}`}`)} ><DepartmentComp img={store.image} text={store.name}/></div>)}</div>
  )
}
