import classes from './Bienvenido.module.scss';
import imagebackground from '../../assets/WallpaperDog-47340.jpg';
const Bienvenido = ()=> {

        return (
            <div className={classes.content}>
                
                <img className={classes.img} src={imagebackground} alt=""/>
            </div>
        )

}

export default Bienvenido;