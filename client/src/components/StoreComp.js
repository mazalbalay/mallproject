import React from 'react'
import { FiX } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
const StoreComp = () => {
  return (
      <div>
    <header className="p-20 bg-[url('https://a7.org/pictures/000/979372.jpg')]">
         <h1 className="text-white  text-2xl text-center">קטגוריה ירקות טריים</h1>
        </header>
        <div className='flex justify-center p-10'>

        <p className=' text-2xl'>רשימת חנויות בקטגוריה</p>
        </div>
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
      
    <div className='border w-5/12 p-2 flex justify-center'>
    <div className='flex '>
        <div className='border flex items-end'>
            <button className='bg-green-300 p-2 rounded text-white font-bold'>קנה בחנות זו</button>
        </div>
        <div className='flex border text-end'>
            <ul className=''>
                <li className='font-bold'>חוות הבית</li>
                <li>(38 חוות דעת) * * * * * </li>
                <li>חנות ירקות חוות הבית במודיעין-מכבים-רעות מגישה</li>
                <li className='flex justify-end'><span>עמק זבולון 3, מודיעין אזור המרכז</span><img className='w-10' src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4848169/extra_large/06b445902adeec3905b20c44116d6652.jpg"  alt=''/></li>
            </ul>
        </div>
        <div className='w-40'>
            <img className='' src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4848169/extra_large/06b445902adeec3905b20c44116d6652.jpg"  alt=''/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default StoreComp