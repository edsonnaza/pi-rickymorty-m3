import classes from './Logout.module.scss';
const Logout = (props)=>{

    
    return (
        <div className={classes.container}>
          
          <hr />
          <h3 className="userName">{'Hello Admin!'}</h3>
          <hr />
          <div className="form_buttons">
            <span 
            className={classes.btn}
            onClick={props.logOut}
            >
              Log Out
            </span>
          </div>
        </div>)
    
}

export default Logout;