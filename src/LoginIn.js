import React,{useState} from 'react';
import LoginForm from './LoginForm';
import "./index.css";
import {useHistory} from "react-router-dom";

function LoginIn(){
  const adminUser={
    email:"admin@admin.com",
    password:"admin",
  }

  const history=useHistory();


  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login = details=>{
    console.log(details);
    if (details.email===adminUser.email&&details.password===adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }
    else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }  

  //https://www.youtube.com/watch?v=tiAlSpyWIDs
  return(
    <div className='App'>
      {(user.email!=="")?(
        history.push("/Landing")
      ):(
        <LoginForm Login={Login} error={error} />
      )}
      
    </div>
  );
}


export default LoginIn;