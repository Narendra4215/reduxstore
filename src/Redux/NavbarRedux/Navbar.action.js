export const GET_CATEGORY="GET_CATEGORY";
export const GET_ITEM="GET_ITEM";

export const fetchCategory =(data)=>({
type: GET_CATEGORY,
payload: data
})

export const getitem =(item)=>({
    type: GET_ITEM,
    payload: item
    })
    console.log("data is action")