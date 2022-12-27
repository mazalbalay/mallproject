import React, { useState, useEffect } from "react";
import { createProduct, getProducts } from "./ApiCalls/products";
import FileBase64 from "react-file-base64";
import Nav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";


export default function CreateProduct ()  {
  const [ProductName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [ProductBrand, setProductBrand] = useState("");
  const [ProductQty, setProductQty] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const [ProductSizes, setProductSizes] = useState([]);
  const [ProductColors, setProductColors] = useState([]);
  const [ProductDepartment, setProductDepartment] = useState("");
  const [ProductStoreName, setProductStoreName] = useState("");
  const [ProductSection, setProductSection] = useState("");
  const [ProductModel, setProductModel] = useState();
  const [Product, setProduct] = useState([]);

  // useEffect(() => {
  //   const getProductData = async () => {
  //     const result = await getProducts();
  //     setProduct(result.data);
  //   };
  //   getProductData();
  // }, []);

  console.log(Product);
  return (
    <>
   
      <div className=" rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
        <form className="w-full bg-white shadow-md rounded ">
          <div className="bg-sky-300">
            <p className="mx-auto text-center p-4 text-xl text-white		">
              יצירת מוצר
            </p>
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 pb-2 font-bold mb-2 text-right"
              htmlFor="name"
            >
              שם מוצר
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="DepName"
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="שם מוצר"
            />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  pb-2"
              for="description "
            >
              תיאור מוצר
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="DepDesc"
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="תיאור מוצר"
            />
          </div>  
           <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  text-xl pb-2"
              for="description "
            >
             כמות במלאי
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="DepDesc"
              type="text"
              onChange={(e) => setProductQty(e.target.value)}
              placeholder="כמות במלאי"
              />
          </div>  
          
             <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  text-xl pb-2"
              for="quantity "
            >
             כמות במלאי
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="text"
              onChange={(e) => setProductQty(e.target.value)}
              placeholder="כמות במלאי"
              />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  text-xl pb-2"
              for="מידות "
            >
             מידות
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="text"
              onChange={(e) => setProductSizes(e.target.value)}
              placeholder="כמות במלאי"
              />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  text-xl pb-2"
              for="brand "
            >
            מותג
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="text"
              onChange={(e) => setProductBrand(e.target.value)}
              placeholder=" מותג"
            />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700  font-bold mb-2  text-xl pb-2"
              for="description "
            >
              סעיף
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="DepDesc"
              type="text"
              onChange={(e) => setProductSection(e.target.value)}
              placeholder=" סעיף"
            />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 font-bold mb-2  text-xl pb-2"
              for="department "
            >
              מחלקה
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="DepDesc"
              type="text"
              onChange={(e) => setProductDepartment(e.target.value)}
              placeholder=" מחלקה"
            />
          </div>

          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
              for="image"
            >
              תמונת מוצר
            </label>

            <FileBase64
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="file"
              onDone={({ base64 }) =>
                setProductImage({ ...ProductImage, image: base64 })
              }
              placeholder={"בחירת קובץ"}
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <button
              className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
              type="button"
              onClick={() =>
                createProduct(ProductName, ProductImage.base64, productPrice, ProductDescription, ProductSection, ProductBrand, ProductColors, ProductModel, ProductQty, ProductSizes, ProductStoreName)
              }
            >
              יצירת מוצר
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
