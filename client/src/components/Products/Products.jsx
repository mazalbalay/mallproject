import React from "react";
import { useState , useEffect} from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import ProductPopUp from "./ProductPopUp";
import {  getProducts } from "../Manager/ApiCalls/products";
import { AddProduct, ReduceQty } from "../../Redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";

export default function Products({inputSearch,setProdactLength}) {
  const [popUpProduct, setPopUpProduct] = useState([]);
  const [popUp, setPopUp] = useState(false)
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.CartReducer);
  console.log(state);

  const allProduct = async () => {
    const { data } = await getProducts();
    const productsObj = data.map((product) => {
      setProdactLength(products.length)
      return { ...product, qty: qty };
    });
    setProducts(productsObj);
  };

  useEffect(() => {
    allProduct();
  }, [state]);

  const addItem = (product) => {
    dispatch(AddProduct(product, product.qty));
    setQty(product.qty)
  };

  const handleDecresment=(product) =>{
    dispatch(ReduceQty(product._id));
    setQty(product.qty)
   }

  const showProductPopUp = (e) => {
    console.log(e.target.name)
    console.log(e.target.id)
    products.map((product) =>{
      if(product._id === e.target.id){
        setPopUpProduct(product);
        setPopUp(true)
      }
    })
  };


   const handleOneClose = () => setPopUp(false)

  return (
    <div>
      

      <div className="w-full scroll-p-[24rem] px-4 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
          .filter((product) => {
            if (inputSearch === "") {
              return product;
            } else if (product.name.toLowerCase().includes(inputSearch.toLowerCase())) {
              return product;
            }
          })
          ?.map((product) => {
            return (
              <div
                key={product._id}
                // onClick={() => setPopUp(true)}
                className="w-full border flex  flex-col my-4  hover:scale-105 duration-300"
              >
                <img
                id={product._id}
                name={product}
                  onClick={(e) => showProductPopUp(e)}
                  className="w-80 h-60 mx-auto  bg-white"
                  src={product.image}
                  alt="Shoes"
                />
                <button>למוצר</button>
                <h2 className="text-2xl font-bold text-center py-8">
                  {product.name}
                </h2>

                <p className="text-gray text-end">{product.description}</p>
                <div className="flex text-start ml-44">
                  <button>
                    <FiPlusCircle
                      onClick={() => addItem(product)}
                      className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white"
                    />
                  </button>
                  <p>{product.qty}</p>
                  <button>
                    <FiMinusCircle onClick={() => handleDecresment(product)} className="hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
                  </button>
                </div>
                <p className="text-end">סה"כ: {product.price} ש'ח</p>
              </div>
            );
          })}
        </div>
      </div>
      <ProductPopUp product ={popUpProduct} onClose={handleOneClose} visible={popUp}/>
    </div>
  );
}

// onClose={handleOneClose} visible={popUp}