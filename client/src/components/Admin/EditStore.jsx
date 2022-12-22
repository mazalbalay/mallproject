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


<div class="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      
        
      <form class="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
       <p class="mx-auto text-center p-4 text-xl text-white		" >עידכון חנות</p>
       </div>
        <div class="mb-4 p-4">
          <label class="block text-gray-700 pb-2 text-sm font-bold mb-2 " for="name">
            שם חנות
          </label>
          <input
            // class="shadow appearance-none border text-end rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"

            id="StoreName"
            onChange={(e) => setStoreName(e.target.value)}type="text"
            placeholder="שם חנות"
          />
        </div>
        <div class="mb-4 p-4">
          
          <label
          class="block text-gray-700 pb-2 text-sm font-bold mb-2 "
          for="image"
          >
            תמונת חנות
          </label>
        
        {/* <div className="flex justify-center w-full"> */}
          <FileBase64
          class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
          type="file"
          onDone={({ base64 }) => setDepImage({ ...StoreImage,image :  base64})}
            placeholder={"בחירת קובץ"}
          />
        {/* </div> */}
      </div>
        <div class="mb-4 p-4">
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
            תיאור חנות
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="storeDesc"
            type="text"
     onChange={(e) => setstoreDesc(e.target.value)}
            placeholder="תיאור חנות"
          />
        </div>

        <div class="flex items-center justify-center p-4">
          <button
            class="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={()=>editAndLoadPage()}
          >
            עידכון חנות
          </button>
        </div>
      </form>

       {Store[0]===null?<div>store deleted</div>:<button             class="bg-red-700 hover:bg-red-800 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
 onClick={()=>deleteAndLoadPage(storeId)}>Delete Store</button>}
{Store[0]===null?null:<DepartmentComp img={Store.image} text={Store.name}/>}
    
    </div>

  )
}


// <div>
// <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//      Store name
//    </label>
//    <input
//      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//      id="StoreName"
//      onChange={(e) => setStoreName(e.target.value)}
//      type="text"
//      placeholder="Store name"
//    />
//  </div>
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//      Store image
//    </label>
//    <FileBase64
//          type="file"
//          multiple={false}
//          onDone={({ base64 }) => setDepImage({ ...StoreImage,image :  base64})}
//        />
//  </div>
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2"
//      htmlFor="description">
//      Store description
//    </label>
//    <input
//      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//      id="storeDesc"
//      onChange={(e) => setstoreDesc(e.target.value)}
//      type="text"
//      placeholder="Store description"
//    />
//  </div>

//  <div className="flex items-center justify-between">
//    <button
//      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//      type="button"
//      onClick={()=>editAndLoadPage()}
   
//    >
//      create Store
//    </button>
//  </div>
// </form>

// {Store[0]===null?<div>store deleted</div>:<button onClick={()=>deleteAndLoadPage(storeId)}>Delete Store</button>}
// {Store[0]===null?null:<DepartmentComp img={Store.image} text={Store.name}/>}

// </div>