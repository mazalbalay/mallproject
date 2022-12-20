import React from 'react'
import Sidebar from './Sidebar'
import PersonalInfo from './PersonalInfo'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
=======
>>>>>>> origin
import ChangePWD from './ChangePWD'
import { useState } from 'react';

export default function UserProfile() {
  const [showPage,setShowPage] = useState('personalInfo')
<<<<<<< HEAD
  return (
    <div className='bg-gray-200 flex justify-center mt-2 border-slate-200 border-t-2'>
        <Link to={'/changepassword'}>gnv</Link>
      {showPage === 'personalInfo' &&  <PersonalInfo  /> }
      {showPage === 'changePassword' &&  <ChangePWD  /> }
=======
  console.log(showPage);
  return (
    <div className='bg-gray-200 h-screen  md:flex-row flex-col-reverse flex  justify-center border-slate-200 border-t-2'>
      <div className='md:w-[38%] w-[100%] h-[80%] flex md:flex-row flex-col '>
      {showPage === 'personalInfo' &&  <PersonalInfo  /> }
      {showPage === 'changePassword' &&  <ChangePWD  /> }
      </div>

>>>>>>> origin
        <Sidebar setShowPage={setShowPage} />
     
       
    </div>
  )
}

 