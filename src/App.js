import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AuthForm from "./component/Auth/AuthForm";
import HomePage from "./component/Pages/HomePage";
import UserProfile from "./component/Profile/UserProfile";
import Auth from "./component/Pages/Auth";
import MainNavigation from "./component/Layout/MainNavigation";
import { AuthContextProvider } from "./component/Store/auth-context";
// import AuthForm from "./component/Auth/AuthForm";
// import MainNavigation from "./component/Layout/MainNavigation";
  function App(){


 return(
   <AuthContextProvider>
      <Router>

<div>
<MainNavigation/>
<Routes>
<Route path ='/' element={<HomePage/>} />
<Route path='/auth' element={<Auth />}/>
<Route path='/profile' element={<UserProfile/>}>
 

   </Route>
</Routes>
</div>
  
</Router>

   </AuthContextProvider>

 );
}
export default App;