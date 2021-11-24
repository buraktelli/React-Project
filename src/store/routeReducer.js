import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

//Tum stateler bir yerde toplandi
const rootReducer = combineReducers({
    cart: cartReducer,
    //...
})

export default rootReducer;