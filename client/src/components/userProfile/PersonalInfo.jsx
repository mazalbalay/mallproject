import React, { useState } from 'react'
import { usersUpdate } from '../../api/api'  
import FileBase64 from "react-file-base64";
import axios from 'axios'

export default function PersonalInfo() {
  const user =  JSON.parse(localStorage.getItem(("user")))

const [userData ,setUserData] = useState({name:'', username:'', email:'' , profileImg:''})
const inputStyle = 'md:w-[70%]  w-[90%] text-right  p-1 outline-none border-b-2 border-gray-200'
const dateInput = 'w-[30%]  text-center p-1 outline-none border-b-2 border-gray-200'
  const handleChange = (e) =>{

setUserData({...userData , [e.target.name]:e.target.value})
  }

  const updateUser = async() =>{
   const {data} = await usersUpdate(userData , user.data._id)
   console.log(data);
  }

  console.log(userData);
  return (
    <div className='w-[100%] h-[100%] pt-10 flex flex-col md:text-right text-center py-3 px-10 bg-white'>
        <h1 className='text-2xl mb-5'>מידע אישי</h1>
        <div className=' flex flex-col items-end mb-5 '>
        <label className='my-1' htmlFor="">שם פרטי</label>
        <input onChange={handleChange} name='name' className={inputStyle} type="text" placeholder='שם' /></div>
        <div className=' flex flex-col items-end  mb-5 '>
        <label className='my-1' htmlFor="">שם משפחה </label>
        <input onChange={handleChange} name='username' className={inputStyle} type="text" placeholder='שם משתמש'  /></div>
        <div className=' flex flex-col items-end   mb-5'>
        <label className='my-1' htmlFor="">דוא"ל</label>
        <input onChange={handleChange} name='email'  className={inputStyle} type="email" placeholder='דואל' /></div>
        <div className=' flex flex-col items-end   mb-5'>
        <label className='my-1' htmlFor="">תאריך לידה</label>
        <div className='flex justify-between w-[30%]'>
        <input maxLength={2}  className={dateInput} type="" placeholder='' />
        <input  maxLength={2}  className={dateInput} type="text" placeholder='' />
        <input maxLength={2}  className={dateInput} type="text" placeholder='' /></div></div>
        <div className='md:relative left-28 static text-right mb-3  '>
        <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUserData({ ...userData, profileImg: base64 })
                }
              /></div>
        <button className='w-[30%] self-end border-2 border-black p-2 rounded ' onClick={updateUser}> שמירה</button>
    </div>
  )
}
