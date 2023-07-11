// Category.action.js
export const GET_CATEGORY_ITEM = 'GET_CATEGORY_ITEM';
export const GET_SORT_DATA = 'GET_SORT_DATA';

export const fetchItemCategory = (data) => ({
  type: GET_CATEGORY_ITEM,
  payload: data
});

export const sortdata = (sortby) => ({
  type: GET_SORT_DATA,
  payload: sortby
});
