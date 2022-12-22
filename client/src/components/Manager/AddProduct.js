import React, {useState,useEffect} from "react";
import {createProduct,getProducts} from '../Manager/ApiCalls/products';
import FileBase64 from 'react-file-base64';

export default function CreateStore() {
  const [ProductName, setProductName] = useState();
  const [ProductImage, setProductImage] = useState();
  const [ProductDesq, setProductDesq] = useState();
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const getProductData = async () =>{
      const result = await getProducts();
      setProduct(result.data);
    }
    getProductData();
  },[]);


console.log(Product);
  return (
<div class="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      
        
      <form class="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
       <p class="mx-auto text-center p-4 text-xl text-white		" >יצירת מוצר</p>
       </div>
        <div class="mb-4 p-4">
          <label class="block text-gray-700 pb-2 text-sm font-bold mb-2 " for="name">
            שם מוצר
          </label>
          <input
            // class="shadow appearance-none border text-end rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"

            id="DepName"
          onChange={(e) => setProductName(e.target.value)}
type="text"
            placeholder="שם מוצר"
          />
        </div>
       
        <div class="mb-4 p-4">
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
            תיאור מוצר
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setProductDesq(e.target.value)}
            placeholder="תיאור מוצר"
          />
        </div>

        <div class="mb-4 p-4">
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
             מותג
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setProductDesq(e.target.value)}
            placeholder=" מותג"
          />
        </div>

        <div class="mb-4 p-4">
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
             סעיף
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setProductDesq(e.target.value)}
            placeholder=" סעיף"
          />
        </div>

        <div class="mb-4 p-4">
          <label class="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
            for="description ">
             מחלקה
          </label>
          <input
            class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setProductDesq(e.target.value)}
            placeholder=" מחלקה"
          />
        </div>

        <div class="mb-4 p-4">
          
          <label
          class="block text-gray-700 pb-2 text-sm font-bold mb-2 "
          for="image"
          >
            תמונת מוצר
          </label>
        
        {/* <div className="flex justify-center w-full"> */}
          <FileBase64
          class="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
          type="file"
          onDone={({ base64 }) => setProductImage({ ...ProductImage,image :  base64})}
            placeholder={"בחירת קובץ"}
          />
        {/* </div> */}
      </div>

        <div class="flex items-center justify-center p-4">
          <button
            class="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={()=>createProduct(ProductName,ProductImage.base64,ProductDesq)}
          >
            יצירת מוצר
          </button>
        </div>
      </form>
   
    </div>

  )
}
