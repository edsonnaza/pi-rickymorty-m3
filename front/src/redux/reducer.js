import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV_BYGENDER,ALL, DELETE_CHARACTER } from "./actions-types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload};

    case ALL:
        return {
            ...state,
            allCharacters:[...state.allCharacters, payload],
        };
    case DELETE_CHARACTER:{
        let deletedChar = state.allCharacters.filter((allChar) => {
            return allChar.id !== parseInt(payload);
          });
          return {
            ...state,
            allCharacters:deletedChar,
          }
    }

    case FILTER_FAV_BYGENDER:
      let copyAllMyFavorites = [...state.myFavorites];

      if (payload === "All") {
        return {
          ...state,
          myFavorites: copyAllMyFavorites,
        };
      }

      let filtered = copyAllMyFavorites.filter((favorite) => {
        return favorite.gender === payload;
      });

      return {
        ...state,
        myFavorites: filtered,
      };

    case ORDER_FAV:
      let copy3 = [...state.myFavorites];

      return {
        ...state,
        myFavorites: copy3.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
