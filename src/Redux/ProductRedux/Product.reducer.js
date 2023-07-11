import { GET_PRODUCT } from "./Product.action";

console.log("data is product reducer")

const initialState = {
    productData: [],
};

const productReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                productData: action.payload,
            }
        default:
            return state
    }

}

export default productReducer