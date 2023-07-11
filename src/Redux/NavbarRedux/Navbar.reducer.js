// import { categorydata } from "./Navbar.dispatch";
import { GET_CATEGORY } from "./Navbar.type";

const initialState={
    categories: [],
    error: ""
};

console.log("data is reducer");



const getCategories=(state= initialState,action)=>{
    switch(action.type){
        case GET_CATEGORY :
            return{
                ...state,
                categories: action.payload,
            }
        default :{
            return state
        }
            
    }
}
export default getCategories;