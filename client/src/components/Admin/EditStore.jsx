import React,{useState,useEffect} from 'react'
import DepartmentComp from './DepartmentComp'
import {editStore,getStore, deleteStore} from '../ApiCalls/Store'
import {useParams } from 'react-router-dom';
import FileBase64 from "react-file-base64";

export default function EditStore() {
    let { storeId } = useParams();
    const [Store, setStore] = useState([]);
    const [StoreName, setStoreName] = useState();
    const [StoreImage, setDepImage] = useState();
    const [storeDesc, setstoreDesc] = useState();
      useEffect(() => {
          const getStoreData = async () =>{
            const result = await getStore(storeId);
            setStore([result.data]);
          }
          getStoreData();
        },[storeId]);
        function editAndLoadPage () {
          editStore(storeId,StoreName,StoreImage.base64,storeDesc)
          window.location.reload();
        }
        function deleteAndLoadPage () {
          deleteStore(storeId)
          window.location.reload();
        }
        console.log(Store);
        console.log(StoreImage);
        console.log(storeDesc);
  return (
    <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     
     <div class="mb-4">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
         Store name
       </label>
       <input
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="StoreName"
         onChange={(e) => setStoreName(e.target.value)}
         type="text"
         placeholder="Store name"
       />
     </div>
     <div class="mb-4">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
         Store image
       </label>
       <FileBase64
             type="file"
             multiple={false}
             onDone={({ base64 }) => setDepImage({ ...StoreImage,image :  base64})}
           />
     </div>
     <div class="mb-4">
       <label class="block text-gray-700 text-sm font-bold mb-2"
         for="description">
         Store description
       </label>
       <input
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="storeDesc"
         onChange={(e) => setstoreDesc(e.target.value)}
         type="text"
         placeholder="Store description"
       />
     </div>

     <div class="flex items-center justify-between">
       <button
         class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         type="button"
         onClick={()=>editAndLoadPage()}
       
       >
         create Store
       </button>
     </div>
   </form>
   
  {Store[0]===null?<div>store deleted</div>:<button onClick={()=>deleteAndLoadPage(storeId)}>Delete Store</button>}
  {Store[0]===null?null:<DepartmentComp img={Store.image} text={Store.name}/>}

    </div>
  )
}