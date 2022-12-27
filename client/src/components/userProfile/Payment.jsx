import React from 'react'
import { usersUpdate } from '../../api/api'

export default function Payment() {


  const user = JSON.parse(localStorage.getItem(("user"))).data

  return (
    <div className='w-[100%]  md:w-[70%]  pt-10 flex flex-col text-right py-5 px-10  bg-white items-end '>
     <h1 className='text-2xl mb-5'>נתוני התשלום שלי</h1>

     {user?.saveCards ? 
     user?.saveCards.map(u =>(
      <div className='border-2 border-black p-3 flex flex-col justify-end'>
      <span className='border-b-2  p-2'>מספר כרטיס: {u?.cardNumber}</span>
      <span className='border-b-2  p-2'>תוקף: {u?.cardValidity}</span>
      <span className='border-b-2  p-2'>גב הכרטיס: {u?.threeDigits}</span>
     </div>
     ))
     
     : <div>אין פרטי תשלום שמורים</div>}
  </div>
  )
}
