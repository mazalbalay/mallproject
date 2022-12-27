import React ,{useState}from 'react'
import bcrypt from "bcryptjs-react";
import { usersUpdate ,users } from '../../api/api';

export default function ChangePWD() {
    const user = JSON.parse(localStorage.getItem(("user"))).data
    const password = user.password
    const [currentPSW , setCurrentPSW] = useState()
    const [newPSW , setNewPSW] = useState()   
    const [message , setMessage] = useState() 

    const checkPSW =async()=> {
      const hash = currentPSW === password
      //  bcrypt?.compareSync(currentPSW, password)
       console.log(hash);

      if(hash=== false) return setMessage('not the pass')
      
      // const newHashPass = await bcrypt.hash(newPSW , 12)
      // console.log(newHashPass);
      setMessage('')

      // setNewPSW(newPSW)

      const {data} = await usersUpdate({...user , password:newPSW} ,user._id )
      const {data:use} = await users()
      const filterd = use.filter(U =>U._id ===  user._id )
      const update = localStorage.setItem(("user" ) ,JSON.stringify( {data :filterd} ))
      console.log(data);
  }
      

    
  return (
    <div className='w-[100%]  md:w-[70%]  pt-10 flex flex-col text-right py-5 px-10   bg-white items-end '>
      <h1 className='text-2xl mb-5'>החלף סיסמא </h1>
      {message}
      <label htmlFor="">סיסמא נוכחית</label>
        <input className='md:w-[70%]  w-[90%] text-right my-3 p-2 outline-none border-b-2 border-gray-200' type="text" onChange={(e)=>setCurrentPSW(e.target.value)} placeholder='סיסמא נוכחית' name="" id="" />
       <label htmlFor=""> סיסמא חדשה</label>
        <input className='md:w-[70%]  w-[90%] text-right mb-3 p-2 outline-none border-b-2 border-gray-200'type="text" onChange={(e)=>setNewPSW(e.target.value)} placeholder='סיסמא חדשה' />
        <button onClick={checkPSW} className='p-2 mt-3 border-black border-2 rounded font-medium'>שמור סיסמה</button>
    </div>
  )
}
