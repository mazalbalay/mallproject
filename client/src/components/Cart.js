import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduceQty, IncreaseQty, ClearCart } from "../Redux/action/cartActions";

const Cart = () => {
  const state = useSelector((state) => state.CartReducer);
  console.log(state)
  const dispatch = useDispatch();

  const cartBublleEvent = (e) => {
    let targetIcon = e.target.className;
    let id = e.target.dataset.id;

    switch (targetIcon) {
      case "fas fa-chevron-down":
        dispatch(ReduceQty(id));
        break;

      case "fas fa-chevron-up":
        dispatch(IncreaseQty(id));
        break;

      case "clear":
        dispatch(ClearCart(state));
    }
  };

  const calc = () =>{
    let total = 0;
    state.map(product =>{
      let productTotal = product.price * product.qty;
      return total += productTotal
    })
    return total
  }


  return (
    <div onClick={cartBublleEvent} className="container mx-auto">
      <h1 className="text-center mb-5">Your Cart</h1>

      <div>
        {state.map((product) => {
          let productTotal = product.price * product.qty;
          return (
            <div key={product.id}>
              <div>
                <img src={product.image} alt={product.title} className="h-40" />
              </div>
              <div >
                <p>{product.title}</p>
                <p>${productTotal}</p>
              </div>
              <div >
                <i className="fas fa-chevron-up" data-id={product.id} />

                <p className="mb-0">{product.qty}</p>
                <i className="fas fa-chevron-down" data-id={product.id} />
              </div>
            </div>
          );
        })}
      </div>

      <p>`Totla: ${calc()}`</p>
      <button className="clear">Clear Cart</button>
      
    </div>
  );
};

export default Cart;
