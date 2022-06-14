import React, {useState} from 'react'
import FormInput from './FormInput';
//import { useHistory } from "react-router-dom";
import "./forminput.scss";

import "./pagex8.scss"




const Pagex8 = () => {

   async function getAuthResponse() {
      const result = await fetch('http://localhost:9000/Auth', {
method: 'GET',
mode: 'no-cors',
headers: {'Content-Type':'application/x-www-form-urlencoded'}
      });

      const data = await result.json();
      const obj = JSON.parse(data);

      if (obj.isUserAuthenticated == 1)
         return true;


      return false;
   }

   //const history = useHistory();

   const [userRegistration, setUserRegistration] = useState({
username:"",
password: "",

   });

   const [records, setRecords] = useState([]);

   const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setUserRegistration({ ...userRegistration, [name] : value});

   }

   const  handleSubmit = (e) => {
      e.preventDefault();
      const newRecord = { ...userRegistration, id: new Date().getTime().toString()};
      // console.log(records);
      setRecords([ newRecord]);

      console.log(typeof(records));
      console.log(records);
      fetch('http://localhost:9000/Post', {
method: 'POST',
mode: 'no-cors',
headers: {'Content-Type':'application/x-www-form-urlencoded'},
body:  JSON.stringify(records)
      }) .then(() => {
         console.log('new record added');
      }

              );

      console.log("Before Auth");

      const response_temp = fetch('http://localhost:9000/Auth', {
method: 'GET',
mode: 'no-cors',
headers: {'Content-Type':'application/x-www-form-urlencoded'}
      }).then(() => {
         console.log('in auth handler');
      }

             );

      //const auth_response = response_temp.json();
      //  console.log("response temp : " + response_temp);
      //    console.log("After Auth");

   }

   return (
      <form actions="" onSubmit= {handleSubmit}>
         <div className='pagex8'>
             <label htmlFor="username">Alias Name</label>
             <FormInput name="username" placeholder="Alias Name"/>
             <input type="text" autoComplete="off"
                 value= {userRegistration.username}
                 onChange= {handleInput}
                 name="username" id="username" />

             <FormInput name="password" placeholder="password" />
             <label htmlFor="password">Password</label>
             <input type="password" autoComplete="off"
                 value= {userRegistration.password}
                 onChange= {handleInput}
                 name="password" id="password" />
             <button type='submit'>Submit</button>
         </div>
         {  /* <div>
               <label htmlFor='ok'>regeneration </label>
            </div> */
         }
         {/* <button onClick ={()=> history.push("./Page3.js")} >OK</button> */}

      </form>
   )
}

export default Pagex8
