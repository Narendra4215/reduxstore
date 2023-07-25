// import { categorydata } from "./Navbar.dispatch";
import { GET_ITEM } from "./Navbar.action";
import { GET_CATEGORY } from "./Navbar.type";

const initialState={
    categories: [],
    error: "",
    item: '',
    loading: false,
};

console.log("data is reducer");



const getCategories=(state= initialState,action)=>{
    switch(action.type){
        case GET_CATEGORY :
            return{
                ...state,
                categories: action.payload,
            } 
             case GET_ITEM :
            return{
                ...state,
                item: action.payload,
                // loading: false,
            }
        default :{
            return state
        }
            
    }
}
export default getCategories;