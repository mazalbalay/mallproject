import React from 'react'
import {BsBoxSeam , BsFillPersonBadgeFill ,BsCreditCard2Front} from 'react-icons/bs'
import {AiOutlineLock} from 'react-icons/ai'
import {IoHomeOutline} from 'react-icons/io5'
import {CiLogin} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChangePWD from './ChangePWD'
import PersonalInfo from './PersonalInfo'


export default function Sidebar(setShowPage) {
  const navigate = useNavigate()
  const style = 'p-1 py-4 flex justify-end items-center border-x-2 border-b-2 cursor-pointer '
  return (
    <div className='text-right flex flex-col w-[25%] h-screen bg-white ' >
        
        <div className='border-2  h-[25%] w-[100%] flex flex-col items-center'>
            <div className=' bg-black w-[100%] h-[50%]'>1</div>
            <div className='w-20 h-20 border-2 rounded-full bottom-11 relative  bg-white'></div>
            <h1></h1>
        </div>
        <div className=' w-[100%]'>
        <div onClick={()=>{setShowPage('order')}} className={style}><div >ההזמנות שלי</div>< BsBoxSeam size={25} className='ml-2'/> </div>
        <div onClick={()=>{setShowPage('personalInfo')}} className={style}><div>מידע אישי</div>< BsFillPersonBadgeFill size={25} className='ml-2'/> </div>
        <div onClick={()=>{setShowPage('changePassword')}} className={style}><div >החלפת סיסמא</div>< AiOutlineLock size={25} className='ml-2'/> </div>
        <div onClick={()=>{setShowPage('address')}} className={style}><div >כתובת שלי</div><IoHomeOutline size={25} className='ml-2'/> </div>
        <div onClick={()=>{setShowPage('paytment')}} className={style}><div >נתוני תשלום</div>< BsCreditCard2Front size={25} className='ml-2'/> </div>
        <div  className={style} onClick={()=>localStorage.clear()}><div>התנתקות/התחברות</div>< CiLogin size={25} className='ml-2'/> </div>
        </div>
     
      
        
        
    </div>
  )
}
