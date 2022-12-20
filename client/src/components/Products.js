import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CheckOutNav from "./CheckOutNav";

const API_URL = "https://fakestoreapi.com/products";

const Products = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setData(response.data);
    }
    getData();
  }, []);

  return (
    <>
    <CheckOutNav/>
      <div>
        <div className="container mx-auto mb-5 mt-20 py-5">
            <h1 className="text-center font-semibold  text-5xl mb-10 ">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.map((product) => {
              return (
                <div className="my-3 text-center" key={product.id}>
                  <div className="bg-slate-200 rounded-lg shadow-lg">
                    <img
                      src={product.image}
                      className="h-60 p-4"
                      alt={product.title}
                     
                    />
                    <div>
                      <h5>
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p>${product.price}</p>
                      <NavLink to={`/products/${product.id}`}>
                        <button className="bg-sky-500 p-3 border border-slate-700 rounded-md">Buy Now</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
