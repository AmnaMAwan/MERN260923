import React from "react";
 
// We use Route in order to define the different routes of our application
import { HashRouter, Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import NavBare from "./navbarse";
import RecordList from "./components/recordlist";
import Login from './pages/login';
import { Nav } from "react-bootstrap";
import Signup from './pages/createusers'
import Create from './components/create';
import Listrecord from './components/recordlist'
import Withdraw from './components/withdrw'
//import Create from "./components/create";
 
const App = () => {
 return (
   <div>
   
    
        <NavBare/>
     <Routes>
     <Route exact path="/" element={<Login />} />
     <Route  path="createusers" element={<Signup />} />
     <Route  path="login" element={<Login/>} />

     <Route  path="create" element={<Create />} />
     <Route  path="recordlist" element={<Listrecord />} />
     <Route  path="withdraw" element={<Withdraw />} />
     
       
       
       
      
       
     </Routes>
     
   </div>
 );
};
 
export default App;