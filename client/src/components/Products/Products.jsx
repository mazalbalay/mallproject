import React from "react";
import { useState, useEffect } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import ProductPopUp from "./ProductPopUp";
import { getProducts } from "../Manager/ApiCalls/products";
import { AddProduct, ReduceQty } from "../../Redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";
export default function Products({inputSearch,setProdactLength , storeName}) {
  const [popUpProduct, setPopUpProduct] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [inCart, setInCart] = useState("ADD TO CART");
  const [disable, setDisable] = useState();
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  setProdactLength(products.length);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.CartReducer);
  console.log(state);
  const allProduct = async () => {
    const { data:products } = await getProducts();
    const data = products.filter(product => product.brand === storeName)
    const productsObj = data.map((product) => {
      return { ...product, qty: qty };
    });
    setProducts(productsObj);
  };
  useEffect(() => {
    allProduct();
  }, [state]);
  const addItem = (product) => {
    dispatch(AddProduct(product, product.qty));
    setQty(product.qty);
    const inCart = state.find((product)=> product._id === product._id);
    inCart ? setInCart("IN CART") && setDisable("disable") : setInCart("ADD TO CART")
  };
  const handleDecresment = (product) => {
    dispatch(ReduceQty(product._id));
    setQty(product.qty);
  };
  const showProductPopUp = (e) => {
    console.log(e.target.name);
    console.log(e.target.id);
    products.map((product) => {
      if (product._id === e.target.id) {
        setPopUpProduct(product);
        setPopUp(true);
      }
    });
  };
  const handleOneClose = () => setPopUp(false);
  return (
    <div>
      <div className="w-full scroll-p-[24rem] px-4 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter((product) => {
              if (inputSearch === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(inputSearch.toLowerCase())
              ) {
                return product;
              }
            })
          .map((product , key) => {
              return (
                <div
                  key={key}
                  className="w-full border flex  flex-col my-3  hover:scale-105 duration-300"
                >
                  <img
                    id={product._id}
                    name={product}
                    onClick={(e) => showProductPopUp(e)}
                    className="h-40 mx-auto bg-white p-3"
                    src={product.image}
                    alt="Shoes"
                  />
                  <h2 className="text-md font-bold text-center px-2 py-4">
                    {product.name}
                  </h2>
                  <p className="text-gray text-center">{product.description}</p>
                  <p className="text-center">סה"כ: {product.price} ש'ח</p>
                  <div className="w-12/12">
                  
                    <button
                        onClick={() => addItem(product)}
                        className={`bg-sky-500 hover:bg-sky-500 hover:ring-sky-500 rounded-sm p-4 mt-4 w-full`}
                      >ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <ProductPopUp
        product={popUpProduct}
        onClose={handleOneClose}
        visible={popUp}
      />
    </div>
  );
}









