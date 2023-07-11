import { combineReducers } from "redux";
import getCategories from "./Redux/NavbarRedux/Navbar.reducer";
import fetchItemReducer from "./Redux/CategoryRedux/Category.reducer";
import productReducer from "./Redux/ProductRedux/Product.reducer";

export const Reducer= combineReducers({
    data:getCategories,
    data2:fetchItemReducer,
    data3:productReducer,
})