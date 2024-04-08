import AuthContext from '../Store/auth-context';
import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
const ProfileForm = () =>{
    const history=useNavigate();
    const newPasswordInputRef=useRef();
    const authCtx= useContext(AuthContext);
const submitHandler=(event) =>{
    event.preventDefault();
    const enteredPassword=newPasswordInputRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDqkOl56-drVPPcyG_NtP1DJjpi67FEVys",{
        method:'POST',
        body:JSON.stringify({
            idToken:authCtx.token,
            password:enteredPassword,
            returnSecurePassword:false,
        }),
        headers:{
            'Content-Type':'application/json'
        }
        }).then((res) =>{
            //Always Successed
            history('/');
    });
};
   
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
            <label>new Password</label>
            <input type="password" ref={newPasswordInputRef}/>
            <div className={classes.actions}>
            <button > change Password</button>
            </div>
            
        </div>
        </form>
        
    )
};
export default ProfileForm;