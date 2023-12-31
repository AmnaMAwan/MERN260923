import React, { useState } from "react";
import { useNavigate } from "react-router";

import { UserContext, usersi ,num1,bal,balcontext,Card, userLoged} from "../pages//context"
 

export default function Create() {
 const [form, setForm] = useState({
   name: "",
   deposit: "",
   withdraw: "",
 });
 const navigate = useNavigate();
 
 const ctxuser = React.useContext(userLoged); 
 ctxuser.email=userLoged.email
 var ctxemail = ctxuser.email 
 userLoged.email=ctxemail
 ctxemail=ctxemail
 ctxuser.email=ctxemail;
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };

  await fetch("http://143.198.105.14:5050/record", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ name: "", deposit: "", withdraw: "" });
  navigate("/");
}
 
   
 
 // This following section will display the form that takes the input from the user.
 return (
  
   <div>
    <p align="center">
    <h3>Currently logged in user {userLoged.email}</h3></p>
     <h3>Create New Record  </h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">User</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Deposit">Deposit Amount</label>
         <input
           type="text"
           className="form-control"
           id="depositamt"
           value={form.deposit}
           onChange={(e) => updateForm({ deposit: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Deposit"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
