import React from "react";
import {useHistory} from "react-router-dom";


const Landing=()=>{
    const history=useHistory();
    const Logout=()=>{
        history.push("/Login")
      }


    return(
        <div className="welcome">
          <h2>
            Plan Success
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
    )
}
export default Landing;

