export const GET_CATEGORY="GET_CATEGORY";

export const fetchCategory =(data)=>({
type: GET_CATEGORY,
payload: data
})
console.log("data is action")