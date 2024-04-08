import React ,{useState,useRef, useContext} from 'react';
import classes from './AuthForm.module.css';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../Store/auth-context';
const AuthForm = () =>{
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const history=useNavigate();
 const authCtx= useContext(AuthContext)
  const [isLoading,setIsLoading]=useState(false);
     const[isLogin,setIsLogin]=useState(true);
     const switchAuthModeHandler = () =>{
        setIsLogin((prevState) => !prevState);
     }
     const submitHandler=(e) =>{
e.preventDefault();
const enteredEmailRef=emailInputRef.current.value;

const enteredPasswordRef=passwordInputRef.current.value;

setIsLoading(true);
let url;
if(isLogin){
url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqkOl56-drVPPcyG_NtP1DJjpi67FEVys"
}else{
url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqkOl56-drVPPcyG_NtP1DJjpi67FEVys"

     }
     fetch (
      url,
      {
      method:"POST",
      body:JSON.stringify({
        email:enteredEmailRef,
        password:enteredPasswordRef,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    
    }).then(res =>{
    setIsLoading(false);
    if(res.ok){
  return res.json();
  }else{
    return res.json().then((data) =>{
       let errorMessage = 'Athentication failed!'
      throw new Error(errorMessage);
      // console.log(data);
    });
  }
  }).then((data) =>{
    authCtx.login(data.idToken);
    history('/')
    console.log(data);
  }).catch((err) =>{
    alert(err.mesage);
  });

    }
    return (
        
            <section className={classes.auth}>
                <h2>{isLogin ?'Login' :"sign Up"}</h2>
                <form onSubmit={submitHandler}>
        <div className={classes.control}>
            <label>Email</label>
            <input type="email" ref={emailInputRef}/>
            </div>
            <div className={classes.control}>
            <label>Password</label>
           <input type="password" ref={passwordInputRef}/>
            </div>
            
        
        <div  className={classes.actions}>
            {!isLoading &&<button>{isLogin ? 'login':'Create Account'}</button>}
            {isLoading && <p>sending request...!</p>}
        <button
          type='button'
          className={classes.toggle}
        onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
      </form>
      </section>
      
     
    );
};
export default AuthForm;