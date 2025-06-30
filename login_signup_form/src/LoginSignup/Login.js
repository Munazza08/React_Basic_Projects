import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (event) =>{
    const value = event.target.value;
    const name = event.target.name;
    if("email" === name){
       setEmail(value)
    }
    if("password" === name){
      setPassword(value)
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(email ==="" || password ===""){
        alert("Please Enter Details!")
    }else{
      let getDetails = JSON.parse(localStorage.getItem("user"))
      console.log(getDetails);
      getDetails.forEach((curValue)=>{
        console.log(curValue.password);
        let storeEmail = curValue.email;
        let storePassword = curValue.password;
  
        if(storeEmail === email && storePassword === password){
           alert("Login Successfully !")
           navigate("/home")
        }else{
          return setMsg("Invalid Email or Password!!")
        }
  
      });
    }
  };

  return (
    <div>
     <Navbar/>
      <div>
      <p className='errmsg'>{msg}</p>
      <form onSubmit={handleSubmit} className='login-form'>
          <div className='heading'>
             <p> Log In</p>
          </div>
          <div className='account'>
          <input type='email' name='email' placeholder=' Enter your Email' onChange={handleInput}/>
          <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
          <p>Want to create account? <a href='/'>Signup</a></p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
