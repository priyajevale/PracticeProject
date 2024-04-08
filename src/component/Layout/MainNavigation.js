import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import React,{useContext} from 'react';
import AuthContext from '../Store/auth-context';
const MainNavigation = () =>{

    const authCtx=useContext(AuthContext)
    const isLoggedIn=authCtx.isLoggedIn;
    const logoutHandler =() =>{
        authCtx.logout();
    }
    return(
        <header className={classes.header}>
                 <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <div>
            {/* <div className={classes.logo}>React auth</div> */}
            <nav>
                <ul>
                    {!isLoggedIn && <li>
                        <Link to='/auth'>Login</Link>
                    </li> }
                    
                    {isLoggedIn &&  <li>
                        <Link to='/profile'>Profile</Link>
                    </li>}
                    {isLoggedIn && <button onClick={logoutHandler}>Logout</button> }
                    
                </ul>
            </nav>
        </div>
        </header>
   
    )
};
export default MainNavigation;