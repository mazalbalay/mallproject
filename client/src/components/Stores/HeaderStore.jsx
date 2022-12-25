import React from 'react'

export default function HeaderStore(props) {
  return (
    <div>
    <header className="p-20 bg-[url('https://a7.org/pictures/000/979372.jpg')]">
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



