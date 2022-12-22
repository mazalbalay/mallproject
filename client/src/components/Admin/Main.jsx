import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
 const [User,setUser] = useState()


useEffect(() => {
  const getAndSetUser = async () =>{
    setUser(JSON.parse(localStorage.getItem('user')))
  };
  getAndSetUser();
}, [])

console.log(User);

function navigateTo (route) {
  navigate(`${route}`)
}

  return <div>
    <div className="text-center">{User==null?null:<div>hello {User.name}</div>}</div>
    
    <div className="flex-row"><button  onClick={()=> navigateTo(`${"/Admin/departments"}`)}   className=" bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline">
  Departments
</button>
<button  onClick={()=> navigateTo(`${"/admin/stores"}`)}  className=" bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline">
  Stores
</button></div>
  </div>;
}
