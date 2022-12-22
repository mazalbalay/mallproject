import React from 'react'

export default function DepartmentComp(props) {
  return (
    <div className=" flex justify-center w-72 h-72 m-1 " style={{  
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
<div className="flex  self-end  h-24 bg-slate-200	w-full opacity-90"><p className="m-auto text-2xl">{props.text}</p></div>
    </div>
  )
}