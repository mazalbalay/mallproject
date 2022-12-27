import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import ProductComp from "./ProductComp";
import { getProducts } from "./ApiCalls/products";
import { getStores } from "../ApiCalls/Store";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const {storeName} = useParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    async function getProductsData() {
      const response = await getProducts();
      console.log(response.data);
      setProducts(response.data);
    }
    getProductsData();
  }, []);

  return (
    <div className="flex-col text-center w-full p-20">
    <div className="m-auto ">
      <button
        className=" w-5/12 bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
        type="button"
        onClick={() => navigateTo(`${"/manager/products/new"}`)}
      >
        + הוסף מוצר
      </button>
      <div className=" flex flex-wrap justify-around">
      <p className=" m-10 mt-7 w-7/12 bg-sky-300  text-white font-bold py-2 px-4 rounded  ">נא לחץ על מוצר כדי לשנות\למחוק</p>
      
          <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
            {products.map((product) => (
                product.storeName === storeName ?
                <div
           
                key={product._id}
                onClick={() =>
                  navigateTo(`${`/manager/products/edit/${product._id}`}`)
                }
              >
                 <ProductComp  className="container mx-auto" product={product}/> 
                 </div> : null
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductsScreen;

