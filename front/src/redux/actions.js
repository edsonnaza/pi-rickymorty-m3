import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV_BYGENDER,ALL, DELETE_CHARACTER } from "./actions-types";
import axios from 'axios';
 
const URL = 'http://localhost:3005/rickandmorty/fav';

export const allCharacters = (character) =>{
    return {
        type:ALL,
        payload:character,
    }
}
export const addFav =   (character) => {
    
  
        //const { data } =   axios.post(`${URL}`, character);
        return{
          type: ADD_FAV,
          payload: character,
        };
      
    
  }
// export const addFav = async (character) => {
//     try {
//       console.log('Trying to add fav:', character);
//       const { data } = await axios.post(`${URL}`, character);
       
//       return {
//         type: ADD_FAV,
//         payload: data[0],
//       };
//     } catch (error) {
//       console.error('Error adding fav:', error.message);
//       throw new Error(error.message);
//     }
//   };
  

export const removeFav =   (id) => {
   
       // const { data } = await axios.delete(`${URL}/${id}`);

         return {
            type: REMOVE_FAV,
            payload: id,
        };
    
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