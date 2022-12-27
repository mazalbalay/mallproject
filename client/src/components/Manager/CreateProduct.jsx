import React, { useState, useEffect } from "react";
import { createProduct, getProducts } from "./ApiCalls/products";
import FileBase64 from "react-file-base64";
import Nav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";


export default function CreateProduct ()  {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [productColors, setProductColors] = useState([]);
  const [productBrand, setProductBrand] = useState("");
  const [productDepartment, setProductDepartment] = useState("");
  const [productStoreName, setProductStoreName] = useState("");
  const [productSection, setProductSection] = useState("");
  const [productModel, setProductModel] = useState();
  const [productImage, setProductImage] = useState("");
  const [product, setProduct] = useState([]);

  const newProduct = {
    name: productName,
    price: productPrice,
    quantity: productQty,
    description: productDescription,
    size: productSizes,
    color: productColors,
    brand: productBrand,
    department: productDepartment,
    storeName: productStoreName,
    section: productSection,
    model: productModel,
    image: productImage,

  }

  async function createAndLoadPage() {
    let createNewProduct = await createProduct(newProduct);
    setProduct([createNewProduct.data]);
    console.log(createNewProduct);
  }

  console.log(product);
  return (
    <>
   
      <div className=" rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
        <form className="w-full bg-white shadow-md rounded ">
          <div className="bg-sky-300">
            <p className="mx-auto text-center p-4 text-xl text-white		">
              יצירת מוצר
            </p>
          </div>
          <div className="w-12/12">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="name"
            >
              שם מוצר
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="שם מוצר"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="price"
            >
              מחיר
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="מחיר"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="qty"
            >
              כמות במלאי
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductQty(e.target.value)}
              type="number"
              placeholder="כמות במלאי"
            />
          </div>
          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="price"
            >
              תיאור מוצר
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductDescription(e.target.value)}
              type="text"
              placeholder="תיאור מוצר"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="colors"
            >
              צבעים
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductColors(e.target.value)}
              type="text"
              placeholder="צבעים"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="sizes"
            >
              מידות
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductSizes(e.target.value)}
              type="text"
              placeholder="מידות"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="brand"
            >
              מותג
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductBrand(e.target.value)}
              type="text"
              placeholder="מותג"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="department"
            >
              מחלקה
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductDepartment(e.target.value)}
              type="text"
              placeholder="מחלקה"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="section"
            >
              סעיף
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductSection(e.target.value)}
              type="text"
              placeholder="סעיף"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="storeName"
            >
              שם חנות
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductStoreName(e.target.value)}
              type="text"
              placeholder="שם חנות"
            />
          </div>

          <div className="w-12/12  ">
            <label
              className="w-12/12 float-right py-6 font-bold"
              htmlFor="model"
            >
              מודל
            </label>
            <input
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              onChange={(e) => setProductModel(e.target.value)}
              type="text"
              placeholder="מודל"
            />
          </div>

          
          <div className="w-full grid grid-cols-1 text-right pt-10">
          <label
              className=" py-6 font-bold"
              htmlFor="image"
            >
              תמונה
            </label>
            <FileBase64
              className="w-full text-right rounded-sm border border-gray-300 shadow-lg py-2 px-4"
              type="file"
              onDone={({ base64 }) =>
                setProductImage({ ...productImage, image: base64 })
              }
              placeholder={"בחירת קובץ"}
            />
          </div>
       
          <div className="flex items-center justify-center py-10">
            <button
              className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
              type="button"
              onClick={() =>
                createAndLoadPage()
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
