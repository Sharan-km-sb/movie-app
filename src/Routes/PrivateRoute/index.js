


import {Navigate} from 'react-router-dom';
import { isloggedin } from '../../loginhandler';


const PrivateRoute = ({Component:Component, ...rest}) =>{
              if(isloggedin){
                  return <Component {...rest}/>
              }
              else{
                  return <Navigate to = "/LoginPage"/>
              }
}


export default PrivateRoute;

