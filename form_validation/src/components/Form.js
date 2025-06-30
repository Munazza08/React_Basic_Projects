import React, { useState} from 'react'

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(name && email && password && confirmPass){
            if(password === confirmPass){
                alert("Sign Up Successfully")
            }else{
                alert("ERR : Password & ConfirmPassword must be same !")
            }    
        }else{
            alert("All fields are Mandatory")
        }
        console.log(name,email,password,confirmPass);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <p className='main-heading'>Sign Up</p>
        <div>
            <p className='heading'>Name</p>
            <input type='text' onChange={(event)=>setName(event.target.value)} />
            <p className={name?"data":"noData"}>{name? "" : "Name is required"}</p>
            </div>
        <div>
            <p className='heading'>Email</p>
            <input type='email' onChange={(event)=>setEmail(event.target.value)} />
            <p className={email?"data":"noData"}>{email? "" : "Email is required"}</p>
        </div>
        <div>
            <p className='heading'>Password</p>
            <input type='password' onChange={(event)=>setPassword(event.target.value)} />
            <p className={password?"data":"noData"}>{password? "" : "Password is required"}</p>
        </div>
        <div>
            <p className='heading'>Confirm Password</p>
            <input type='password' onChange={(event)=>setConfirmPass(event.target.value)} />
            <p className={confirmPass?"data":"noData"}>{confirmPass? "" : "Confirm Password is required"}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
