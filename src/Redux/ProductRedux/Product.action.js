export const GET_PRODUCT='GET_PRODUCT'

export const getproduct=(product)=>{
    return{

    type:GET_PRODUCT,
    payload: product,
}
};

console.log("data is product action")