import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function StoreComp(props) {
  const store = props.store;
  const navigate = useNavigate();
  return (
    <div key={props._id} className="flex justify-center w-96 h-72 m-3" style={{  
        backgroundImage: `url(${store.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} onClick={() => navigate(`/${store.name}`)}>
<div className="flex  self-end  h-20 bg-slate-200	w-full opacity-80"><p className="m-auto">{store.name}</p></div>
    </div>
  )
}