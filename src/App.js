import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import "./index.css";
import "./Landing"

function App(){
  const adminUser={
    email:"admin@admin.com",
    password:"admin",
  }

  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login=details=>{
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

  const Logout=()=>{
    setUser({name:"",email:""});
  }

  
  //https://www.youtube.com/watch?v=tiAlSpyWIDs
  return(
    <div className='App'>
      {(user.email!=="")?(
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error} />

      )}
    </div>
  );
}


export default App;