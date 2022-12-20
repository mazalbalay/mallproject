import React from 'react'
import Sidebar from './Sidebar'
import PersonalInfo from './PersonalInfo'
import ChangePWD from './ChangePWD'
import { useState } from 'react';

export default function UserProfile() {
  const [showPage,setShowPage] = useState('personalInfo')
  console.log(showPage);
  return (
    <div className='bg-gray-200 h-screen  md:flex-row flex-col-reverse flex  justify-center border-slate-200 border-t-2'>
      <div className='md:w-[38%] w-[100%] h-[80%] flex md:flex-row flex-col '>
      {showPage === 'personalInfo' &&  <PersonalInfo  /> }
      {showPage === 'changePassword' &&  <ChangePWD  /> }
      </div>

        <Sidebar setShowPage={setShowPage} />
     
       
    </div>
  )
}

 