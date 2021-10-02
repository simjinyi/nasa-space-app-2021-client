import React,{useState} from 'react';
import RegisterForm from './RegisterForm';
import "./index.css";
import {useHistory} from "react-router-dom";

function Register(){
    const history=useHistory();
    const[user,setUser]=useState({name:"",email:""});
    const[error,setError]=useState("");

    const register = details=>{
        // if not error
        console.log(details);
        setUser({
            name:details.name,
            email:details.email
          });

        //else: set error
        /**
         * check for error
         * if no error, 
         * setUser({
            name:details.name,
            email:details.email

            #insert into database

          else{
            console.log("Details do not match!");
            setError("Details do not match!");
        }
          });
         */
    }

    return(
        <div className='App'>{
            (user.email!=="")?
                (history.push("/Landing"))
                :
                (<RegisterForm regis={register} error={error} />)
        }
        </div>
      );
}
export default Register;