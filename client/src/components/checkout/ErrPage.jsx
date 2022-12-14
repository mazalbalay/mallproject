import React from 'react'
import {MdOutlineError} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

export default function ErrPage() {
    const navigetor = useNavigate()
  return (
    <div className=" w-full md:w-2/3 p-10 flex flex-col items-center justify-between bg-white my-1">
      <div className="md:w-2/3 w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly">
          <MdOutlineError className="text-cyan-600 text-5xl" />
          <h1 className="text-4xl">משהו ישתבש</h1>
          <p className="text-2xl text-center">תשלום לא התבצע אנא צור קשר עם חברת האשראי</p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly border-t-2">
          <button
          onClick={()=>{
            navigetor("/")
          }}
          className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 md:w-1/3 w-full">
            המשך לאתר
          </button>
        </div>
      </div>
    </div>
  )
}
