import React from 'react'

export default function PersonalInfo() {
  const user =  JSON.parse(localStorage.getItem(("user")))
  return (
    <div className='w-[38%] pt-20 flex flex-col text-right py-3 px-10 bg-white'>
        <h1 className='text-2xl mb-5'>מידע אישי</h1>
        <div className=' flex flex-col items-end mb-5 '>
        <label className='my-1' htmlFor="">שם פרטי</label>
        <input defaultValue={user?.data.name} className='w-[70%] text-right  p-1 outline-none border-b-2 border-gray-500' type="text" placeholder='שם' /></div>
        <div className=' flex flex-col items-end  mb-5 '>
        <label className='my-1' htmlFor="">שם משפחה </label>
        <input className='w-[70%] text-right  p-1 outline-none border-b-2 border-gray-500' type="text" placeholder='משפחה'  /></div>
        <div className=' flex flex-col items-end   mb-5'>
        <label className='my-1' htmlFor="">דוא"ל</label>
        <input defaultValue={user?.data.email} className='w-[70%] text-right  p-1 outline-none border-b-2 border-gray-500' type="email" placeholder='דואל' /></div>
        <div className=' flex flex-col items-end   mb-5'>
        <label className='my-1' htmlFor="">תאריך לידה</label>
        <div className='flex justify-between w-[30%]'>
        <input className='w-[30%]  text-center p-1 outline-none border-b-2 border-gray-500' type="" placeholder='' />
        <input className='w-[30%] text-center  p-1 outline-none border-b-2 border-gray-500' type="text" placeholder='' />
        <input className='w-[30%] text-center  p-1 outline-none border-b-2 border-gray-500' type="text" placeholder='' /></div></div>
        
    </div>
  )
}
