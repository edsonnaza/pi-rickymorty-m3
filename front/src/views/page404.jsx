import { Link } from 'react-router-dom';
import classes from '../views/page404.module.scss';
const Error = () =>{

    return (
    <div>
       
         <div className={classes['c']}>
                <div className={classes['_404']}>404</div>
                <hr />
                <div className={classes['_1']}>THE PAGE</div>
                <div className={classes['_2']}>WAS NOT FOUND</div>
                <Link to='/'>
                <button className={classes['btn']} href='#'>BACK TO HOME</button>
                </Link>
         </div>
    </div>
    )
}

export default Error;