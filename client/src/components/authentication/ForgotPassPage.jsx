import React, { useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { forgotPassword , usersUpdate ,users} from '../../api/api'
import{CiLock} from 'react-icons/ci'
import{AiFillEye} from 'react-icons/ai'
export default function ForgotPassPage() {
    const[email , setEmail] = useState()
    const[message , setMessage] = useState()
    const[showPass , setShowPass] = useState(false)
    const [password , setPassword] = useState()
    const{id} = useParams()
   
    const handleClick = async() =>{
      try{
    const {data} = await forgotPassword({email})
   setMessage(data);}
   catch(e){
    setMessage(e.response.data)
   }
    }

   const resetPassword = async() =>{
    const {data:allUsers} = await users()
    const currentUser = allUsers.filter(user => user._id === id)
    console.log(currentUser);
  try{
    const {data} = await usersUpdate({...currentUser, password} , id )
    setMessage('password change succses')}
  catch(e){
    setMessage('samething went worng')
  }

  
   }
console.log(message);

  return (
   
        <div className="w-screen  flex justify-center items-center mt-6 ">
            {id === 'undefined' ? 
      <div className="md:w-[25%]  flex flex-col justify-center items-center border-2 border-gray-300 p-5">
        <div className='border-2 border-black w-44 h-44 p-x-20 my-5 rounded-full'></div>
        <CiLock className='absolute top-[160px]' size={120}/>
        <h4 className='text-xl font-medium'> ? מתקשה לזכור את סיסמתך</h4>       
        <p className='text-center my-3 '>הזן את המייל שלך ונשלח לך לינק לאיפוס הסיסמה</p>
        <input onChange={(e)=>setEmail(e.target.value)} className='border-2 w-[95%] my-4 outline-none p-2 text-right border-gray-400 rounded' placeholder='אימייל' type="email" />
        <button onClick={handleClick} className='w-[95%] rounded bg-indigo-600 p-1.5 text-gray-50 '>שלח לינק לאיפוס הסיסמה</button>
        {/* <div className='font-bold text-orange-600 mt-2'>{message}</div> */}

        <div className="border-b-2 w-[95%] md:w-[] my-2  border-gray-400 self-center">
            <span className="relative bg-white px-1 text-lg top-3  left-[46%] ">
              או
            </span>
          </div>
       
       <Link to='/Auth'  className='text-lg mt-4 font-semibold'>חזרה להתחברות</Link >

      </div> :  
      <div className="w-[25%] flex flex-col justify-center items-center border-2 border-gray-300 p-5">
        <div className='border-2 border-black w-44 h-44 p-x-20 my-5 rounded-full'></div>
        <CiLock className='absolute top-[160px]' size={120}/>
        <p className='text-center my-2 '>הזן את סיסמתך החדשה</p>
        <AiFillEye onClick={()=>setShowPass(!showPass)} className='relative right-36 top-[47px]'/>
        <input onChange={(e)=>setPassword(e.target.value)} className='border-2 w-[95%] my-4 outline-none p-2 text-right border-gray-400 rounded' placeholder="סיסמה חדשה"  type={ showPass ? "text" : "password" }/>
        <button onClick={resetPassword} className='w-[95%] rounded bg-indigo-600 p-1.5 text-gray-50 '>איפוס</button>
        <div className='font-bold text-orange-600 mt-2'>{message}</div>

       
      
         </div>}
    </div>
  )
}
