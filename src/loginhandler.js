

const TOKEN_KEY = "UserToken";


 export const login = () => {  

 
        localStorage.setItem(TOKEN_KEY, "05e0c4249ef2bdb9860005656a41fa21d8540548")
     }
     
   export    const logout = () =>{
                   localStorage.removeItem(TOKEN_KEY);
     }
     
     
 export  const isloggedin = () =>{
         if(localStorage.getItem(TOKEN_KEY)){
             return true;
         }
         return false;
     }


    

