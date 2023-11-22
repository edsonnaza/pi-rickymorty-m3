import { useParams, Link } from "react-router-dom";
import classes from "./Detail.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const miApiKey = "pi-edsonnaza";
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([data]);
          // setPreImg(PreIMG_INIT);
        } else {
          window.alert("¡No hay personajes con este ID!" + id);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return characters.map((item) => (
    <div key={item.id} className={classes.wrapper}>
      <div className={classes["img"]}>
        <img className={classes.img} src={item.image} alt={item.name} />
        <div className={classes.info}>
        <div className={classes.text}>
          <h1 className={classes.h1}>{item.name}</h1>
          <h2 className={classes.h2}>{item.species}</h2>
          <h2 className={classes.h2}>Status:{item.status}</h2>
          <h2>Origin: {item.origin.name} </h2>
          <h2>Type: {item.type}</h2>
        </div>
      </div>

      <div className={classes.btnDiv}>
        <Link to="/">
          <button className={classes.button} type="button">
            Home
          </button>
        </Link>
      </div>
      </div>

      
     
    </div>
  ));
};

export default Detail;
