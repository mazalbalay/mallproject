import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams ,useNavigate} from 'react-router-dom';
import Product from './ProductComp';
import { getProducts} from './ApiCalls/products';


const ProductsScreen = () => {

    const [products, setproducts] = useState([]);
    let { StoreName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      async function getData() {
        const response = await getProducts();
        const filter = response.data.filter((store) => store.storeName === StoreName);
        setproducts(filter);
      }
      getData();
    }, []);
  console.log(products);
  return (
    <div>
        <div>
            <h2>Products</h2>
            <div>
                <Link to="/addProduct">
                    Create new
                </Link>
            </div>
        </div>
        <div>
            {/* <header>
                <div>
                    <div>
                        <input type="search"
                        placeholder="Search..."/>
                    </div>

                    <div>
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
                </div>
            </header> */}

            <div>
                <div> {products.map((product) => (
            <div
              key={product._id}
              onClick={() =>
                navigate(`${`/manager/product/edit/${product.name}`}`)
              }
            >
              <Product image={product.image} name={product.name} desc={product.description} price={product.price} />
            </div>
          ))}
                    {/* {products.map((product) =>(
                        <Product key={product._id}  product={product} />
                 ))} */}
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
  )
}

export default ProductsScreen;