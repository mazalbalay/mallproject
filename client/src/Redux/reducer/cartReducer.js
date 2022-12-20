import { AddProductLogic, increaseLogic, reduceLogic, clearCartLogic } from "./cartLogic";
const cartInitialState = [];

const CartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let product = action.payload;
            let qty = action.payloadQty;
            return AddProductLogic(state, product, qty);



        case 'INCREAS':
            let productId1 = action.payload;
            return increaseLogic(state, productId1);


        case 'REDUCE':
            let productId2 = action.payload;
            return reduceLogic(state, productId2);


        case 'CLEAR_CART':
            let cartState = action.payload;
            return clearCartLogic(state, cartState);


        default:
            return state;

    }
}

export default CartReducer;