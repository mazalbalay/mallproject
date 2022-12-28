import React from 'react'
import Sidebar from './Sidebar'
import PersonalInfo from './PersonalInfo'
import ChangePWD from './ChangePWD'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Order from './Order';
import Address from './Address';
import Payment from './Payment';


export default function UserProfile() {
  
  return (
    <div className='bg-[#EEEEEE] flex justify-center'>
      <div className=' md:flex-row-reverse flex-col flex md:py-2 justify-center border-slate-200 border-t-2 w-[90%] md:w-[70%]'>
        <Sidebar  />
     <Routes >
      <Route path='userprofile/profile-info' element={<PersonalInfo/>} />
      <Route path="userprofile/changepassword" element={<ChangePWD />} />
      <Route path="userprofile/order" element={<Order />} />
      <Route path="userprofile/payment" element={<Payment/>} />
      <Route path="userprofile/address" element={<Address/>} />
     </Routes>
       </div>
    </div>
  )
}

 