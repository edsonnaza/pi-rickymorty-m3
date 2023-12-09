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
        myFavorites: [...state.myFavorites, payload] ,
        allCharacters:[...state.myFavorites,payload]
    
   
      };

    case REMOVE_FAV:
     return { myFavorites: state.myFavorites.filter(fav => fav.id !== payload) 
     }
     case ALL:
      const newPayload = Array.isArray(payload) ? payload : [payload];
      return {
        ...state,
        allCharacters: [...state.allCharacters, ...newPayload],
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
      const favoritesCopy = [...state.allCharacters];
      let filtered = [];
    
      if (payload !== 'All') {
        // Filtrar por género
        filtered = favoritesCopy.filter((f) => f.gender === payload);
    
        // Filtrar por término de búsqueda en nombres
        if (state.searchTerm) {
          filtered = filtered.filter(
            (character) =>
              character.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
        }
      } else {
        // Filtrar por término de búsqueda en nombres para 'All'
        if (state.searchTerm) {
          filtered = favoritesCopy.filter(
            (character) =>
              character.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
        } else {
          // Si 'All' y no hay término de búsqueda, mostrar todos los personajes
          filtered = favoritesCopy;
        }
      }
    
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
