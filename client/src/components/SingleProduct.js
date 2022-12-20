import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { AddProduct } from "../Redux/action/cartActions";
import { Link, useParams } from "react-router-dom";
import CheckOutNav from "./CheckOutNav";



const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [qty, setqty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  
  async function getProduct() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(response.data);
     setProduct(response.data);
  }
  
  useEffect(() => {
    getProduct();
  }, []);
  
  const addItem = (product) =>{
    console.log(product);
    console.log(qty)
    dispatch(AddProduct(product , qty));
  }

  const handleDecresment=() =>{
   return qty > 1 ? setqty(prevQty => prevQty -1) : qty
  } 

  const handleIncresment=() =>{
   return qty < 10 ? setqty(prevQty => prevQty + 1) : qty;
  }

  return (
    <div className="container mx-auto my-5 py-5">
      <CheckOutNav/>
      <div>
        <div>
          <img src={product.image} alt={product.title} className="h-60"/>
        </div>
        
        <div>
          <h5>{product.category}</h5>
          <h4>{product.title}</h4>
          <p>{product.rating && product.rating.rate}</p>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <div>
            <button className=" px-4 py-2" onClick={()=>addItem(product)}>Add to Cart</button>
            <Link to="#">Go to Cart</Link>
            <div >
            <input onClick={handleDecresment} className="col-md-2" type={"button"} value={"-"}/>
            <div className=" text-center">{qty}</div>
            <input  onClick={handleIncresment} className="col-md-2" type={"button"} value={"+"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
