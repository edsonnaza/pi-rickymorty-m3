import Card from '../Card/Card';
import classes from './Cards.module.scss';
import Bienvenido from '../Layout/Bienvenido';

export default function Cards(props) {
   const data = props.characters;
   
   
       return(  <div className={classes.cardsContainer} >
           
          { 
            !data.length && <Bienvenido />}
          { 
            
            data.map( (item)=>(
                <Card 
                key={item.id}
                name={item.name}
                species={item.species}
                status={item.status}
                gender={item.gender}
                origin={item.origin.name}
                image={item.image}
                id={item.id}
                onClose={props.onClose}


                />
            ))

        }
            

         
     
   </div>);
}
