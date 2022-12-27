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
    <div>
      <div>
        <div className="flex justify-between container mx-auto mb-20">
          <div className=" bg-sky-600 p-3 rounded-md text-white font-semibold">
            <Link to="/addProduct"> Create new </Link>
          </div>
          <h2 className="text-4xl font-semibold"> Products </h2>
          <div className="rounded-md ring ring-gray-300 shadow pt-3">
            <input
              className="text-right font-medium"
              type="search"
              placeholder="...חפש מוצר"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 container mx-auto">
      
            {products.map((product) => (
                product.storeName === storeName ?
                <div
                key={product._id}
                onClick={() =>
                  navigateTo(`${`/manager/products/edit/${product._id}`}`)
                }
              >
                 <ProductComp product={product}/> 
                 </div> : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;

