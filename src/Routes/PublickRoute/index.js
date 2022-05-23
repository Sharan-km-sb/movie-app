import React from "react";
import { Navigate} from 'react-router-dom';

import { isloggedin } from '../../loginhandler';


const PublicRoute = ({Component:Component, ...rest}) =>{
    if (isloggedin())
{
    return <Navigate to ='/Home'></Navigate>;
 



}
  return <Component {...rest}/>


}


export default PublicRoute;