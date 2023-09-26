import React from 'react';
import Create from './create'
import ListRecord from './recordlist'




//
export  default function NavBarsMain(){
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
                    <a href="/create" className="link "  data-bs-toggle="tooltip"  title=' This pages displays all actions done so far'>
                        Create
                    </a>
                </li>
                
             
                
                <li>
                    <a href="/recordlist" className="link "  data-bs-toggle="tooltip"  title=' This pages displays all actions done so far'>
                        display existing
                    </a>
                </li>
            </ul>
        </nav>
</>
);
}  

  