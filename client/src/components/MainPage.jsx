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

// console.log(Departments);
  return (
    <div className='flex justify-center p-8' >
        <div className='w-2/4 flex flex-col	'>
        
        <p className='text-4xl m-6 text-center '>ברוך הבא לעולם החנויות שלך</p>
        <input className='m-6 h-12 border-current	 border-2 border-solid' type="text" placeholder='מה תרצה לחפש?'/>
        <p className='text-xl text-center m-6' >מחלקות שונות</p>
        
       
        <div className=' flex flex-wrap justify-evenly'>
           {Departments.map(dep =>  <div key={dep.id}  onClick={()=> navigateTo(`${`/storelist/${dep.name}`}`)} ><DepartmentComp img={dep.image} text={dep.name}/></div>)}
           
        </div>
        </div>
        </div>
  )
}