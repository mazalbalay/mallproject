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
    
    {User==null?null:<div>hello {User.name}</div>}
    <button  onClick={()=> navigateTo(`${"/Admin/departments"}`)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Departments
</button>
<button  onClick={()=> navigateTo(`${"/Admin/stores"}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Stores
</button>
  </div>;
}
