import React from 'react'

export default function DepartmentComp(props) {
  return (
    <div class=" flex justify-center w-64 h-56 m-5" style={{  
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
<div class="flex  self-end  h-20 bg-slate-200	w-full opacity-80"><p class="m-auto">{props.text}</p></div>
    </div>
  )
}