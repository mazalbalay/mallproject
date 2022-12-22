import React from 'react'

export default function StoreComp(props) {
  return (
    <div className=" flex justify-center w-64 h-56 m-5" style={{  
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
<div className="flex  self-end  h-20 bg-slate-200	w-full opacity-80"><p className="m-auto">{props.text}</p></div>
    </div>
  )
}