import { UserContext, usersi ,num1,bal,balcontext,Card} from "./context";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Deposit(){
  const ctx = React.useContext(UserContext); 
  var ctxbal=React.useContext( balcontext) 
 //const  deposit=100;
 //const [value, setValue] = useState('');
 // ctxbal.balance=ctxbal.balance+300;
 
  
  //bal=deposit;
 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  var [Deposits, setDeposits]    = React.useState('');
   
  //const[ctxbal,setbalance]     = React.useState('');
  //const [value, setValue] = useState('');

  /*const handleChange = event => {
    setValue(event.target.value);
  };

  console.log(value);
  */
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
    }

   const handledepositChange = (event) => {
      setDeposits(Number(event.target.value));
    };


    /*const handleAddition = () => {
      setbalance(ctxbal +100);
    };

    */

  
      function handleDeposit(){
        console.log(Deposits);
        if (!validate(Deposits,     'Deposit'))     return;
        
        //ctx.users.push({value,balance:ctxbal});
        //ctxbal.balance.push({Deposits,balance:ctxbal});
        {ctxbal.balance=Deposits+ctxbal.balance}
        //push({value,balance:100});
        setShow(false);
      }    

      function clearForm(){
        setDeposits('');
        //setEmail('');
        //setPassword('');
        setShow(true);
      }
      return (

                 



        //
        
        <>
        <p align="center"> 
        <Card
        bgcolor="primary"
        
        header="Deposit Screen"
        status={status}
        body={show ? (  
                <>{'current balance is '}
                <font  color="red">{ctxbal.balance}</font>
                 
                
                <input type="number" className="form-control" id="deposits"  placeholder="Ente Deposit" value={Deposits} onChange={handledepositChange}/><br/>
                
                
                <button type="submit" className="btn btn-light" onClick={handleDeposit}>Submit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Submit</button>
                </>
              )}
      />

               <hr/
               > 
        
        
        
        </p>
        </>
               
               
              
            );  
      }        


    
