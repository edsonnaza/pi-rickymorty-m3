import classes from './ImgPrev.module.scss';
const ImgPrev = (props) =>{
   // console.log(props.preImg)
    return (
        <div className={classes.container} >
        <img className={classes.imgprev} src={props.preImg[0].image} alt={props.preImg[0].name}/>
        <br/>
     </div>
    )
}

export default ImgPrev;