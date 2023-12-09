import classes from "./Card.module.scss";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

export default function Card(props) {
 
  const {id,name,origin,gender,species,status,image} = props;
 
  const count = useSelector((state) => state.count);
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const closeHandler = (id) => {
    dispatch(removeFav(id));
    props.onClose(id);
  };

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    const character = {
      id, 
      name, 
      status, 
      species, 
      gender, 
      origin, 
      image 
    };

  

    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        console.log("isFav");
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={classes.box}>
      <span>{id}</span>
      <button
        className={classes["button"]}
        onClick={() => closeHandler(id)}
      >
        X
      </button>
      {isFav ? (
        <button className={classes["button"]} onClick={handleFavorite}>
          {" "}
          <FaHeart style={{ color: "red" }} />{" "}
        </button>
      ) : (
        <button className={classes["button"]} onClick={handleFavorite}>
          <FaHeart style={{ color: "white" }} />
        </button>
      )}
      <div className={classes["box-top"]}>
        <Link to={`/detail/${props.id}`}>
          <h3 className={classes["box-title"]}>{name}</h3>
        </Link>

        <p className={classes["gender"]}>{gender}</p>

        <p className={classes.description}>{species}</p>
        <p className={classes.description}>{status}</p>
        <p className={classes.description}>{origin}</p>
      </div>
      <img
        className={classes["box-image"]}
        src={image}
        alt={name}
      />
    </div>
  );
}

// export const  mapDispatchToProps = (dispatch) => {
//   return  {
//     addFav: (character) => {
//       dispatch(addFav(character));
//     },
//      removeFav: (id) => {
//       dispatch(removeFav(id));
//      },
//      countNumber: ()=>{
//       dispatch(countNumber());
//      }
//   }
// }

// export const mapStateToProps =(state) => {
//   return {
//     myFavorites:state.myFavorites,
//     count:state.count
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Card);
