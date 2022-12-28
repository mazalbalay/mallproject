import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { ClearCart, IncreaseQty, ReduceQty } from "../../Redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartStore = () => {
  
  const state = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncresment = (productId) => {
    dispatch(IncreaseQty(productId));
  };

  const handleDecresment = (productId) => {
    dispatch(ReduceQty(productId));
  };

      const handleDeletingCart = ()=> {
        dispatch(ClearCart(state))

      }

  const calc = () => {
    let total = 0;
    state.map((product) => {
      let productTotal = +product.price * +product.qty;
      return (total += productTotal);
    });
    return total;
  }; 
  
  const numOfProductsInCart = () => {
    let total = 0;
    state.map((product) => {
      let numTotal =+product.qty;
      return (total += numTotal);
    });
    return total;
  };

  return (
    <div className="w-full border border-gray">
      <div className="bg-black text-white text-center p-4">
        <p className="text-xl font-bold"> עגלת קניות</p>
      </div>
      {state.map((product) => {
        return (
          <div className="w-full">
            <div className="flex p-2 justify-between">
              <div className="plus-minus text-center grid place-content-center">
                <div className="">
                  <div className="minus-plus flex justify-around w-3/12 ml-4">
                    <button className="text-sky-600">
                      <FiMinusCircle
                        onClick={() => handleDecresment(product._id)}
                      />
                    </button>
                    <h5>{product.qty}</h5>
                    <button className="text-sky-600">
                      <FiPlusCircle
                        onClick={() => handleIncresment(product._id)}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact text-end w-6/12">
                <h1 className="text-md">{product.name}</h1>
                <p className="text-gray-400 text-sm">{product.brand}</p>
                <p className="text-gray-400 text-sm">{product.color}</p>
                <h1 className="text-gray-600 text-sm font-bold">{`מחיר ליחידה: ${product.price} ש"ח`}</h1>
              </div>

              <div className="right-img ">
                <img className="w-24" src={product.image} alt={product.name} />
              </div>
            </div>

            <hr className="w-full my-3"></hr>
          </div>
        );
      })}
      <div className="bg-red-600 py-3 my-2 text-center text-white font-bold">
        <button onClick={handleDeletingCart}>CLEAR CART</button>
      </div>
      <div className="p-3">
        <div className="flex justify-between font-bold">
          <h1> {calc()}</h1>
          <h1>:סה"כ בשקלים</h1>
        </div>
        <div className="flex justify-between font-bold ">
          <h1>{numOfProductsInCart()}</h1>
          <h1 className="">:מספר מוצרים בעגלה</h1>
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

