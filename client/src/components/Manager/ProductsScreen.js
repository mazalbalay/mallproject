import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Product from './ProductComp';

const API_URL = "https://fakestoreapi.com/products";

const ProductsScreen = () => {

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
            <header>
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
            </header>

            <div>
                <div>
                    {data.map((product) =>(
                        <Product product={product} key={product.id}/>
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
  )
}

export default ProductsScreen