import React from 'react'

export default function HeaderStore(props) {
  return (
    <div>
    <header className="p-20" style={{  
  backgroundImage: `url(${props.image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <h1 className="text-white  text-2xl text-center">
       {props.name}
      </h1>
    </header>
    <div className="flex justify-center p-10">
      <p className=" text-2xl">רשימת חנויות ב{props.name}</p>
    </div>
  </div>
  )
}



