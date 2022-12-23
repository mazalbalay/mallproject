import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
import ProductPopUp from "./ProductPopUp";
import { useParams } from "react-router-dom";

export default function InStore() {
  const {name} = useParams()
 const[popUp, setPopUp] = useState(false)
 const [product, setProduct] = useState([])
 const allProduct = async () => {
  const {data} = await axios.get("http://localhost:8000/product")
  const filteredByName = data?.filter(store=>store.brand === name)
  setProduct(filteredByName)
 }
 useEffect(() => {
  allProduct()
 },[])
 const handleOneClose = () => setPopUp(false)
  return (
    <div>
        <header className="h-60 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lWPKOx3H_Z3dlImb1dZcYJrAtR4jigSTCA&usqp=CAU')]">
         <h1 className="text-white font-bold text-6xl text-center">נעליים</h1>
        </header>
      <div className="flex  flex-row-reverse items-center">
        <h1 className="text-2xl">:סנן תוצאות לפי</h1>
        <h5 className="text-cyan-500 underline">
          מודיעין
          <button>
            <FiX className="text-black" />
          </button>
        </h5>
        <h5 className="text-cyan-500 underline">
          נעליים
          <button>
            <FiX className="text-black" />
          </button>
        </h5>
      </div>
      <div className=" flex flex-row-reverse">
        <table className="table-auto flex-auto text-right">
          <thead>
            <tr>
              <th className="underline">סוגי מוצרים</th>
              <th className="underline">סוגי חנויות</th>
              <th className="underline"> יישובים</th>
              <th className="underline">אזורים</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-cyan-500">נעליים</td>
              <td className="text-cyan-500">נייק</td>
              <td className="text-cyan-500">אשדוד(32)</td>
              <td className="text-cyan-500">אזור המרכז(1223)</td>
            </tr>
            <tr>
              <td className="text-cyan-500">נעליים</td>
              <td className="text-cyan-500">נייק</td>
              <td className="text-cyan-500">תל אביב(21)</td>
              <td className="text-cyan-500">אזור השרון(849)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" flex flex-row-reverse">
         <AiFillShop className="text-2xl text-cyan-500 my-2"/>
         <h1 className="text-2xl">נמצאו</h1>
         <h1 className="text-2xl text-cyan-500">58</h1>
         <h1 className="text-2xl">מוצרים בחנות זו </h1>
      </div>
      <div className="w-full scroll-p-[24rem] px-4 bg-white">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-4 gap-8">
          {product?.map((res, i) =>{
            return(
              <div onClick={() => setPopUp(true)} className="w-full border flex  flex-col my-4  hover:scale-105 duration-300">
            <img
              className="w-80 h-60 mx-auto  bg-white"
              src={res.image}
              alt="Shoes"
            />
            <button onClick={() => setPopUp(true)} >למוצר</button>
            <h2 className="text-2xl font-bold text-center py-8">
              {res.name}
            </h2>
            
            <p className="text-gray text-end">{res.description}</p>
            <div className="flex text-start ml-44">
              <button>
                <FiPlusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
              <p>2</p>
              <button>
                <FiMinusCircle className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
              </button>
            </div>
            <p className="text-end">סה"כ: {res.price} ש'ח</p>
          </div>
            )
          })}
      
        </div>
      </div>
     <ProductPopUp product ={product} onClose={handleOneClose} visible={popUp}/>
    </div>
  );
}
