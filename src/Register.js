import React,{useState} from 'react';
import RegisterForm from './RegisterForm';
import "./index.css";
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Register(){
    const history=useHistory();
    const[user,setUser]=useState({name:"",email:""});
    const[error,setError]=useState("");

    const register = details=>{
        if((details.password).length<4){
          setError("Password needs to be at least 4 characters long!");
        }
        else if ((details.name).length===0 || (details.email).length===0){
          setError("Name and email cannot be empty");
        }
        else{
          console.log(details);
          setUser({
              name:details.name,
              email:details.email,
              password:details.password
            });
          axios.post('http://localhost:8080/register',details).then(response=>console.log("Uploaded"));
        }
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