import React, { useState } from 'react'
import {BsBoxSeam , BsFillPersonBadgeFill ,BsCreditCard2Front} from 'react-icons/bs'
import {AiOutlineLock} from 'react-icons/ai'
import {IoHomeOutline} from 'react-icons/io5'
import {CiLogin} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import $ from "jquery";


export default function Sidebar() {
const navigate = useNavigate()
  const user =  JSON.parse(localStorage.getItem(("user")))

  const handleSideBar = (pathresponsive , path) =>{
    if ($(window).width() < 500) navigate(pathresponsive);
    else navigate(path)
  }
const logOut = ()=>{
    navigate('/')   
    localStorage.clear()
window.location.reload()
}

  const style = ' p-1 h-[80px] md:p-1 py-4 flex justify-end items-center my-1 cursor-pointer bg-white '
  return (
    <div className='text-right  md:ml-3  flex flex-col md:w-[25%]   ' >
      
        <div className='border-2 w-[100%] h-40 flex flex-col items-center  bg-white '>
            <div className='h-[100%] w-[100%] flex justify-center items-center  flex-col'>
            <div className='w-[100px]  h-[100px] flex justify-center items-center  border-2 rounded-full bg-white'>
              {user?.data.profileImg ?
            <img src={user.data.profileImg} alt="" />  :
            <div className='text-4xl'>{user?.data?.email}</div>
            }
            </div>
           </div> 
        </div>
       
        <div className='   md:flex flex-col '>
        <div onClick={()=>handleSideBar('/personal-info ', '/userProfile/userprofile/profile-info')} className={style}><div>מידע אישי</div>< BsFillPersonBadgeFill size={25} className='ml-2'/> </div>        
        <div onClick={()=>handleSideBar('/changepassword ', '/userProfile/userprofile/changepassword')} className={style}><div >החלפת סיסמא</div>< AiOutlineLock size={25} className='ml-2'/> </div>
        {/* <div onClick={()=>{handleSideBar('/address ', '/userProfile/userprofile/address')}} className={style}><div >כתובת שלי</div><IoHomeOutline size={25} className='ml-2'/> </div> */}
        <div onClick={()=>{handleSideBar('/payment ', '/userProfile/userprofile/payment')}} className={style}><div >נתוני תשלום</div>< BsCreditCard2Front size={25} className='ml-2'/> </div>
        <div onClick={()=>{handleSideBar('/order ', '/userProfile/userprofile/order')}}  className={style}><div >ההזמנות שלי</div>< BsBoxSeam size={25} className='ml-2'/> </div>

        <div  className={style} onClick={()=>logOut()}><div>התנתקות</div>< CiLogin size={25} className='ml-2'/> </div>
        </div>
     
      
        
        
    </div>
  )
}
