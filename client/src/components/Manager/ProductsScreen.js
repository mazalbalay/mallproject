import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";
import { getProducts } from "./ApiCalls/Products";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getProducts();
      console.log(response.data);
      setProducts(response.data);
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto w-10/12">
      <div className="flex justify-between my-10 py-3 shadow-md ">
        <h2 className="text-3xl font-semibold">Products</h2>
        <button className="bg-sky-600 p-3 rounded-md border border-sky-900 font-semibold">
          <Link to="/manager/products/addProduct">Create new</Link>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <header>
          <div className="flex justify-between shadow-md py-5">
            <div>
              <input
                type="search"
                placeholder="Search..."
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex">
              <div className="mx-4">
                <select className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-gray-400">
                  <option>All categories</option>
                  <option>Electronic</option>
                  <option>Clothing</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <select
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option>Latest added</option>
                  <option>Cheap first</option>
                  <option>Most viewd</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <div>
          <div className="flex">
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>

          <nav className="flex justify-end ">
            <ul className="flex justify-between w-3/12 font-semibold">
              <li className="border ring-gray-300  text-gray-700">
                <Link to="#"  className="px-3">Previous</Link>
              </li>
              
              <li className="border ring-gray-300 text-sky-700">
                <Link to="#"  className="px-3">1</Link>
              </li>
              
              <li className="border ring-gray-300 mr-0 text-sky-700"> 
                <Link to="#"  className="px-3">2</Link>
              </li>
              
              <li className="border ring-gray-300 text-sky-700">
                <Link to="#"  className="px-3">3</Link>
              </li>
              
              <li className="border ring-gray-300 text-sky-700">
                <Link to="#" className="px-3">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
