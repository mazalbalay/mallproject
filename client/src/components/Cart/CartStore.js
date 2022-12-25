import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IncreaseQty, ReduceQty } from "../../Redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CartStore = () => {
  const state = useSelector((state) => state.CartReducer);
  console.log(state);
  const dispatch = useDispatch();

  const handleIncresment = (productId) => {
    dispatch(IncreaseQty(productId));
  };

  const handleDecresment = (productId) => {
    dispatch(ReduceQty(productId));
  };

  const calc = () => {
    let total = 0;
    state.map((product) => {
      let productTotal = +product.price * +product.qty;
      return (total += productTotal);
    });
    return total;
  };

  return (
    <div className="w-80 border border-gray ml-2">
      <div className="bg-black text-white text-center p-4">
        <p className="text-xl"> עגלת קניות</p>
      </div>
            <div className="flex justify-end bg-gray-200">
              <div className="name grid  place-content-center ">
                <h1 className="font-bold">store name</h1>
              </div>
              <div className="right-img bg-gray-200 ">
                <img
                  className="w-24 rounded-full p-3"
                  src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/291457391_556774552703567_2822531227252307747_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CyjXaIGWAJ8AX8tQaoa&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfA4xhnT3nM9QjJBVZ4sEH53UHxoc1ruMHxEMD4NO-Bh7Q&oe=63A5F3AF"
                  alt=""
                />
              </div>
            </div>
      {state.map((product) => {
        return (
          <>

            <div className="flex p-2">
              <div className="plus-minus text-center grid  place-content-center">
                <div className="">
                  <div className="minus-plus flex justify-around">
                    <button className="text-teal-400">
                      <FiMinusCircle
                        onClick={() => handleDecresment(product._id)}
                      />
                    </button>
                    <h5>{product.qty}</h5>
                    <button className="text-teal-400">
                      <FiPlusCircle onClick={() => handleIncresment(product._id)} />
                    </button>
                  </div>
                </div>
                <h5>{`${product.price} ש"ח`}</h5>
              </div>

              <div className="contact text-end">
                <h1 className="font-bold">{product.name}</h1>
                <p className="text-gray-400 text-sm">{product.brand}</p>
                <p className="text-gray-400 text-sm">{product.color}</p>
              </div>

              <div className="right-img ">
                <img
                  className="w-24"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>

            <div className="price pl-2">
              <h1>{product.price * product.qty}</h1>
            </div>
            <hr className="w-full my-3"></hr>
          </>
        );
      })}
      <hr />
      <div className="p-2">
        <div className="flex justify-between">
          <h1 className="font-bold">{calc()}</h1>
          <h1>:סה"כ</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">37 ש"ח</h1>
          <h1 className="">:בקניה זו חסכת</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">{state.length}</h1>
          <h1 className="">:מספר מוצרים</h1>
        </div>
      </div>
      <div className="">
        <button className="text-white text-xl bg-sky-500/75 w-full p-4">
         {` לתשלום ${calc()} ש"ח`}
        </button>
      </div>
    </div>
  );
};



export default CartStore;
