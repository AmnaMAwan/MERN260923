import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/style.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Create from './components/create'
import ListRecord from './components/recordlist'
import Withdraw from './components/withdrw'
import Login from './pages/login'



//
export default function NavBare(){
return (  
 /* <>
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                
                                
                                <Navbar.Collapse id="basic-navbar-nav">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  
    
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"  >Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#createaccount/">Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#deposit/">Deposits</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#withdraw">Withdraw</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#allactions" >All Actions</a>
      </li>
      
    </ul>
  </div>
</nav>
                                   
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />       
  </>

*/
<>

<nav className="navbar">
            <ul className="navMenu">
                <li>
                    <a href="/login" className="link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/createusers" className="link" data-bs-toggle="tooltip"  title=' Creat new user here'>
                        Sign Up
                    </a>
                </li>
                <li>
                    <a href="/create" className="link" data-bs-toggle="tooltip"  title=' Creat new user here'>
                        Deposit
                    </a>
                </li>

                <li>
                    <a href="/recordlist" className="link" data-bs-toggle="tooltip"  title=' Creat new user here'>
                       Dispaly Existig
                    </a>
                </li>
                <li>
                    <a href="/withdraw" className="link" data-bs-toggle="tooltip"  title=' Creat new user here'>
                       Withdraw
                    </a>
                </li>
            </ul>
        </nav>
</>
);
}  

  