import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import context from 'react-bootstrap/esm/AccordionContext';
import { UserContext, usersi ,num1,bal,balcontext,Card, userLoged} from "./context"
import Dashboard from './main'
//import Signup from '..main';
export function Login ()
{
     var ctxuser=React.useContext(userLoged)  
    const navigate = useNavigate();
    const ctx = React.useContext(UserContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //ctxuser.email= email;
    userLoged.email=email
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
           
           navigate("/main")
            console.log(user);
            //onsole.log(ctxuser.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        
        <>
        <h3> Loged user is{userLoged.email}         </h3>  
        <p align="center">
            <main >        
                <section>
                    <div>                                            
                        <p> FocusApp </p>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login 
                                                                                                   
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/createusers">
                                Sign up
                            </NavLink>
                        </p>
                                      
                    </div>
                </section>
            </main>
            </p>
        </>
    )
}
 
export default Login