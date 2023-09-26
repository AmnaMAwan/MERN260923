import React from "react";
 
// We use Route in order to define the different routes of our application
import { HashRouter, Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import NavBarsMain from '../components/navbarsmain';
import RecordList from "../components/recordlist";
import Login from './login';
import { Nav } from "react-bootstrap";
import Signup from './createusers'
//import Edit from "./components/edit";
import Create from '../components/create'
import ListRecord from "../components/recordlist";
 
const App = () => {
 return (
   <div>
   
    
        <NavBarsMain/>
     <Routes>
     <Route path="create" element={<Create />} />
     <Route  path="listrecord" element={<ListRecord />} />
     
       
       
       
      
       
     </Routes>
     
   </div>
 );
};
 
export default App;