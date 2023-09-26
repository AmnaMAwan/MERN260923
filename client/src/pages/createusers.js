import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
import { UserContext ,Card} from "./context";

export  default function  Signup  ()  {
  var user=React.useContext(UserContext)  
  const navigate = useNavigate();
    const [show, setShow]         = React.useState(true);
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [status, setStatus]     = React.useState('');
    //const [user, setUser]     = React.useState('');
    
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <>
    <p align="center">
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        user={user}
       
        body={show ? (  
                <>
               
                
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={onSubmit} >Create Account</button>
                </>
              ):(
                <>
                <h5> 
                  <font color="green">Success</font>
                <br/> user  <font color="yellow">
                 </font>
                  <h3>User is {user}</h3>
                  is create successfully </h5>
                
                </>
              )}
      />
      </p>
      </>
   
            

  )}