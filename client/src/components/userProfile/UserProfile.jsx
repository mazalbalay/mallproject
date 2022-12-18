import React from 'react'
import Sidebar from './Sidebar'
import PersonalInfo from './PersonalInfo'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChangePWD from './ChangePWD'
import { useState } from 'react';

export default function UserProfile() {
  const [showPage,setShowPage] = useState('personalInfo')
  return (
    <div className='bg-gray-200 flex justify-center mt-2 border-slate-200 border-t-2'>
        <Link to={'/changepassword'}>gnv</Link>
      {showPage === 'personalInfo' &&  <PersonalInfo  /> }
      {showPage === 'changePassword' &&  <ChangePWD  /> }
        <Sidebar setShowPage={setShowPage} />
     
       
    </div>
  )
}

 