import { useState, useEffect } from "react";
import classes from './SearchBar.module.scss';
import Lupa from '../../assets/Lupa.ico';
import Download from '../../assets/download.ico';
export default function SearchBar(props) {
const [userId, setUserId] = useState('');
const [icoImage, setIcoImage] = useState(Lupa);
   
   //console.log(props);
 useEffect(()=>{
   const identifier = setTimeout(()=>{
      console.log('Checking the timer',userId);
      if(userId.length>0)
     { props.onSearchPrevImg(userId);
       setIcoImage(Download);
      
      }

      else {props.onSearchPrevImg(0);
               setIcoImage(Lupa);
            }
      
   },500);

   return ()=>{
      console.log('CLEANUP');
      clearTimeout(identifier);
   }
 },[userId]);

 const handleChange = (ev)=>{
   ev.preventDefault();
    
   const id = ev.target.value;
   setUserId(id);
  
}

const handleKeyDown = (event) =>{
   console.log(event.key);
   if(event.key === "Enter"){
      const id=event.target.value;
      setUserId(id);
       props.onSearch(userId);
   }
}

   
   return (
      <div className={classes.searchBar}  >
         
         <input   onChange={handleChange} 
         value={userId} 
         type='search' 
         onKeyDown={handleKeyDown}
         />

         <button className={classes.searchbutton} 
         onClick={()=>props.onSearch(userId)}
        
         
         
         > <img className={classes.icono} src={icoImage} alt={"Find a character!"} /></button>
       
      </div>
   );
}
