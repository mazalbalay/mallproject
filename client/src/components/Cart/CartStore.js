import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StoreTitle from "./StoreTitle";
import {getStores} from "../ApiCalls/Store";

const CartStore = () => {
  const state = useSelector((state) => state.CartReducer);
  const navigate = useNavigate();
  const [stores, setStores] = useState([])


  useEffect(() => {
    const getStoresData = async () => {
      const result = await getStores();
      setStores(result.data);
    };
    getStoresData();
  }, []);



  const calc = () => {
    let total = 0;
    state.map((product) => {
      let productTotal = +product.price * +product.qty;
      return (total += productTotal);
    });
    return total;
  };

  const qtyOfProducts = () => {
    let total = 0;
    state.map((product) => {
      let qty = +product.qty;
      return (total += qty);
    });
    return total;
  };

  return (
    <div className="w-full border border-gray">
      <div className="bg-black text-white text-center p-4">
        <p className="text-xl"> עגלת קניות</p>
      </div>
      {state.map((product) => {
        stores.map((store) => {
         return(
           product.storeName === store.name ? <StoreTitle store={store} /> && <CartStore product={product} />   : null
    
           )
                       
        });
      })}
      <hr />
      <div className="p-2">
        <div className="flex justify-between">
          <h1 className="font-bold">{calc()} ש"ח</h1>
          <h1>:סה"כ</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">{qtyOfProducts}</h1>
          <h1 className="">:מספר מוצרים</h1>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="text-white text-xl bg-sky-500/75 w-full p-4"
        >
          {` לתשלום ${calc()} ש"ח`}
        </button>
      </div>
    </div>
  );
};

export default CartStore;
