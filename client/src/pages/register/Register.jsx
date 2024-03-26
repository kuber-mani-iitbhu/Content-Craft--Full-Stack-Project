import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios";




export default function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);

  const handleSubmit= async(e)=>{
  
    e.preventDefault();
    setError(false);

    try{
    const res= await axios.post("/auth/register",{
username,
email,
password,

    });
    res.data && window.location.replace("/login");
  }
    catch(err){
    setError(true);
    }
  };

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Write your username"
       // value={username}
          onChange={(e) => setUsername(e.target.value)}
         />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Write your email" 
             //value={email}
             onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Write your password" 
              // value={password}
               onChange={(e) => setPassword(e.target.value)}
          
        />
        <button className="registerButton" type="submit">
        <Link className="link"to="/register">REGISTER</Link>
        </button>
      </form>
        <button className="registerLoginButton">
        <Link className="link"to="/login">LOGIN</Link>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
    )
}
