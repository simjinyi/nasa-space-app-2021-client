import React,{useState} from "react";
import {useHistory} from "react-router-dom";

function LoginForm({Login,error}){

    const history=useHistory();
    const register=()=>{
        history.push("/Register")
      }

    const[details,setDetails]=useState({name:"",email:"",password:""});
    
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className= "form-inner">
                <h2>Login Page</h2>
                {(error!=="")?(<div className="error">{error}</div>):""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <button onClick={<input type="submit" value="LOGIN"/>}>LOGIN</button>
                <button onClick={register}>REGISTER</button>

            </div>
        </form>
    )
}

export default LoginForm

/** 
 <input type="submit" value="LOGIN"/>
        <input type="submit" value="LOGOUT"/>
        <Link to="/signup" className="btn btn-primary">Sign up</Link>
                
<Router>
    <Route path="/" exact>
        <App/>
    </Route>
    <Route path="/Landing" exact>
        <Landing/>
    </Route>
    <div>
    <Link to="../Landing" className="btn btn-primary">Landing</Link>
    </div>
</Router>   
                */