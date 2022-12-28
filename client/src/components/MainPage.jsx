import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentComp from "./Admin/DepartmentComp";
import { getDepartments } from "./ApiCalls/Departments";
import BeatLoader from "react-spinners/BeatLoader";

export default function MainPage() {
  const navigate = useNavigate();

    const [Departments, setDepartments] = useState();
    const [inputSearch, setinputSearch] = useState([]);
   
  useEffect(() => {
    alldepartments();
  }, [inputSearch]);

  const alldepartments = async () => {
    const Deps = await getDepartments();
    const data = Deps?.data?.filter((dep) => dep.name.includes(inputSearch));
    setDepartments(data);
    console.log(data);
  };


console.log(Departments);
console.log(inputSearch);

  
      

  return (
    <div className='flex justify-center p-8' >
        <div className='w-2/3 flex flex-col	'>
        
        <p className='text-4xl m-6 text-center '>ברוך הבא לעולם החנויות שלך</p>
        <input onChange={e => setinputSearch(e.target.value)} className='m-6 h-12 border-current	 border-2 border-solid' type="text" placeholder='מה תרצה לחפש?'/>
        <p className='text-xl text-center m-6' >מחלקות שונות</p>


       {Departments ? 

        <div className=' flex flex-wrap justify-evenly'>
           {Departments.map(dep =>  <div key={dep._id}  onClick={()=> navigate(`${`/storelist/${dep.name}`}`)} ><DepartmentComp img={dep.image} text={dep.name}/></div>)}
           
        </div> : <BeatLoader
        color={'black'}
        loading={true}
        cssOverride={{display:'flex' , justifyContent:'center' , height:'30vh' , alignItems:'center'}}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        </div>
        </div>
  )
}
