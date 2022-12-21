import React, {useState,useEffect} from "react";
import {createStore,getStores} from '../ApiCalls/Store';
import FileBase64 from 'react-file-base64';

export default function CreateStore() {
  const [StoreName, setStoreName] = useState();
  const [StoreImage, setStoreImage] = useState();
  const [StoreDesc, setStoreDesc] = useState();
  const [Stores, setStores] = useState([]);
  useEffect(() => {
    const getStoresData = async () =>{
      const result = await getStores();
      setStores(result.data);
    }
    getStoresData();
  },[]);


console.log(Stores);
  return (
    <div className="w-full max-w-xs m-auto ">
    <p className="mx-auto m-10 text-xl		" >Create Store</p>
     
   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
         department name
       </label>
       <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="DepName"
         onChange={(e) => setStoreName(e.target.value)}
         type="text"
         placeholder="department name"
       />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
         department image
       </label>
       <FileBase64
             type="file"
             multiple={false}
             onDone={({ base64 }) => setStoreImage({ ...StoreImage,image :  base64})}
           />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2"
         htmlFor="description">
         department description
       </label>
       <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="DepDesc"
         onChange={(e) => setStoreDesc(e.target.value)}
         type="text"
         placeholder="department description"
       />
     </div>

     <div className="flex items-center justify-between">
       <button
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         type="button"
         onClick={()=>createStore(StoreName,StoreImage.base64,StoreDesc)}
       >
         create Department
       </button>
     </div>
   </form>
  
 </div>
  )
}
