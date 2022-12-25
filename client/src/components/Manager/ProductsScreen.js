import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { deleteProduct, getProducts } from "./ApiCalls/products";

const ProductsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getProducts();
      console.log(response.data);
      setData(response.data);
    }
    getData();
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-between container mx-auto mb-20">
        <div className=" bg-sky-600 p-3 rounded-md text-white font-semibold">
          <Link to="/addProduct">Create new</Link>
        </div>
        <h2 className="text-4xl font-semibold">Products</h2>

          <div className="rounded-md ring ring-gray-300 shadow pt-3">
            <input className="text-right font-medium" type="search" placeholder="...חפש מוצר" />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 container mx-auto">
            {data.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          <nav>
            <ul>
              <li>
                <Link to="#">Previous</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
{
  /* <div>
                            <select>
                                <option>All categories</option>
                                <option>Electronic</option>
                                <option>Clothing</option>
                                <option>Something else</option>
                            </select>
                        </div>
    
                        <div>
                            <select>
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewd</option>
                            </select>
                        </div>
                    </div> */
}
