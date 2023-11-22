import { useState } from 'react';
import classes from './Form.module.scss';
import image from  '../../assets/login.webp';
const Form = (props) =>{
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
   
  });
  const [error, setError] = useState("");
  

  

  const validateEmail= (value)=>{
    var emailPattern = /\S+@\S+\.\S+/;
    if(!emailPattern.test(value)){
       
      setError("The email must be an valid email, please try again.");
    } else {
      setError("")
    }

  }

  const validatePassword = (value)=> {
    const passwordInput = value;
    setError("");
    var issueArr = []; 
    
    if (!/^(?!\s*$).+/.test(passwordInput)) {
      setError("Password can not be empty");
    }
    if (!/^.{7,15}$/.test(passwordInput)) {
      setError("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
      setError("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
      setError("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
      setError("Must contain an uppercase letter.");
    }

   
    
    // if (issueArr.length > 0) {
    //     password.setCustomValidity(issueArr.join("\n"));
    //     password.style.borderColor = alertRedInput;
    // } else {
    //     password.setCustomValidity("");
    //     password.style.borderColor = defaultInput;
    // }
  }
    

  const handleChange= (e)=>{
     props.cleanLoginMessage();
    const {value, name } =  e.target;
    if(name==="email"){
      validateEmail(userInput.email)
    }

    if(name==="password"){
      validatePassword(userInput.password);
    }

    setUserInput({
      ...userInput,
      [name]:value,
    });
  }

   return ( 

   <section className={classes.container}>
       
    <div className={classes.loginContainer} >
    
      <div  className={classes.formContainer} >
        <h2>Login</h2>

        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} /> 
        </div>
       <form>
          
        
            <label htmlFor="email"></label>
            <input type="email" 
            className={classes.inputFields} 
            id="email" 
            name="email" 
            placeholder="Email" 
            value={userInput.email} 
            onChange={handleChange} />
         

          
            <label htmlFor="password"></label>
            <input type="password" 
            className={classes.inputFields} 
            id="password" 
            name="password" 
            placeholder="Password" 
            value={userInput.password} 
            onChange={handleChange}/>
          
        
           
            <button type='button'   disabled={error ? true : false} onClick={()=> props.onLogin(userInput)}  className={classes["join-btn"]} name="join" alt="Join"> Join </button>
     
        </form>
        {!error ? null : <div className={classes.errorMessage}> {error} </div>} 
        {!props.loginMessage ? null : <div className={classes.loginMessage}>{props.loginMessage}</div>}
      </div>
      </div>
       
      
      
   </section>

    ) 
}

export default Form;