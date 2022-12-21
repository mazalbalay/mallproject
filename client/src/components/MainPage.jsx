import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import DepartmentComp from './Admin/DepartmentComp'
import { getDepartments } from './ApiCalls/Departments'

export default function MainPage() {
    const navigate = useNavigate();
    const [Departments, setDepartments] = useState([]);
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

console.log(Departments);
  return (
    <div class='flex justify-center' style={{  
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiFxlK4AauN9A1iFM9HYZliv_dGzHD1iXhg&usqp=CAU)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div class='w-3/5 flex flex-col	'>
        
        <p class='text-4xl m-3 text-center '>m;dm;dsm mcd;smcdmcd</p>
        <input class='m-3 h-8' type="text" placeholder='מה תרצה לחפש?'/>
        <p class='text-xl text-center m-3' >ndvsnvlnvd vnskldksl</p>
        
       
        <div class=' flex flex-wrap'>
           {Departments.map(dep =>  <div key={dep.id}  onClick={()=> navigateTo(`${"/Admin/departments"}`)} ><DepartmentComp img={dep.image} text={dep.name}/></div>)}
           
        </div>
        </div>
        </div>
  )
}