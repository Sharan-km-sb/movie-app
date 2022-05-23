import React from "react";
import { useParams } from "react-router-dom";

function Pagenotfound() {
     const params = useParams();
    return(
        <>
        
       <h3 style={{color:"white",
                display:"grid",
                placeItems:"center",
               }}> "{params.pagename}" PAGE NOT FOUND!!</h3>        
        </>
    )
}

export default Pagenotfound;