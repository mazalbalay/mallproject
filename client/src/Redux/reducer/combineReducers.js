import CartReducer from "./cartReducer";
import authReducer from './authReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    CartReducer,authReducer
})

export default rootReducer;