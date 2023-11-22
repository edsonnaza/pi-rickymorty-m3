import { Link } from "react-router-dom";
import classes from './Detail.module.scss';
const DetailItem = (props) =>{

    return (

        <div key={props.id} className={classes.wrapper}>

              <div className={classes['product-img']}>
                <img className={classes.img}   src={props.image}  alt={props.name} />
              </div>

              <div className={classes['product-info']} >
                <div className={classes["product-text"]} >
                    <h1 className={classes['h1']}>{props.name}</h1>
                    <h2 className={classes['h2']}>{props.species}</h2>
                    <h2 className={classes.h2}>Status:{props.status}</h2>
                    <h2>Origin: {props.origin} </h2> 
                    <p>Type: {props.type}</p>
                </div>
                <div className={classes["product-price-btn"]}>
                    <Link to='/'>
                        <button className={classes.button} type="button">Home</button>
                    </Link>
                    

                </div>
              </div>
              </div>
    )
}

export default DetailItem;