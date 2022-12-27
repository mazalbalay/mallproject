import React, { useState, useEffect } from "react";
import { deleteProduct, editProduct, getProduct } from "./ApiCalls/products";
import FileBase64 from "react-file-base64";
import Nav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";
import { useParams } from "react-router-dom";


export default function CreateProduct ()  {
  const {productId} = useParams();

const [product, setProduct] = useState([]);
const [productName, setProductName] = useState("");
const [productPrice, setProductPrice] = useState("");
const [productQty, setProductQty] = useState("");
const [productDescription, setProductDescription] = useState("");
const [productSizes, setProductSizes] = useState([]);
const [productColors, setProductColors] = useState([]);
const [productBrand, setProductBrand] = useState();
const [productDepartment, setProductDepartment] = useState();
const [productStoreName, setProductStoreName] = useState();
const [productSection, setProductSection] = useState();
const [productModel, setProductModel] = useState();
const [productImage, setProductImage] = useState("");

useEffect(() => {
  const getProductData = async () => {
    const result = await getProduct(productId);
    setProduct([result.data]);
  };
getProductData();
}, [productId]);


  const editedProduct = {
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

  async function editAndLoadPage() {
    let editProduct = await editProduct(productId, editedProduct);
    setProduct(editProduct.data);
    console.log(editProduct);
  }

  async function deleteAndLoadPage() {
    await deleteProduct(productId);
  }

  console.log(product);
  return (
    <>
   
      <div className=" rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
        <form className="w-full bg-white shadow-md rounded ">
          <div className="bg-sky-300">
            <p className="mx-auto text-center p-4 text-xl text-white		">
              עידכון מוצר
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
       
          <div className="flex items-center justify-evenly p-4">
          <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={() => editAndLoadPage()}
          >
            עידכון מוצר
          </button>
          {product[0] === null ? (
            <div className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline">
            מוצר נמחק
            </div>
          ) : (
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
              onClick={() => deleteAndLoadPage(productId)}
            >
              מחיקת מוצר
            </button>
          )}
        </div>
        </form>
      </div>
    </>
  );
}
