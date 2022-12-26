import CartReducer from "./cartReducer";
import authReducer from './authReducer'
import orderReducer from './orderReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    CartReducer,authReducer,orderReducer
})

export default rootReducer;