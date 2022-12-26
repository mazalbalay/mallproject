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
  };

  const handleDecresment = (product) => {
    dispatch(ReduceQty(product._id));
    setQty(product.qty);
  };

  const showProductPopUp = (e) => {
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
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
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
          
            
            ?.map((product) => {
              return (
                <div
                  key={product._id}
                  className="w-full border border-gray-400 flex  flex-col  hover:scale-105 duration-300"
                >
                  <div className="">
                  <img
                    id={product._id}
                    name={product}
                    onClick={(e) => showProductPopUp(e)}
                    className="w-80 h-60 mx-auto  bg-white"
                    src={product.image}
                    alt="Shoes"
                  />
                  </div>
                  <div className="p-2 grid gap-1">
                  <h2 className="text-xl font-bold text-end ">
                    {product.name}
                  </h2>

                  <p className="text-gray text-end ">{product.description}</p>
                  <div className="flex justify-end gap-3">
                    <button>
                        <FiMinusCircle
                        onClick={() => handleDecresment(product)}
                        className="hover:bg-sky-500 hover:ring-sky-500 text-2xl rounded-xl hover:text-white text-teal-500"
                        />
                    </button>
                    <p className="text-xl">{product.qty}</p>
                    <button>
                        <FiPlusCircle
                        onClick={() => addItem(product)}
                        className="hover:bg-sky-500 hover:ring-sky-500 text-2xl rounded-xl hover:text-white text-teal-500"
                      />
                    </button>
                  </div>
                  <p className="text-end"><span className="font-bold">סה"כ:</span> {product.price} ש'ח</p>
                </div>
                </div>
              );
            })
          }
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