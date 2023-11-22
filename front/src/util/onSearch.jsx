import axios from 'axios';
import { miApiKey } from '../util/loginValidation';
export const onSearch = (id)=> {
const [characters, setCharacters] = useState([]);
axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
    ({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setPreImg(PreIMG_INIT);
          
       } else {
          window.alert('¡Character not found with the ID!'+ id);
       }
    }).catch(error =>console.log(error))     

}