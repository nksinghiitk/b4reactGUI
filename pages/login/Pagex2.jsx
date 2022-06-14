import React, {useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import './pagex8.scss';

const Pagex2 = () => {

   const navigate = useNavigate();

   const [userRegistration, setUserRegistration] = useState({
aliasname:"",
password: "",

   });

   const [records, setRecords] = useState([]);

   const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setUserRegistration({ ...userRegistration, [name] : value});

   }

   const handleSubmit = (e) => {
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

              )

   }

   return (

             <form actions="" onSubmit= {handleSubmit}>

                                        <div>
                                        <label htmlFor="aliasname">Alias Name</label>
                                              <input type="password" autocomplete="off"
                                                    value= {userRegistration.password}
                                                          onChange= {handleInput}
                                                                name="aliasname" id="aliasname" />
                                                                      </div>

                                                                      <div>
                                                                      <label htmlFor="password">Password</label>
                                                                            <input type="password" autocomplete="off"
                                                                                  value= {userRegistration.password}
                                                                                        onChange= {handleInput}
                                                                                              name="password" id="password" />
                                                                                                    </div>

   {  /* <div>
         <label htmlFor='ok'>regeneration </label>
      </div> */
   }

   <button type='submit'>OK</button>

   {/* <button onClick ={()=> history.push("./Page3.js")} >OK</button> */}
   <span>                      </span>
   <button onClick = {()=> navigate("./Page7.js")}>Regeneration of Keystore</button>
                     <span>                      </span>
                     <button onClick = {()=> navigate("./Page7.js")}>Certificate Revocation</button>
                                       <span>                      </span>
                                       <button onClick = {()=> navigate("./Page5.js")}>Generate new certificate</button>

                                             </form>

          )
}

export default Pagex2
