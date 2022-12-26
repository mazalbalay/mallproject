import React, { useState, useEffect } from "react";
import {
  createProduct,
  getProducts,
  editProduct,
} from "../Manager/ApiCalls/products";
import FileBase64 from "react-file-base64";
import { useParams } from "react-router-dom";

export default function CreateStore() {
  let { productId } = useParams();
  const [ProductName, setProductName] = useState();
  const [ProductImage, setProductImage] = useState();
  const [ProductPrice, setProductprice] = useState();
  const [ProductBrand, setProductBrand] = useState();
  const [ProductDesc, setProductDesc] = useState();
  const [ProductdDepartment, setProductDepartment] = useState();
  const [ProductdSection, setProductsection] = useState();
  const [ProductdSize, setProductSize] = useState();
  const [ProductdColor, setProductColor] = useState();
  const [ProductdModel, setProductModel] = useState();
  const [ProductdStoreName, setProductStoreName] = useState();

  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const getProductData = async () => {
      const result = await getProducts();
      setProduct(result.data);
    };
    getProductData();
  }, []);

  async function editAndLoadPage() {
    await editProduct(
      productId,
      ProductName,
      ProductImage.image,
      ProductPrice,
      ProductBrand,
      ProductDesc,
      ProductdDepartment,
      ProductdSection,
      ProductdSize,
      ProductdColor,
      ProductdModel,
      ProductdStoreName
    );
    alert("מחלקה עודכנה");
  }

  console.log(Product);
  return (
    <div className=" rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p className="mx-auto text-center p-4 text-xl text-white">עריכת מוצר</p>
        </div>
        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="DepName"
          >
            שם מוצר
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductName"
            onChange={(e) => setProductName (e.target.value)}
            type="text"
            placeholder="שם מוצר"
          />
        </div>

<div className="mb-4 p-4">
          <label className="block text-gray-700 pb-2  font-bold mb-2 " for="image">
            תמונת מוצר
          </label>

          <div className="flex justify-center w-full">
            <FileBase64
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="file"
              onDone={({ base64 }) =>
                setProductImage({ ...ProductImage, image: base64 })
              }
              placeholder={"בחירת קובץ"}
            />
          </div>
        </div>


        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="description "
          >
            תיאור מוצר
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="DepDesc"
            type="text"
            onChange={(e) => setProductDesc(e.target.value)}
            placeholder="תיאור מוצר"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700  font-bold mb-2  text-xl pb-2"
            for="ProductDepartment "
          >
            מחלקה
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductDepartment"
            type="text"
            onChange={(e) => setProductDepartment(e.target.value)}
            placeholder=" מותג"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="ProductdSection "
          >
            סעיף
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductdSection"
            type="text"
            onChange={(e) => setProductsection(e.target.value)}
            placeholder=" סעיף"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="ProductdSize "
          >
            מידות
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductdSize"
            type="text"
            onChange={(e) => setProductSize(e.target.value)}
            placeholder=" מחלקה"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="ProductdColor "
          >
            מידות
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductdColor"
            type="text"
            onChange={(e) => setProductColor(e.target.value)}
            placeholder=" מחלקה"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="ProductdModel "
          >
            מודל
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductdModel"
            type="text"
            onChange={(e) => setProductModel(e.target.value)}
            placeholder=" מחלקה"
          />
        </div>

        <div className="mb-4 p-4">
          <label
            className="block text-gray-700 font-bold mb-2  text-xl pb-2"
            for="ProductStoreName "
          >
            חנות
          </label>
          <input
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            id="ProductStoreName"
            type="text"
            onChange={(e) => setProductStoreName(e.target.value)}
            placeholder=" מחלקה"
          />
        </div>

        
        
        <div className="flex items-center justify-center p-4">
          <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={()=>editAndLoadPage( productId,
              ProductName,
              ProductImage.image,
              ProductPrice,
              ProductBrand,
              ProductDesc,
              ProductdDepartment,
              ProductdSection,
              ProductdSize,
              ProductdColor,
              ProductdModel,
              ProductdStoreName)}
          >
            עידכון מוצר
          </button>
        </div>
      </form>
    </div>
  );
}
