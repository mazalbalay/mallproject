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
<div class="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      
        
      <form class="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
       <p class="mx-auto text-center p-4 text-xl text-white		" >יצירת חנות</p>
       </div>
        <div class="mb-4 p-4">
          <label class="block text-gray-700 pb-2 text-sm font-bold mb-2 " for="name">
            שם חנות
          </label>
          <input
            // class="shadow appearance-none border text-end rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"

            id="DepName"
          onChange={(e) => setStoreName(e.target.value)}
type="text"
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
          onDone={({ base64 }) => setStoreImage({ ...StoreImage,image :  base64})}
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
            id="DepDesc"
            type="text"
            onChange={(e) => setStoreDesc(e.target.value)}
            placeholder="תיאור חנות"
          />
        </div>

        <div class="flex items-center justify-center p-4">
          <button
            class="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={()=>createStore(StoreName,StoreImage.base64,StoreDesc)}
          >
            יצירת חנות
          </button>
        </div>
      </form>
   
    </div>

  )
}







// <div className="w-full max-w-xs m-auto ">
//     <p className="mx-auto m-10 text-xl		" >Create Store</p>
     
//    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  
//      <div className="mb-4">
//        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//          department name
//        </label>
//        <input
//          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//          id="DepName"
//          onChange={(e) => setStoreName(e.target.value)}
//          type="text"
//          placeholder="department name"
//        />
//      </div>
//      <div className="mb-4">
//        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//          department image
//        </label>
//        <FileBase64
//              type="file"
//              multiple={false}
//              onDone={({ base64 }) => setStoreImage({ ...StoreImage,image :  base64})}
//            />
//      </div>
//      <div className="mb-4">
//        <label className="block text-gray-700 text-sm font-bold mb-2"
//          htmlFor="description">
//          department description
//        </label>
//        <input
//          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//          id="DepDesc"
//          onChange={(e) => setStoreDesc(e.target.value)}
//          type="text"
//          placeholder="department description"
//        />
//      </div>

//      <div className="flex items-center justify-between">
//        <button
//          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//          type="button"
//          onClick={()=>createStore(StoreName,StoreImage.base64,StoreDesc)}
//        >
//          create Department
//        </button>
//      </div>
//    </form>
  
//  </div>