import Cards from '../Cards/Cards';
import { useSelector,useDispatch } from 'react-redux';
import classes from './FavoritesChar.module.scss';
import FilterChars from '../filter/filterChars';

const FavoritesChar = (props) => {
    const myFavorites = useSelector((state)=>state.myFavorites);

    return ( < div>

    
    
    {!myFavorites.length && <h1  ><center className={classes.h1}>No favorite characters were selected!</center></h1>}
     { myFavorites.length && <h2><center>My Favorite Characters</center></h2> }

 
      {myFavorites.length> 0 && <FilterChars />}
      
      {myFavorites && 

     
        
       <Cards 
       characters={myFavorites} 
       onClose={props.onClose} 
       logged={props.logged}
       /> } 



           </div>
    )
}

export default FavoritesChar;