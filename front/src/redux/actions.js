import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV_BYGENDER,ALL, DELETE_CHARACTER } from "./actions-types";
import axios from 'axios';
const URL = 'http://localhost:3005/rickandmorty/fav';

export const allCharacters = (character) =>{
    return {
        type:ALL,
        payload:character,
    }
}
export const addFav = (character) => {
    return (dispatch)=>{
        axios.post(`${URL}`, character).then(({data}) =>{
            return {
                    type:ADD_FAV,
                    payload: data,
                };
        })
    }
    
};

export const removeFav = (id) => {
    return (dispatch) =>{
        axios.delete(`${URL}/${id}`).then(({data})=>{
            return {
               type: REMOVE_FAV,
               payload: id,
            };
        })
    }
    
};

 

export const filterCardsByGender = (gender) => {
    return {
      type: FILTER_FAV_BYGENDER,
      payload: gender,
    };
  };
  
  export const orderCards = (orden) => {
    return {
      type: ORDER_FAV,
      payload: orden,
    };
  };
export const deleteCharacter = (id) =>{
    return {
        type: DELETE_CHARACTER,
        payload:id,
    }
}