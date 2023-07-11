import { GET_CATEGORY_ITEM, GET_SORT_DATA } from "./Category.action";

const initialState = {
  categoryItems: [],
  sortby: ""
};

const fetchItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_ITEM:
      return {
        ...state,
        categoryItems: action.payload
      };
    case GET_SORT_DATA:
      const { sortby } = action.payload;
      let sortedData = [...state.categoryItems];

      switch (sortby) {
        case "pricelh":
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case "pricehl":
          sortedData.sort((a, b) => b.price - a.price);
          break;
        case "titleaz":
          sortedData.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "titleza":
          sortedData.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }

      return {
        ...state,
        categoryItems: sortedData,
        sortby
      };
    default:
      return state;
  }
};

export default fetchItemReducer;
